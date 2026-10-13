import React from "react";

const categoryCard = () => {
  return (
    <div>
      <div className="bg-[#C6B79D] relative group  aspect-square flex flex-col overflow-hidden justify-end items-start ">
        <img className="absolute w-full h-full saturate-0 group-hover:scale-110 transition-all duration-300 group-hover:saturate-100 object-center object-cover" src="https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg" alt="" />
        <div className="p-4 z-1 backdrop-blur-md w-full">
          <h3 className="text-white font-bold text-xl">Male Collection</h3>
          <button className="text-orange-500">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default categoryCard;
