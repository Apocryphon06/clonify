import React from "react";
import guy from "../common/assets/images/guy.svg";

const Home = () => {
  return (
    <div>
      <div className="w-full flex lg:flex-row flex-col items-center">
        <img src={guy} alt={guy} />
        <div className=" p-10">
          <p className="uppercase font-medium text-base tracking-widest">
            IKIGAI
          </p>
          <p className="lg:text-5xl text-3xl font-medium w-[388px] my-2">
            Leather bags worth hugging.
          </p>

          <p className="text-base w-[388px]">
            Keep your everyday style chic and on-trend with our selection 20+
            styles to choose from.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
