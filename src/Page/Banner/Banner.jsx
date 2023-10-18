import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://i.ibb.co/z89ZXKq/pexels-jay-pizzle-3752194.jpg",
  "https://i.ibb.co/DzJ2DPF/pexels-jesse-zheng-1213294.jpg",
  "https://i.ibb.co/44mSrcf/pexels-cesar-perez-733745.jpg",
  "https://i.ibb.co/dKQbvJT/pexels-neil-kelly-712618.jpg",
];

const BannerSlider = () => {
  return (
    <div>
      <div className="relative">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="opacity-40 object-cover md:h-[770px]" // Adjust opacity here
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <h3 className="text-sky-300 text-5xl font-bold mb-2">Drive Your Dreams</h3>
                <h3 className="text-lime-300 text-2xl font-medium mb-2">Unleash the Power of Choice - Drive Your Dreams Today</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSlider;
