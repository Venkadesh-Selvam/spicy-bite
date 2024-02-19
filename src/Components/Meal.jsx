import React, { useState } from "react";
import { mainData } from "../Data/Data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Meal = () => {
  const [foods, setFoods] = useState(mainData);
  const filterCategory = (category) => {
    setFoods(
      mainData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-red-500 font-bold text-2xl text-center py-2">
        Main Course
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
          onClick={()=>setFoods(mainData)}
          className="m-1 bg-red-700 border-red-700  text-white hover:bg-white hover:text-red-700 hover:border-red-700">
            All
          </button>
          <button 
           onClick = {()=>filterCategory("chicken")}
          className="m-1 bg-red-700 border-red-700 text-white hover:bg-white hover:text-red-700 hover:border-red-700">
            Chicken
          </button>
          <button 
          onClick = {()=>filterCategory("pizza")}
          className="m-1 bg-red-700 border-red-700 text-white hover:bg-white hover:text-red-700 hover:border-red-700">
            Pizza
          </button>
          <button 
           onClick = {()=>filterCategory("salad")}
          className="m-1 bg-red-700 border-red-700 text-white hover:bg-white hover:text-red-700 hover:border-red-700">
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2 ">
              <p className="font-bold ">{item.name}</p>
              <p className="bg-red-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600">
                Show More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
