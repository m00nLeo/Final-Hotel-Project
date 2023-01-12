import React from "react";
import SubHero from "../contact/SubHero";
import AboutUs from "./AboutUs";

const AboutHotel = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <SubHero title="About Us" path="About" />
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default AboutHotel;
