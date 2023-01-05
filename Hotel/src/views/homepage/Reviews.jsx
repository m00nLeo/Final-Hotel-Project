import React from "react";

const Reviews = () => {
  return (
    <div>
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto ">
        {/* Layout */}
        <div className=" -z-20 relative overflow-hidden bg-cover object-center bg-[url('https://bilurygallery.bithemer.com/assets/img/background/bg2.jpg')]">
          <div className="absolute overflow-hidden top-0 right-0 left-0 bottom-0 h-full w-full bg-fixed bg-slate-900 opacity-70 -z-10"></div>
          {/* Content */}
          <div className="p-4 mb-6">
            {/* Reviews Section */}
            <div>
              {/* Intro */}
              <h2 className="font-h2 text-2xl text-zinc-100 text-center pb-2">
                What our clients say about us
              </h2>
              <p className="font-subHeading text-beige text-base font-light text-center text-opacity-80 px-8 pb-8">
                Pro sonet consul maiorum ad. Delenit omittantur ne cum
                gloriatur.
              </p>
            </div>



            {/* Review */}
            <div>
              {/* Image */}
              <div className=" flex justify-center pb-6 ">
                <img
                  src="https://i.pinimg.com/736x/a8/9c/79/a89c79acc2ee8e6a27a9aee9e89e1cad.jpg"
                  alt="client1"
                  className=" rounded-full w-20 h-20 object-cover  "
                />
              </div>
              {/* Detail */}
              <div>
                <p className="px-8 text-center text-base text-opacity-100 pb-2 font-light text-beige font-subHeading italic">
                  An harum accommodare ullamcorper, laoreet repudiare consetetur
                  percipitur mel disputationi cum ex. Aliquid adipiscing
                  delicatissimi.
                </p>
                <p className=" text-beige text-opacity-70 text-sm text-center font-light">
                  Rosie P. - Client
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
