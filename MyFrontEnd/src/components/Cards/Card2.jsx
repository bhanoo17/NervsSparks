import React from "react";
import carImages from "../../assets/vehicleImages/vehicleImage";

function Card2() {
  return (
    <div className="mt-[64px]">
      <div className="container mx-auto py-8 overflow-x-auto">
        <div className="flex flex-row justify-around">
          {Object.values(carImages).map((image, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 h-48 mb-4 mr-4">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card2;
