import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurants);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };
  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false)
    return (
      <h1>Looks like you ar offline.Please check your internet connnection</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search flex justify-center mt-20">
        <input
          type="text"
          className="border-2 border-gray-300 border-r-0 p-2 w-90 rounded-l-md outline-0"
          placeholder="What You want to eat 🤤..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border-2 border-l-0 border-gray-300 p-2 bg-red-600 font-bold text-white w-30 rounded-r-md"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>

      <div>
        <button
          className="p-2 ml-5 border border-red-300"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
        <div>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap m-10 justify-center">
        {filteredRestaurant.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
