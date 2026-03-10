import TopBanner from "@/components/account/TopBanner";
import React from "react";
import FeatureSection from "@/components/account/FeatureSection";
import { useNavigate } from "react-router";

export default function AboutUs() {
    const nav =useNavigate();
  return (
    <section className="">
        < TopBanner 
        title="About"
        paths={[
            { label: "Home", href: "/" },
            { label: "About" }
        ]}/>

        <h1 className="mt-5 text-4xl font-extrabold mb-6 text-center">About Us</h1>


        <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to our company! We are dedicated to providing the highest quality furniture that
        combines both style and comfort. Our mission is to transform your living spaces into
        beautiful, functional, and inspiring environments.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        With years of experience in the furniture industry, our team carefully selects the best
        materials and craftsmanship to bring you products that last a lifetime. Customer
        satisfaction and sustainability are at the core of everything we do.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Whether you're furnishing your first home or upgrading your space, we are here to help
        you find pieces that fit your unique style and needs. Thank you for choosing us as your
        trusted furniture provider.
      </p>

      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        onClick={() => nav(`/contact`)}>
          Contact Us
        </button>
      </div>
        </div>

        <div>
            <FeatureSection />
        </div>


      
    </section>
  );
}