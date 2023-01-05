import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-20 mb-4">
      {/* container */}
      <div className="grid grid-cols-2 gap-8 pt-10 ">
        {/* layout */}
        <div className="grid grid-cols-2 gap-2">
          {/* 2 column */}
          <img
            className="my-[-50px]"
            src="https://bilurygallery.bithemer.com/assets/img/about/a2@2x.jpg"
            alt=""
          />
          <img
            src="https://bilurygallery.bithemer.com/assets/img/about/a1@2x.jpg"
            alt=""
          />
        </div>
        <div className="text-[#343a40] tracking-wide font-serif">
          <h3 className="mb-4 font-light">Welcome to</h3>
          <h1 className="mb-6 font-semibold text-base">ELYSIA HOTEL</h1>
          <p className="text-sm mb-6 font-extralight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            ipsum nobis facilis officiis, sit id! Corporis eum doloribus a
            ipsum, similique aperiam natus assumenda. Nam, iste! Unde quos
            voluptates nemo incidunt mollitia tenetur, numquam vitae et
            repellendus sint accusantium id magni, eveniet sapiente
            voluptatibus, rem quis deserunt modi eaque corporis. Harum
            doloremque ipsum rerum mollitia id, omnis, nostrum pariatur corporis
            aut similique laboriosam quis earum necessitatibus aliquid
            repudiandae nemo libero expedita eum esse reiciendis maxime fuga
            voluptatem dolorem! Dolores, ad?
          </p>
          <div className="">
            <button className="flex gap-1 bg-[#b18c57] text-white p-3">
              Reader More
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
