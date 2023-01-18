import React from "react";
import SubHero from "../../contact/SubHero";

const CustomerInfo = () => {
  return (
    <div>
      {/* Hero */}
      <SubHero title="Reservation" path="Reservation" />

      {/* Content */}
      <div className=" md:mx-20 font-serif p-14 mt-10">
        <div className=" grid grid-cols-12">
          <div className=" mx-auto w-full col-span-8 col-start-3 ">
            {/* thẻ customer infor */}
            <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
              <h3 className="py-5 text-xl font-light ">Customer Information</h3>
            </div>
            {/* input */}
            <div className="px-8 border-solid border border-gray-200 pt-5 font-sans">
              <div>
                <form>
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
                        <option selected>Select</option>
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
                        required
                      />
                    </div>

                    {/*  */}
                    <div className="mb-5">
                      <label
                        for="Email"
                        class="block mb-2  dark:text-white text-md font-light text-gray-700 leading-3"
                      >
                        Email <span className="text-red-400 font-light">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    {/*  */}
                    <div className="mb-5">
                      <label
                        for="phone"
                        class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white"
                      >
                        Phone <span className="text-red-400 font-light">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    {/*  */}
                    <div className="mb-5">
                      <label
                        for="address"
                        class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    {/*  */}
                    <div className="mb-5">
                      <label class="block mb-2 text-md font-light text-gray-700 leading-3  dark:text-white">
                        Country{" "}
                        <span className="text-red-400 font-light">*</span>
                      </label>
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected className="text-2xl">
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
                      Your Requests
                    </label>
                    <input
                      type="text"
                      id="request"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5">
              <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                <h3 className="py-5 text-xl font-light ">Payment Method</h3>
              </div>
              <div
                className="px-8 border-solid border border-gray-200
              pt-5 font-serif mb-5"
              >
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-[#b18c57]  bg-[#b18c57] "
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
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
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
                  <a
                    class="flex gap-2 items-center justify-center bg-[#aab0bc] text-white w-40 h-10 text-base"
                    href="/reservation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                      strokeWidth={1}
                      stroke="currentColor"
                      height="0.6em"
                      width="0.6em"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                    Back Step
                  </a>
                </div>
                <div>
                  <a
                    class="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base"
                    href="/reservation/information/completed"
                  >
                    Next Step{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      ></path>
                    </svg>
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

export default CustomerInfo;
