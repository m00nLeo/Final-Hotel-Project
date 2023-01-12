import React from "react";
import Hero from "../homepage/Hero";
import RoomsAndSuites from "../homepage/RoomsAndSuites";
import RoomInformation from "./RoomInformation";

const RoomDetail = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <Hero />
          <RoomInformation />
          <RoomsAndSuites />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
