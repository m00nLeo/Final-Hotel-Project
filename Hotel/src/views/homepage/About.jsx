import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../../components/common/Container";

const About = () => {
  return (
    <Container fluid={true}>
      {/* container */}
      <div className="grid lg:grid-cols-2 gap-8 pt-20 px-2 mb-16">
        {/* layout */}
        <div className="grid grid-cols-2 gap-2">
          {/* 2 column */}
          <img
            className="-translate-y-5"
            src="https://bilurygallery.bithemer.com/assets/img/about/a2@2x.jpg"
            alt=""
          />
          <img
            src="https://bilurygallery.bithemer.com/assets/img/about/a1@2x.jpg"
            alt=""
          />
        </div>
        <div className="text-[#343a40] tracking-wide flex flex-col justify-center">
          <h3 className="mb-4 font-light text-lg">Welcome to</h3>
          <h1 className="mb-6 font-semibold text-2xl lg:text-4xl font-h2">ELYSIA HOTEL</h1>
          <p className="text-base lg:text-lg mb-6 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            ipsum nobis facilis officiis, sit id! Corporis eum doloribus a
            ipsum, similique aperiam natus assumenda. Nam, iste! Unde quos
            voluptates nemo incidunt mollitia tenetur, numquam vitae et
            repellendus sint accusantium id magni, eveniet sapiente
            voluptatibus, rem quis deserunt modi eaque corporis. 
          </p>
          <div className="">
            <button className="flex items-center gap-1 font-thin bg-[#b18c57] text-white py-3 px-5">
              Read More
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
