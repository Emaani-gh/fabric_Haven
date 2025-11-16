import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Collection from "../components/Collection";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Collection />
      <About />
    </>
  );
};

export default Home;
