import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Collection from "../components/Collection";
import About from "../components/About";
import Testimonies from "../components/Testimonies";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Collection />
      <About />
      <Testimonies />
    </>
  );
};

export default Home;
