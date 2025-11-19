import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Collection from "../components/Collection";
import About from "../components/About";
import Testimonies from "../components/Testimonies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Collection />
      <About />
      <Testimonies />
      <Footer />
    </>
  );
};

export default Home;
