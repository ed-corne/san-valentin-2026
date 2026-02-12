import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="flex justify-center ">
      <div
        className="
          max-w-xl w-full
          bg-[#FFFDF9]
         
          rounded-2xl
          shadow-lg
          px-8 py-6
          font-mono
        "
      >
        <h2 className="text-2xl font-bold text-[#6B4E3D] mb-4 text-start">
          {title}
        </h2>

        <div className="text-[#5C4A3D] leading-relaxed text-lg space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Card;
