import React from "react";

const Hero = () => {
  return (
    <div>
      {/* ========================= Hero Section ==========================  */}

      <div className="flex  bg-black">
        <div className="container m-auto flex gap-4">
          <div className="w-1/2 flex gap-5 py-16 flex-col items-start">
            <h2 className="text-orange-500 font-bold tracking-[5px]">
              -- EVERYTHING YOUR HOME NEEDS --
            </h2>
            <h1 className="text-white text-9xl tracking-wider leading-26 font-black uppercase">
              CONFIDENCE Quality Character Elegence
            </h1>
            <p className="text-white text-lg pr-70 ">
              More than 100 manufactured-home replacement parts, name-brand
              appliances, complete HVAC systems from 1.5 to 5 tons, automatic
              filter delivery, and hard-working storage and utility goods—all in
              one dependable marketplace.
            </p>
            <button className="bg-orange-500 cursor-pointer text-white px-8 py-4 font-semibold text-2xl">
              Explore Collections
            </button>
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-white">174</span> LAUNCH SKUS
              &emsp;|&emsp; <span className="font-bold text-white">114</span>{" "}
              MOBILE-HOME PARTS &emsp;|&emsp; DROPSHIP ONLY
            </p>
          </div>
          <div className="w-1/2 grid-cols-2 grid-rows-2 grid">
            <div className="bg-[#C6B79D] border relative h-110 ">
              <img
                className="w-full brightness-75 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-100 h-full pbject-fit object-center abosolute"
                src="https://images.pexels.com/photos/18188473/pexels-photo-18188473.jpeg"
                alt=""
              />
            </div>
            <div className="bg-[#C6B79D] border relative h-110 ">
              <img
                className="w-full brightness-75 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-100 h-full pbject-fit object-center abosolute"
                src="https://images.pexels.com/photos/30940601/pexels-photo-30940601.jpeg"
                alt=""
              />
            </div>
            <div className="bg-[#C6B79D] border relative h-110 ">
              <img
                className="w-full brightness-75 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-100 h-full pbject-fit object-center abosolute"
                src="https://images.pexels.com/photos/16959150/pexels-photo-16959150.jpeg"
                alt=""
              />
            </div>
            <div className="bg-[#C6B79D] border relative h-110 ">
              <img
                className="w-full brightness-75 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-100 h-full pbject-fit object-center abosolute"
                src="https://images.pexels.com/photos/32549963/pexels-photo-32549963.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
