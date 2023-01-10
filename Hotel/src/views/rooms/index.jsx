import React from "react";
import Hero from "../homepage/Hero";
import RoomsAndSuites from "../homepage/RoomsAndSuites";
import Services from "../homepage/Services";



const Rooms = () => {
  return (
    <div>
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <Hero />
          <RoomsAndSuites />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
