// import React from "react";
// import { BiMap } from "react-icons/bi";
// import { AiOutlineArrowRight } from "react-icons/ai";

// const Location = () => {
//   return (
//     <div className=" bg-[#F8F5F0] relative mx-auto max-w-screen-xl pr-6 pl-12  py-12 ">
//       <div className="bg-white md:flex-row  md:justify-between  2-xl:-translate-x-[12%] ">
//         <div className="flex-grow">
//           <div className=" grid  md:pt-0 lg:grid-cols-2">
//             <div className=" lg:mt-20 px-10 pt-4">
//             <h1 className="text-3xl mb-4 ">Location & Map</h1>
//             <p className="flex  mb-4 text-md   text-gray-500">
//               <span className="pt-1 ">
//                 <BiMap />
//               </span>
//               202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
//             </p>
//             <p className="text-base mb-4 text-gray-500">
//               Ong Pagoda is 355 meters away, 5 minutes walk. Ham Nghi Transit
//               Point is 464 meters away, 6 min walk. New World Hotel is 475
//               meters away, 7 minutes walk.
//             </p>
//             <div className=" mb-4 ">
//               <a
//                 className="bg-[#b18c57] text-white py pl-3 h-10 w-40 flex items-center gap-2  "
//                 href=""
//               >
//                 <span> View Location</span>

//                 <i>
//                   <AiOutlineArrowRight />
//                 </i>
//               </a>
//             </div>
//             </div>
//             <div>
//             <iframe
//               className="w-full "
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5057608030543!2d106.69583211397575!3d10.772522062213458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f3129e64d%3A0x8d6b2d79522c7f30!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1672998900689!5m2!1svi!2s"
//               width={600}
//               height={450}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;
import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
const Location = () => {
  return (
    <div className="bg-[#FEF4E8] text-black py-10 lg:py-16">
      <div className="bg-white mx-auto max-w-lg lg:max-w-screen-xl items-center grid lg:grid-cols-3 ">
        <div className="p-9">
          <h1 className="text-3xl mb-4 ">Location & Map</h1>
          <p className="flex items-center gap-3 mb-4 text-base text-gray-500">
            <span>
              <BiMap />
            </span>
            202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
          </p>
          <p className="text-base mb-4 text-gray-500">
            Ong Pagoda is 355 meters away, 5 minutes walk. Ham Nghi Transit
            Point is 464 meters away, 6 min walk. New World Hotel is 475 meters
            away, 7 minutes walk.
          </p>
          <div className="">
            <a
              className="bg-[#B18C57] text-white py-3 w-40 flex items-center justify-center gap-2  font-thin"
              href=""
            >
              View Location
              <span>
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
        </div>
        <iframe
          className="col-span-2 w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5057608030543!2d106.69583211397575!3d10.772522062213458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f3129e64d%3A0x8d6b2d79522c7f30!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1672998900689!5m2!1svi!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
export default Location;
