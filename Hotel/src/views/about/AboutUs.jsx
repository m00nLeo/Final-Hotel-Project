import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="px-12 py-12  bg-[#FEF7F3] mx-auto max-h-screen-xl ">
      <div>
        <p className="text-[#6c757d] text-xl font-sans-serif">
          The e-commerce market is fiercely competitive, any hotel that creates
          a highlight on the website will attract the attention of customers.
          Video is an element that cannot be ignored. Video introducing the
          hotel will bring the image of the hotel to visitors in a true and
          vivid way. In this article, elysia shares 8 tips for economical and
          even inexpensive hotels in creating authentic and engaging videos for
          customers, contributing to improving the effectiveness of hotel
          marketing strategies. .
        </p>
      </div>
      <div>
        <iframe
          className="py-4 w-full"
          height="500"
          src="https://www.youtube.com/embed/9GbLTTGsLyc"
          title="YouTube video player"
          allow=" "
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 h-16 gap-2  ">
          <button className="  border-gray-200 border font-medium bg-[#f8f9fa]">
            Facilities & Amenities
          </button>
          <button className="  border-gray-200 border font-medium  bg-[#f8f9fa] ">
            What's nearby
          </button>
          <button className=" border-gray-200 border font-medium  bg-[#f8f9fa] ">
            Guest policies
          </button>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-6 mb-2  ">Languages spoke</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            English
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            French
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Chinese
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">Internet access</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2">
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Wi-Fi in public areas
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Free Wi-Fi in all rooms
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">Accessibility</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2  ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Wheelchair accessible
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Facilities for disabled guest
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Elevator
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">
          Things to do, ways to relax
        </h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Ticket services
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Mini golf course
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Casino
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Garden
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Tours
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Hot tub
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Swimming pool [indoor]
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Steamroom
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Spa
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Sauna
          </p>
          <p className="flex items-center gap-1   text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Massage
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Fitness center
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">
          Dining, drinking, and snacking
        </h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Breakfast[free]
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Coffee shop
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Kitchen
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            BBQ facilities
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Room service[24-hour]
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Restaurants
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Poolside bar
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Bar
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">
          Services and Conveniences
        </h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Pets allowed
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Luggage storage
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Smoking area
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Currency exchange
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Securrity [24-hour]
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Gift/souvennir shop
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Safety deposit boxes
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Check-in/out [private]
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Dry cleaning
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Daily housekeeping
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Library
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Smoke-free property
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Laundry service
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Concierge
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Front desk[24-hour]
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Check-in/out[express]
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">
          Available in all rooms
        </h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Free instant coffee
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Telephone
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Hair dryer
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Coffee/tea maker
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Tower
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Wake-up service
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            satellite/cable channels
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Free bottled water
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Clothes rack
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Air conditioning
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Slippers
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Free welcome drink
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Toiletries
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            In-roon safe box
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Complimentary tea
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Umbrella
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Refrigerator
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Desk
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Wi-Fi[free]
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Shower
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Alarm clock
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">For the kids</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <>
            <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
              <HiOutlineCheck className="text-[#b18c57]" />
              Swimming pool [kids]
            </p>
            <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
              <HiOutlineCheck className="text-[#b18c57]" />
              Babysitting service
            </p>
            <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
              <HiOutlineCheck className="text-[#b18c57]" />
              Family room
            </p>
          </>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">Getting around</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Rental car
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Car park [free of charge]
          </p>
          <p className="flex items-center gap-1  text-gray-500 font-thin text-lg">
            <HiOutlineCheck className="text-[#b18c57]" />
            Car park [on-site]
          </p>
        </div>
      </div>
      <div className="bg-[#FEF4E8] mt-6  text-black max-auto max-h-screen-xl">
        <div>
          <div className="">
            <img
              className="w-full h-16 mb-4 pt-4"
              src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
              alt=""
            />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <span className="flex items-center gap-6">
              <CiLocationOn className="text-[#987648]  w-8 h-10" />
            </span>
            <h className="text-2xl text-[#343a40] mb-4 ">Address</h>

            <p className="text-gray-600 pl-9 mb-4">
              202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
            <div className="flex flex-col items-center justify-center">
              <span className="flex items-center  gap-6">
                <BsTelephone className="text-[#987648] mb-4 w-8 h-7" />
              </span>
              <h2 className="text-2xl  text-[#343a40] mb-4">Phone</h2>
              <p className="text-gray-600 pl-9  mb-4">+81 (0) 968150014</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="flex items-center  gap-6">
                <AiOutlineMail className="text-[#987648] mb-4 w-8 h-7" />
              </span>
              <h2 className="text-2xl  text-[#343a40] mb-4">Email</h2>

              <p className="text-gray-600 mb-3 pl-9">
                customer.helpdesk@elysia.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className=" flex items-center gap-1 text-[#343f52] text-xl mt-4 mb-2">
          <HiOutlineCheck className="text-[#b18c57]  " />
          Popular landmarks
        </h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            Musee d'Orsay Museum 2.5 km
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            La Sainte-Chapelle 2.7 km
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            champs-Elysees 3.7 Km
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            Arc de Triomphe 4.4 km
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            Montmartre 5.7 km
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]  " />
            Basilique du Saacre-Coeur de Montmartre 5.8 km
          </p>
        </div>
        <h5 className=" text-[#343f52] text-xl mt-4 mb-2">Nearby landMarks</h5>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 ">
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Place de seoul 160m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Amf Bowling de Montparnasse 170m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            jardin Atlantique Paris 180m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Eglise Notre Dame du Travail 250m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Harzar and co. 260m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Bootlegger 310m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Espace Krajcberg 380m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Theatre Bobino 380m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Pernety Metro Station 410m
          </p>
          <p className="flex items-center gap-1 text-gray-500 font-thin text-lg ">
            <HiOutlineCheck className="text-[#b18c57]" />
            Montparnasse - Bienvenue Metro Station 430
          </p>
        </div>
      </div>
      <div className="max-auto max-h-screen-xl ">
        <h5 className="px-6 mt-8 mb-3 text-xl text-gray-800 font-serif">
          Children and extra beds
        </h5>
        <p className="px-6 mb-3 font-light  text-gray-600">
          Extra beds are dependent on the room you choose. please check the
          individual room capacity for more detail
        </p>
        <p className="px-6 py-3 font-light  text-gray-600">
          {" "}
          All children are welcome
        </p>
        <div className="relative px-6">
          <table className="  border-[#edeff3] w-full text-md text-left text-gray-500  dark:text-gray-400 ">
            <thead className="text-black border-l uppercase bg-[#f5f5f5] font-serif">
              <tr className="border-b-4 ">
                <th className="px-6 py-3 ">Gues's age</th>
                <th className="px-6 py-3">Extraa bed</th>
              </tr>
            </thead>
            <tbody className="font-thin ">
              <tr className=" border">
                <td>
                  <div className=" flex px-6 py-3 text-gray-800 mb-16">
                    <strong>Infant 0-2 year(s)</strong>
                  </div>
                </td>
                <td className="border">
                  <div>
                    <div className="px-6 py-3">
                      Stay for free if using existing bedding.{" "}
                    </div>
                    <div className="px-6 py-3">
                      Baby cot/crib avaible upon request
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border">
                <td>
                  <div className="px-6 py-3  text-gray-800 mb-12">
                    <strong>Children 3-11 year(s)</strong>
                  </div>
                </td>
                <td className="border">
                  <div>
                    <div className="px-6 py-3">Must use an extra bed</div>
                    <div className="px-6 py-3">
                      if you need an extra bed, it will incur an additional
                      charge
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border">
                <td>
                  <div>
                    <strong className="px-6 py-3  text-gray-800">
                      Guests 12 years and older are considered as adults
                    </strong>
                  </div>
                </td>
                <td className="border">
                  <div>
                    <div className="px-6 py-3">
                      Must use an extra bed which will incur an additional
                      charge
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="px-6 mt-6 mb-3 text-xl text-gray-800 font-serif">
          Others
        </h5>
        <p className="px-6  text-gray-500">
          There is no window room type Cozy Deluxe Double and Twin Room. When
          booking more than 5 rooms, diffrent policies and additional
          supplements may apply
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
