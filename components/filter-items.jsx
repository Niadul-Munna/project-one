import React, { useState } from "react";
const FilterItems = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grape",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Peach",
    "Cherry",
    "Plum",
    "Kiwi",
  ];
  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <input
        type="text"
        placeholder="Search here.."
        className="border border-gray-400 px-2 outline-0"
        onChange={handleInputChange}
      />
      <div className="mt-2">
        {fruitsData.map((fruits) => {
          return <p className="mb-2">{fruits}</p>;
        })}
      </div>
    </div>
  );
};

export default FilterItems;
