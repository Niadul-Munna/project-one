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
  };
  const fruitsDataFiltered = fruitsData.filter((fruit) => {
    return fruit.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <div className="bg-neutral-200 p-5">
        <input
          type="text"
          placeholder="Search here.."
          className="border border-gray-400 px-2 outline-0"
          onChange={handleInputChange}
        />
        <div className="mt-2 ">
          {fruitsDataFiltered.map((fruits) => {
            return <p className="mb-2 even:bg-gray-300">{fruits}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
