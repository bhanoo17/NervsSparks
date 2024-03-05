import React from 'react';
import carImages from '../../assets/vehicleImages/vehicleImage';

function Explore (){
  const handleBuyNow = (name) => {
    alert(`Buying ${name}`);
    
  };

  return (
    <div className='mt-[64px]'>
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-5 gap-4">
        {Object.values(carImages).map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={image.src} alt={image.name} className="w-32 h-32 object-cover mb-2" />
            <p className="text-center text-gray-700 font-medium">{image.name}</p>
            <p className="text-center text-gray-500">{image.category}</p>
            <p className="text-center text-gray-500">{image.type}</p> {/* Assuming you have a 'type' property */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleBuyNow(image.name)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Explore;
