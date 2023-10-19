import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const SingleDetails = () => {
  const car = useLoaderData();

  return (
    <div>
      <Navbar />

      <div className="max-w-xl mx-auto p-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="relative aspect-w-16 aspect-h-9 mb-4">
            <img
              src={car.image}
              alt={car.name}
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <p className="text-gray-500 mb-2">{car.brandName}</p>
          <p className="text-gray-600 mb-2">{car.shortDetails}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg text-blue-600">${car.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
