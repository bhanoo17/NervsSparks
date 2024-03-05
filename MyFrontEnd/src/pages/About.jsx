import React from 'react'

function About() {
  return (
    <>
    <div className="mb-4 mt-[80px] flex justify-center text-3xl">
  <h1 className="font-bold text-gray-700">About Us</h1>
</div>

<div className="flex justify-center">
  <div className="w-4/5 rounded-lg bg-gray-200 p-6">
    <div className="italic mb-4 text-center text-gray-600">We are a passionate team dedicated 
    to providing exceptional services and products. Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Nemo doloremque sed explicabo obcaecati fugiat accusantium. Nulla, 
    delectus voluptatibus? Veniam consequatur tenetur voluptate velit! Quisquam dolorum 
    porro error voluptatem impedit perspiciatis.</div>
    <div className="flex justify-between">
      <div className="w-1/3">
        <h2 className="mb-2 text-lg font-bold">Our Mission</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        ultrices ultrices massa, eget vestibulum libero commodo sed. Sed fringilla justo nec pharetra finibus.</p>
      </div>
      <div className="w-1/3">
        <h2 className="mb-2 text-lg font-bold">Our Vision</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        ultrices ultrices massa, eget vestibulum libero commodo sed. Sed fringilla justo nec pharetra finibus.</p>
      </div>
      <div className="w-1/3">
        <h2 className="mb-2 text-lg font-bold">Our Values</h2>
        <ul className="ml-1 text-sm">
          <li className="font-bold text-gray-600">Quality</li>
          <li className="font-bold text-gray-600">Integrity</li>
          <li className="font-bold text-gray-600">Innovation</li>
          <li className="font-bold text-gray-600">Customer Satisfaction</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="mt-8 flex justify-center">
  <div className="flex w-4/5 items-center justify-between">
    <div className="text-gray-600">
      <a href="#" className="mr-4">Contact Us</a>
      <a href="#" className="mr-4">FAQs</a>
      <a href="#" className="mr-4">Privacy Policy</a>
      <a href="#" className="mr-4">Terms of Service</a>
    </div>
  </div>
</div>



    </>
  )
}

export default About