import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  

  useEffect(() => {
    const getBrands = async () => {
      const response = await fetch("cardData.json");
      const data = await response.json();
      setBrands(data);
    };
    getBrands();
  }, []);

  return (
    <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold my-4">Our Brands Available</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {brands.map((brand) => (
          <Brand brand={brand} key={brand.id}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
