import React from "react";

const RoomsAndSuites = () => {
  return (
    <div className=" bg-[#222222] py-10 mx-0">
      {/* container */}
      <div className="font-sans mx-14">
        {/* layout */}
        <div className="text-white items-center tracking-wide">
          <h1 className="text-center text-3xl pt-5 mb-6">Rooms & Suites</h1>
          <p className="text-center text-base mb-6 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <img
                className="opacity-60 "
                src="https://bilurygallery.bithemer.com/assets/img/rooms/r1@2x.jpg"
                alt=""
              />
              <div className="flex ">
                <span className="text-sm font-bold absolute top-2 right-14 font-sans">
                  $250
                </span>
                <span className="text-sm font-light absolute top-2 right-2">
                  / Night
                </span>
              </div>
              <div className=" py-6 pl-6 bottom-0 absolute h-[120px] group-hover:h-[240px] bg-black bg-opacity-30 group-hover:bg-opacity-60 group-hover:duration-300 overflow-hidden ">
                <h3 className="w-[60%] mb-5 text-lg  ">
                  Imperial Suite with Balcony City View
                </h3>
                <div className="hidden group-hover:block ">
                  <p className=" mb-4 text-sm font-extralight">
                    Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View
                    Street, Private Bath, Breakfast Included
                  </p>
                  <a href="">
                    <button className="flex gap-1 bg-[#b18c57] pt-1 px-4 content-center ">
                      <span className="text-sm">Detail</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                className="opacity-60"
                src="https://bilurygallery.bithemer.com/assets/img/rooms/r2@2x.jpg"
                alt=""
              />
              <div className="flex ">
                <span className="text-sm font-bold absolute top-2 right-14 font-sans">
                  $280
                </span>
                <span className="text-sm font-light absolute top-2 right-2">
                  / Night
                </span>
              </div>
              <div className=" py-6 pl-6 bottom-0 absolute h-[120px] group-hover:h-[240px] bg-black bg-opacity-30 group-hover:bg-opacity-60 group-hover:duration-300 overflow-hidden ">
                <h3 className="w-[60%] mb-5 text-lg  ">
                  Executive Deluxe Double or Twin Room
                </h3>
                <div className="hidden group-hover:block ">
                  <p className=" mb-4 text-sm font-extralight">
                    Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View
                    Street, Private Bath, Breakfast Included
                  </p>
                  <a href="">
                    <button className="flex gap-1 bg-[#b18c57] pt-1 px-4 content-center ">
                      <span className="text-sm">Detail</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                className="opacity-60"
                src="https://bilurygallery.bithemer.com/assets/img/rooms/r3@2x.jpg"
                alt=""
              />
              <div className="flex">
                <span className="text-sm font-bold absolute top-2 right-14 font-sans">
                  $300
                </span>
                <span className="text-sm font-light absolute top-2 right-2">
                  / Night
                </span>
              </div>
              <div className=" py-6 pl-6 bottom-0 absolute h-[120px] group-hover:h-[240px] bg-black bg-opacity-30 group-hover:bg-opacity-60 group-hover:duration-300 overflow-hidden ">
                <h3 className="w-[60%] mb-5 text-lg  ">
                  Family Suite With Balcony Street View
                </h3>
                <div className="hidden group-hover:block ">
                  <p className=" mb-4 text-sm font-extralight">
                    Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View
                    Street, Private Bath, Breakfast Included
                  </p>
                  <a href="">
                    <button className="flex gap-1 bg-[#b18c57] pt-1 px-4 content-center ">
                      <span className="text-sm">Detail</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                className="opacity-60"
                src="https://bilurygallery.bithemer.com/assets/img/rooms/r4@2x.jpg"
                alt=""
              />
              <div className="flex">
                <span className="text-sm font-bold absolute top-2 right-14 font-sans">
                  $350
                </span>
                <span className="text-sm font-light absolute top-2 right-2">
                  / Night
                </span>
              </div>
              <div className=" py-6 pl-6 bottom-0 absolute h-[120px] group-hover:h-[240px] bg-black bg-opacity-30 group-hover:bg-opacity-60 group-hover:duration-300 overflow-hidden ">
                <h3 className="w-[60%] mb-5 text-lg  ">
                  Premium Room with Window City View
                </h3>
                <div className="hidden group-hover:block ">
                  <p className=" mb-4 text-sm font-extralight">
                    Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View
                    Street, Private Bath, Breakfast Included
                  </p>
                  <a href="">
                    <button className="flex gap-1 bg-[#b18c57] pt-1 px-4 content-center ">
                      <span className="text-sm">Detail</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
