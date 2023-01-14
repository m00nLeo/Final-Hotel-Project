import React from "react";

const TelephoneBooking = () => {
  return (
    <div
      className="bg-[url(./assets/imgs/bg1-modified.jpeg)] opacity-95 bg-cover h-full p-10  
    "
    >
      <div className=" m-8 ">
        <div className="md:grid grid-cols-2 gap-20">
          <div className="text-white px-3  mb-8">
            <h3 className="text-3xl w-full tracking-wide mb-3">
              Telephone Booking
            </h3>
            <p className="text-md tracking-widest opacity-70 font-light mb-5">
              Meis iriure id eos, an his wisi labitur. Decore expetenda sed at.
              Alienum inimicus torquatos mea ad principes.
            </p>
            <div>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-[#b18c57]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div className="mb-3">
                  <p
                    className="text-lg font-light pb-2
            "
                  >
                    Phone
                  </p>
                  <p className="text-xl font-light">+33 (0) 1 89 78 67 56</p>
                </div>
              </div>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-[#b18c57]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <div>
                  <p className="text-lg font-light pb-2">Email</p>
                  <p lassName="text-xl font-light">Booking@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black  p-10 bg-[#f8f5f0]">
            <h3 className="text-2xl mb-3">Reservation</h3>
            <div className="mb-5 w-full">
              <div className="md:grid md:grid-cols-2 mb-3 w-full">
                {/* calender start */}
                <div className=" md:max-w-[25%] mb-3">
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 mr-2 pointer-events-none ">
                      <svg
                        aria-hidden="true"
                        class="w-15 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <input
                      name="start"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light"
                      placeholder="Select date start"
                    />
                  </div>
                </div>
                {/* calender end */}
                <div className="w-[25%] md:max-w-[15%] ">
                  <div class="relative ">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-15 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="end"
                      type="text"
                      class="bg-gray-50 border border-gray-300 font-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date end"
                    />
                  </div>
                </div>
              </div>

              <div className="md:grid grid-cols-2 mb-4">
                <select className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light w-[200px] mb-3">
                  <option selected>Adults</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div>
                  <select className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light w-[200px]">
                    <option selected>Childrens</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div className=" text-center w-[85%] bg-[#b18c57] py-2 mb-3">
                <a href="" className=" font-light text-sm text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 pr-2 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <span>Check Rooms</span>
                </a>
              </div>
            </div>
            <div className="ml-3">
              <ul>
                <li className="mb-3  text-[#b18c57] text-sm list-disc font-light">
                  <a href="">Special Offers</a>
                </li>
                <li className="mb-3  text-[#b18c57] text-sm list-disc font-light">
                  <a href=""></a>Best Rate Guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelephoneBooking;
