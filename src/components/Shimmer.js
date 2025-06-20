import React from "react";

const ShimmerRestaurantCard = () => (
  <div className="relative shadow-md w-70 h-87 m-10 bg-white rounded-md animate-pulse">
    <div className="w-full h-32 sm:h-48 bg-gray-300 rounded-t-md" />

    <div className="h-6 bg-gray-300 m-2 rounded" />

    <div className="h-4 bg-gray-300 m-2 rounded w-4/5" />

    <div className="flex justify-around items-center mt-4">
      <div className="h-6 w-16 bg-gray-300 rounded" />
      <div className="h-6 w-20 bg-gray-300 rounded" />
    </div>

    <div className="h-6 w-24 bg-gray-200 rounded-full absolute top-0 ml-2 mt-2" />
  </div>
);

const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-10 justify-center">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <ShimmerRestaurantCard key={i} />
        ))}
    </div>
  );
};

export default Shimmer;
