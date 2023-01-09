import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../../components/common/Container";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const RoomsList = [
  {
    id: 1,
    title: "Imperial Suite with Balcony City View",
    price: 250,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r1@2x.jpg",
  },
  {
    id: 2,
    title: "Executive Deluxe Double or Twin Room",
    price: 280,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r2@2x.jpg",
  },
  {
    id: 3,
    title: "Family Suite With Balcony Street View",
    price: 300,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r3@2x.jpg",
  },
  {
    id: 4,
    title: "Premium Room with Window City View",
    price: 350,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://bilurygallery.bithemer.com/assets/img/rooms/r4@2x.jpg",
  },
  {
    id: 5,
    title: "Family Suite With Balcony Street View",
    price: 400,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Premium Room with Window City View",
    price: 350,
    description:
      "30 m²/323 ft², 1 King Bed or 2 Single Beds, View Street, Private Bath, Breakfast Included",
    imageUrl: "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const RoomsSlider = () => {
  return (
    <>
      <Swiper
        className="text-base"
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Scrollbar]}
      >
        {RoomsList.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="relative group" key={room.id}>
              <img className="opacity-60 h-[700px] md:h-[600px] xl:h-96 w-full object-center" src={room.imageUrl} alt="" />
              <div className="text-sm font-bold absolute top-5 left-5 font-sans">
                ${room.price} <span className="font-light">/ Night</span>
              </div>
              <div className="py-6 pl-6 pr-2 bottom-0 absolute w-full h-24 group-hover:h-56 lg:h-28 lg:group-hover:h-60 bg-black bg-opacity-30 group-hover:bg-opacity-60 duration-500 overflow-hidden">
                <h3 className="w-5/6 mb-5 text-lg">{room.title} </h3>
                <div className="hidden group-hover:block ">
                  <p className="mb-4 text-sm font-extralight">
                    Room size: {room.description}
                  </p>
                  <Link to="">
                    <div className="flex items-center w-fit gap-1 bg-[#b18c57] hover:bg-[#b18c57]/75 py-2 px-4 content-center ">
                      <p className="text-sm">Detail</p>
                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </>
  );
};

const RoomsAndSuites = () => {
  return (
    <div className=" bg-[#222222] py-16 mb-10">
      {/* container */}
      <Container fluid={true}>
        <div className="">
          {/* layout */}
          <div className="text-white items-center tracking-wide">
            <h1 className="text-center text-2xl lg:text-4xl mb-6 font-h2">
              Rooms & Suites
            </h1>
            <p className="text-center text-base lg:text-xl mb-8 font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="">
              <RoomsSlider />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomsAndSuites;
