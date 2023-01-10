// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      strokeWidth={1}
      stroke="currentColor"
      className="w-6 h-8 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const roomList = [
  {
    id: 1,
    roomName: "Imperial Suite with Balcony City View",
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r1@2x.jpg",
    price: 119.0,
    description:
      "Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
  },
  {
    id: 2,
    roomName: "Executive Deluxe Double or Twin Room",
    price: 129.0,
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r2@2x.jpg",
    description:
      "Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
  },
  {
    id: 3,
    roomName: "Family Suite With Balcony Street View",
    price: 109.0,
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r3@2x.jpg",
    description:
      "Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
  },
  {
    id: 4,
    roomName: "Premium Room with Window City View",
    price: 139.0,
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r4@2x.jpg",
    description:
      "Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
  },
  {
    id: 5,
    roomName: "Junior Suite with Window City View",
    price: 99.0,
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r5@2x.jpg",
    description:
      "Room size: 30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
  },
];

const SliderComponent = () => {
  return (
    <>
      <div className="">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
          }}
          className="text-base"
          cssMode={true}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 10000,
          //   disableOnInteraction: false,
          // }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {roomList.map((room) => {
            return (
              <SwiperSlide key={room.id}>
                <div className="md:px-4 md:justify-between pb-14 ">
                  <div className="relative group overflow-hidden bg-blend-overlay bg-gray-800/80 bg-cover object-center">
                    <img
                      className="opacity-60 "
                      src={room.imageUrl}
                      alt={room.roomName}
                    />
                    <div className="flex ">
                      <span className="text-sm font-bold absolute top-4 right-14 font-sans items-start">
                        $ {room.price}
                      </span>
                      <span className="text-xs font-light absolute top-5 right-3 font-sans items-start">
                        / Night
                      </span>
                    </div>

                    {/* Details */}
                    <div className=" py-6 pl-6 bottom-0 absolute h-[100px] lg:group-hover:h-[80%] group-hover:h-[60%] group-hover:bg-black bg-opacity-30 group-hover:bg-opacity-60 group-hover:duration-300 overflow-hidden ">
                      <h3 className="md:w-[80%] mb-4 lg:text-sm text-base">
                        {room.roomName}
                      </h3>
                      <div className="hidden group-hover:block ">
                        <p className=" mb-4 lg:text-xs text-sm leading-4 font-thin">
                          {room.description}
                        </p>
                        <a href="/">
                          <button className="flex gap-1 bg-[#b18c57] px-4 items-center ">
                            <span className="text-xs ">Detail</span>
                            <ArrowIcon />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

const RoomsAndSuites = () => {
  return (
    <div className=" bg-[#222222] py-10 mx-0">
      {/* container */}
      <div className="font-sans mx-14">
        {/* layout */}
        <div className="text-white items-center tracking-wide">
          {/* Content */}
          <div>
            {/* Info */}
            <h1 className="text-center text-3xl pt-5 mb-6">Rooms & Suites</h1>
            <p className="text-center text-base mb-6 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Room Grid */}
          <div className="">
            <SliderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
