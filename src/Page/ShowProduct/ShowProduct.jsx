import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const ShowProduct = () => {
  const cars = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-semibold mb-4">Available Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-80 object-cover rounded-md"
              />

              <h2 className="text-lg font-semibold mt-2">Name: {car.name}</h2>
              <h3 className="text-xl font-semibold mt-2">
                Brand Name: {car.brandName}
              </h3>
              <h3 className="text-xl font-semibold mt-2">
                {car.shortDescription}
              </h3>
              <h3 className="text-xl font-semibold mt-2">
                Price: ${car.price}
              </h3>
              <h3 className="text-xl font-semibold mt-2">{car.type}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
