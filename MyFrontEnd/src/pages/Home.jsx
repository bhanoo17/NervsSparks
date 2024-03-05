import React from "react";
import carImages from "../assets/vehicleImages/vehicleImage";
import Card2 from "../components/Cards/Card2";

const myImageSrc = carImages.imageOne.src;

function Home() {
  return (
    <div className="mt-[64px] h-screen w-full bg-gray-300">

      <Card2 />

      <div className="flex">
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold italic text-indigo-600">Hello,</h1>
          <p className="ml-4 italic py-2 text-3xl font-bold text-indigo-600">
            Deals of the Day Grab it Now!!!
          </p>
          <div className="ml-20 text-indigo-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquid dignissimos aperiam eum eius! Repudiandae labore itaque quasi
            excepturi quam, dolore ipsam sequi vero id, illum, dicta eligendi quo
            facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            eum earum dolor expedita, quisquam, magnam asperiores adipisci vero
            tenetur id eos enim minus ad a. Repellat minima voluptatibus ipsum quia!
          </div>
        </div>
        <div className="w-1/2 p-8 flex justify-center items-center">
          <img
            src={myImageSrc}
            className="max-h-[80vh] max-w-full object-cover rounded-lg shadow-lg"
            style={{ margin: "0 auto" }}
            alt="Vehicle"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
