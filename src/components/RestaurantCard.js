import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="w-full sm:w-[300px] m-4">
      <div className="shadow-md bg-white rounded-md hover:shadow-2xl cursor-pointer relative">
        <img
          className="w-full h-40 sm:h-48 object-cover rounded-t-md"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="food"
        />
        <div className="p-3">
          <h4 className="font-bold text-lg sm:text-xl  overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </h4>
          <h4 className="text-sm text-gray-500 mt-1  overflow-hidden text-ellipsis whitespace-nowrap">
            {cuisines.join(", ")}
          </h4>
          <div className="flex justify-between items-center mt-3">
            <div className="text-white bg-green-600 flex items-center px-2 py-1 rounded-md text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{avgRating}</span>
            </div>
            <div className="text-sm font-bold">{costForTwo}</div>
          </div>
        </div>

        <div className="bg-gray-200 text-gray-600 text-xs uppercase font-bold rounded-full px-3 py-1 absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline-block mr-1"
          >
            <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
