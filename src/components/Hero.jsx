import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "40%" }}
      ></div>

      {/* Hero Content */}
      <div
        className="relative z-10 text-center text-white px-6 max-w-4xl "
        style={{ paddingTop: "8rem" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Premium
          <span className="block text-amber-700"> Fabrics</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          From luxury silk to organic cotton, explore our curated collection of
          high-quality fabrics perfect for fashion designers, crafters, and
          sewing enthusiasts.
        </p>
        <div className="flex justify-center gap-1">
          <button className="bg-amber-800 hover:bg-amber-900 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Shop All Fabrics
          </button>

          <button className="border-2 border-amber-800 hover:bg-amber-900 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Request Sample
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 my-8 py-4">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full w-16 h-16 bg-amber-100">
              <i className="ri-award-line text-2xl text-amber-700"></i>
            </div>
            <h3>Premium Quality</h3>
            <p>Sourced from renowned mills worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full w-16 h-16 bg-amber-100">
              <i className="ri-truck-line text-2xl text-amber-700"></i>
            </div>
            <h3>Fast Shipping</h3>
            <p>Quick delivery to your doorstep</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full w-16 h-16 bg-amber-100">
              <i className="ri-customer-service-2-line text-2xl text-amber-700"></i>
            </div>
            <h3>Expert Support</h3>
            <p>Professional fabric consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
