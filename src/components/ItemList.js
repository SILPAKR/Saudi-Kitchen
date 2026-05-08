import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span>- ⃁{item.card.info.price / 1000}</span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 relative">
            <div className=" ">
              <button
                className="p-2   bottom-0 right-0 absolute bg-red-600 font-bold rounded-lg shadow-lg text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
