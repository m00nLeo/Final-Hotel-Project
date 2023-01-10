import React from "react";
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
          <RoomInformation />
          <RoomsAndSuites />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
