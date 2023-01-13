import React, { useRef, useState } from "react";
import Container from "../../components/common/Container";
import { BsSearch } from "react-icons/bs";

const Process = ({ numb, para, className }) => {
  return (
    <div className="flex flex-col items-center ">
      <div
        className={`border rounded-full font-subHeading font-semibold w-12 aspect-square leading-tight flex justify-center items-center mb-4 ${className}`}
      >
        {numb}
      </div>
      <p className="text-gray-500/50 text-sm font-semibold">{para}</p>
    </div>
  );
};

const Filter = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  return (
    <>
      <div className="lg:flex lg:gap-3 mb-8 text-sm">
        <div className="grid grid-cols-2 gap-3 mb-2 lg:w-1/2 lg:mb-0 ">
          <div className="flex flex-col w-full">
            <label
              htmlFor=""
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Check-in Date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              ref={dateInputRef}
              className="border border-[#b18c57] p-2 outline-none h-12 "
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Check-out Date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              ref={dateInputRef}
              className="border border-[#b18c57] p-2 outline-none h-12"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:w-1/2 md:grid-cols-3 items-end">
          <div className="flex flex-col">
            <label
              htmlFor="adults"
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Adults
            </label>
            <select
              name=""
              id="adults"
              defaultValue="adults"
              className="border border-[#b18c57] p-2 outline-none h-12"
            >
              <option value="adults">Adults</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="childerns"
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Childerns
            </label>
            <select
              name=""
              id="childern"
              defaultValue="childern"
              className="border border-[#b18c57] p-2 outline-none h-12"
            >
              <option value="childern">Childerns</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-3 bg-[#b18c57] text-white text-base py-2 px-4 h-12 col-span-2 md:col-span-1">
            <BsSearch /> Check room
          </button>
        </div>
      </div>
    </>
  );
};

const SelectRoom = () => {
  return (
    <>
      <div className="bg-[#FEF4E8] p-4 text-slate-800">
        <h2 className="font-h2  text-xl">
          Executive Deluxe Double or Twin Room
        </h2>

        <div className="">
          {/* Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://bilurygallery.bithemer.com/assets/img/rooms/r16.jpg"
              alt=""
            />
            <p className="font-thin text-[#b18c57] text-base">
              See room photos
            </p>
          </div>

          {/* Information */}
          <div className="">
            <div className="">
              <h4 className="font-semibold text-base">Price includes</h4>
              <ul>
                <li className="font-thin text-slate-400">Welcome drink, fresh fruit</li>
              </ul>
            </div>
          </div>

          {/* Price */}

          {/* Quantity & Remove */}
        </div>
      </div>
    </>
  );
};

const Select = () => {
  return (
    <div>
      {/* Content */}
      <Container fluid={true}>
        <div className="pt-20">
          {/* Layout */}
          <div className="">
            {/* Content */}
            <div className="flex flex-col items-center mb-20">
              <h1 className="text-2xl lg:text-5xl text-gray-600/80 dark:text-gray-200 font-normal font-h2 mb-8">
                Reservation
              </h1>
              <div className="flex justify-around w-full">
                <Process
                  numb={1}
                  para="SELECT ROOMS"
                  className="bg-[#FEF4E8] border-[#b18c57] text-[#b18c57]"
                />
                <Process numb={2} para="CUSTOMER INFORMATION" />
                <Process numb={3} para="COMPLETED" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4">
              <div className="flex flex-col lg:col-span-3">
                <Filter />
                <SelectRoom />
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Select;
