import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-5 bg-white shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          {showItems ? (
            <span className="text-2xl">🔺</span>
          ) : (
            <span className="text-2xl">🔻</span>
          )}
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
      {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;
