import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Swal from "sweetalert2";

const SingleDetails = () => {
  const car = useLoaderData();
  console.log(car);

  const addToCart = () => {
    fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((response) => {
         response.json();
      })
      .then((data) => {
        console.log("Added to cart:", data);
        Swal.fire({
          title: "Added to cart",
          text: "Product added to cart successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while adding the product to the cart",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
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
            <button
              onClick={addToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
