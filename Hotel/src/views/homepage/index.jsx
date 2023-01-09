import React from "react";
import About from "./About";
import Hero from "./Hero";
import Location from "./Location";
import Reviews from "./Reviews";
import RoomsAndSuites from "./RoomsAndSuites";
// import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <Hero />
          <About />
          <RoomsAndSuites />
          <Services />
          <Reviews />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Home;
