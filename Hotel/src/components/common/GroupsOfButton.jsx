import React, { useState } from "react";

const GroupsOfButton = ({ listOfBtn }) => {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    setActive(parseInt(e.target.id));
  };
  return (
    <>
      <div>
        {/* Group of Btns */}
        <div className=" md:flex md:gap-2 ">
          {listOfBtn.map((btn, id) => {
            return (
              <button
                key={id}
                className={` md:w-full p-4 w-full font-subHeading font-semibold tracking-wider ${
                  active === id
                    ? "bg-white text-light"
                    : "bg-slate-50 text-primary "
                }`}
                id={id}
                onClick={handleClick}
              >
                {btn.btnName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Details */}

      <div className="mb-8">{listOfBtn[active].details}</div>
    </>
  );
};

export default GroupsOfButton;
