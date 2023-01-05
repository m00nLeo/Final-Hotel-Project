import React from "react";
import { FaCarAlt, FaSwimmingPool } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiMuscleUp, GiSpotedFlower } from "react-icons/gi";

const Services = () => {
  return (
    <div className="mb-4">
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto p-4">
        {/* Layout */}
        <div className="m-2">
          {/* Content */}

          <div className="pb-4">
            {/* Section Heading & Intro */}
            <h2 className="text-3xl lg:text-5xl font-h2 pb-2 text-primary text-center ">
              Facilities & services
            </h2>
            <p className=" text-xl text-center font-subHeading text-primary font-extralight pb-10">
              Scriptorem per nibh euripidis usu. Magna feugiat in nec.
            </p>
          </div>

          {/* Services */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6 md:grid md:grid-cols-2 md:gap-5 sm:px-2 md:px-4 lg:px-6 justify-center ">
            {/* Wifi */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>
              <div className="ml-1">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  High Speed Wifi
                </h3>
                <p className=" text-primary font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>

            {/* Parking */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}
                <FaCarAlt className=" text-4xl " />
              </div>
              <div className="ml-2">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  Parking Space
                </h3>
                <p className="text-primary  font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>

            {/* Swimming */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}
                <FaSwimmingPool className=" text-4xl " />
              </div>
              <div className="ml-1">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  Swimming Pool
                </h3>
                <p className="text-primary  font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>

            {/* Restaurant */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}

                <BiDish className=" text-4xl " />
              </div>
              <div className="ml-1">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  Restaurant & Bar
                </h3>
                <p className="text-primary font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>

            {/* Spa */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}
                <GiSpotedFlower className=" text-4xl " />
              </div>
              <div className="ml-1">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  Spa Center
                </h3>
                <p className="text-primary  font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>

            {/* Fitness */}
            <div className="flex gap-5">
              <div className="mr-1 pt-2 text-light">
                {/* Icon */}
                <GiMuscleUp className=" text-4xl " />
              </div>
              <div className="ml-1">
                <h3 className="text-xl text-primary font-h2 pb-2">
                  Fitness Center
                </h3>
                <p className="text-primary  font-subHeading text-base font-extralight pb-4">
                  Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
