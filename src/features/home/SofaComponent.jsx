
import React from "react";

import sofaImg from '../../assets/sofa.jpg';

export default function SofaComponent() {
  return (
    <section className="bg-[#FFF9E7] py-16 px-10 flex flex-col lg:flex-row items-center justify-center gap-16">
    
      <div className=" max-w-lg">
        <img
          src={sofaImg}
          alt="Asgaard sofa"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="text-center lg:text-left max-w-md">
        <p className="text-sm font-medium text-gray-700 mb-2">New Arrivals</p>
        <h1 className="text-4xl font-extrabold mb-6">Asgaard sofa</h1>
        <button className="border border-gray-800 px-6 py-2 text-base font-medium rounded-sm hover:bg-gray-100 transition">
          Order Now
        </button>
      </div>
    </section>
  );
}