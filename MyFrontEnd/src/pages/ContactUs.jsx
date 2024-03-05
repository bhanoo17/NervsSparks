import React from "react";

function ContactUs() {
  return (
    <>
      <div className="mt-[80px]  flex flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-700">Contact Us</h1>

        <div className="w-4/5 rounded-lg bg-gray-200 p-6">
          <p className="mb-4 text-center italic text-gray-600">
            We are a passionate team dedicated to providing exceptional services
            and products.
          </p>

          <div className="flex justify-between">
            <div className="w-1/3">
              <h2 className="mb-2 text-lg font-bold">Our Mission</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ultrices ultrices massa, eget vestibulum libero commodo sed. Sed
                fringilla justo nec pharetra finibus.
              </p>
            </div>
            <div className="w-1/3">
              <h2 className="mb-2 text-lg font-bold">Our Vision</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ultrices ultrices massa, eget vestibulum libero commodo sed. Sed
                fringilla justo nec pharetra finibus.
              </p>
            </div>
            <div className="w-1/3">
              <h2 className="mb-2 text-lg font-bold">Our Values</h2>
              <ul className="text-sm">
                <li>Quality</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-4/5 items-center justify-center">
          <div className="text-gray-600">
            <a href="#" className="mr-4">
              FAQs
            </a>
            <a href="#" className="mr-4">
              Privacy Policy
            </a>
            <a href="#" className="mr-4">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
