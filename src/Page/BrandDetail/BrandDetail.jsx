import React from "react";

const BrandDetail = ({ mainName }) => {
  const { image, brandName, name, price, type, shortDescription, rating } = mainName;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <div className="relative aspect-w-16 aspect-h-9 mb-4">
        <img
          src={image}
          alt={name}
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 mb-2">{brandName}</p>
      <p className="text-gray-600 mb-2">{type}</p>
      <p className="text-gray-600 mb-2">{shortDescription}</p>
      <div className="flex justify-between">
        <p className="text-xl text-blue-600">${price}</p>
        <p className="text-yellow-500">{rating} ★</p>
      </div>
    </div>
  );
};

export default BrandDetail;
