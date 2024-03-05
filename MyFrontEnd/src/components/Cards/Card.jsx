import React from "react";
import carImages from "../../assets/vehicleImages/vehicleImage";

function Cards() {
  
  const handleBuyNow = (itemName) => {
    console.log(`Buy Now clicked for ${itemName}`);
  };

  return (
    <div className="mt-[64px]">
      <div className="container mx-auto py-8 overflow-x-auto">
        <div className="flex flex-row flex-wrap justify-around">
          {Object.values(carImages).map((image, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col w-80 h-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md items-center mb-4">
              <img src={image.src} alt={image.name} className="w-64 h-64 object-cover mb-4 rounded-lg" />
              <div className="flex flex-col items-start">
                <p className="text-indigo-400 font-bold mb-2">{image.category}</p>
                <p className="text-gray-700">{image.name}</p>
                <p className="text-gray-500">{image.type}</p>
                <div className="mt-auto">
                  <p className="text-gray-500 whitespace-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum purus eget ultricies fringilla.</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleBuyNow(image.name)}
                  >
                    Know More!!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
