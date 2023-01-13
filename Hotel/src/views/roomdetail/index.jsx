import React from "react";
import SubHero from "../contact/SubHero";
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
          <SubHero title="Room Deatil" path="Detail"/>
          <RoomInformation />
          <RoomsAndSuites />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
