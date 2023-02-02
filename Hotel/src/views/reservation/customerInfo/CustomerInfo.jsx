import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../components/common/Container";
import SubHero from "../../contact/SubHero";

const handleReservation = (e) => {
  e.preventDefault();
  const form = document.getElementById("reservationForm");
  const formElements = Array.from(form.elements);
  let valid = true;
  formElements.forEach((element) => {
    let val = element.value.trim();
    if (val == "") {
      element.classList.add("border-red-600");
      element.classList.remove("border-gray-300");
      valid = false;
    } else {
      element.classList.remove("border-red-600");
      element.classList.add("border-gray-300");
    }
  });
  // Form is valid
  if (valid) {
    window.location.replace("/reservation/complete");
  }
};

const Process = ({ numb, para, className }) => {
  return (
    <div className="flex flex-col items-center ">
      <div
        className={`border rounded-full font-subHeading font-semibold w-12 aspect-square leading-tight flex justify-center items-center mb-4 ${className}`}
      >
        {numb}
      </div>
      <p className="text-gray-500/50 dark:text-gray-300/75 text-sm font-semibold">
        {para}
      </p>
    </div>
  );
};

const CustomerInfo = () => {
  
  return (
    <div className="font-subHeading">
      {/* Hero */}
      <SubHero title="Reservation" path="Reservation" />

      {/* Content */}
      <Container fluid={true}>
        <div className="py-20">
          <div className="flex flex-col items-center mb-20">
            <h1 className="text-2xl lg:text-5xl text-gray-600/80 dark:text-gray-200 font-normal font-h2 mb-8">
              Reservation
            </h1>
            <div className="flex justify-around w-full">
              <Process
                numb={<AiOutlineCheck />}
                para="SELECT ROOMS"
                className="bg-[#c3915f] border-[#b18c57] text-gray-200"
              />
              <Process
                numb={2}
                para="CUSTOMER INFORMATION"
                className="bg-[#FEF4E8] border-[#b18c57] text-[#b18c57]"
              />
              <Process numb={3} para="COMPLETED" />
            </div>
          </div>

          <form id="reservationForm" onSubmit={handleReservation}>
            <div className=" grid lg:grid-cols-12">
              <div className=" mx-auto w-full lg:col-span-8 lg:col-start-3 ">
                {/* thẻ customer infor */}
                <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA] dark:bg-slate-500/75 dark:text-white">
                  <h3 className="py-5 text-xl font-light ">
                    Customer Information
                  </h3>
                </div>
                {/* input */}
                <div className="px-8 border-solid border border-gray-200 pt-5 font-sans">
                  <div>
                    <div class="md:grid md:gap-6 mb-6 md:grid-cols-2">
                      {/* title */}
                      <div className="mb-5">
                        <label
                          for="countries"
                          class="block mb-2 text-md font-light text-gray-700 leading-3 dark:text-white"
                        >
                          Title <span className="text-red-400 ">*</span>
                        </label>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected disabled value="">
                            Select
                          </option>
                          <option value="Mr">Mr</option>
                          <option value="Mss">Mss</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      {/*  */}
                      <div className="mb-5">
                        <label
                          for="full_name"
                          class="block mb-2  text-gray-700 dark:text-white text-md font-light  leading-3"
                        >
                          Full Name{" "}
                          <span className="text-red-400 font-light">*</span>
                        </label>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                        />
                      </div>

                      {/*  */}
                      <div className="mb-5">
                        <label
                          for="Email"
                          class="block mb-2  dark:text-white text-md font-light text-gray-700 leading-3"
                        >
                          Email{" "}
                          <span className="text-red-400 font-light">*</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                        />
                      </div>
                      {/*  */}
                      <div className="mb-5">
                        <label
                          for="phone"
                          class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white"
                        >
                          Phone{" "}
                          <span className="text-red-400 font-light">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                        />
                      </div>
                      {/*  */}
                      <div className="mb-5">
                        <label
                          for="address"
                          class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white"
                        >
                          Address{" "}
                          <span className="text-red-400 font-light">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                        />
                      </div>
                      {/*  */}
                      <div className="mb-5">
                        <label class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white">
                          Country{" "}
                          <span className="text-red-400 font-light">*</span>
                        </label>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected disabled value="">
                            Select
                          </option>
                          <option value="AG">Afganistan</option>
                          <option value="AU">Australia</option>
                          <option value="VN">Viet Nam</option>
                          <option value="CN">China</option>
                          <option value="IN">India</option>
                          <option value="AN">Angola</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-6">
                      <label
                        for="request"
                        class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white"
                      >
                        Your Requests{" "}
                        <span className="text-red-400 font-light">*</span>
                      </label>
                      <textarea
                        type="text"
                        id="request"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]  dark:bg-slate-500/75 dark:text-white">
                    <h3 className="py-5 text-xl font-light ">Payment Method</h3>
                  </div>
                  <div className="px-8 border-solid border border-gray-200 pt-5 font-serif mb-5">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value="cash"
                        name="default-radio"
                        class="w-4 h-4 text-[#b18c57]  bg-[#b18c57] "
                        checked
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Pay With Cash
                      </label>
                    </div>
                    <div class="flex items-center mb-5">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value="online"
                        name="default-radio"
                        class="w-4 h-4 bg-[#b18c57]  "
                      />
                      <label
                        for="default-radio-2"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Pay Online With Visa Card, Master Card
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Link
                        class="flex gap-2 items-center justify-center bg-[#aab0bc] text-white w-40 h-10 text-base"
                        to="/reservation"
                      >
                        <AiOutlineArrowLeft />
                        Back Step
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/reservation/complete"
                        state={{ location: location }}
                        value="next"
                        type="submit"
                        class="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base"
                      >
                        Next Step <AiOutlineArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CustomerInfo;
