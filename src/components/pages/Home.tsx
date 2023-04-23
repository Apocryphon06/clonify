import React from "react";
import guy from "../common/assets/images/guy.svg";
import offer from "../common/assets/images/offer.svg";
import end from "../common/assets/images/end.svg";
import endPhone from "../common/assets/images/end-sm.svg";

import nike from "../common/assets/brands/nike.svg";
import more from "../common/assets/brands/more.svg";
import puma from "../common/assets/brands/puma.svg";
import hush from "../common/assets/brands/hush.svg";
import shoei from "../common/assets/brands/shoei.svg";
import supreme from "../common/assets/brands/supreme.svg";

import brown from "../common/assets/images/variants/brown.svg";
import darkBlue from "../common/assets/images/variants/darkBlue.svg";
import beige from "../common/assets/images/variants/beige.svg";

import mail from "../common/assets/icons/mail.svg";

const variants = [
  {
    id: 1,
    tag: "Featured",
    name: "Nairo Series®",
    image: beige,
  },
  {
    id: 2,
    tag: "New",
    name: "Kensho Series®",
    image: darkBlue,
  },
  {
    id: 3,
    tag: "Handmade",
    name: "Atarashi Series®",
    image: brown,
  },
];

const brands = [nike, hush, puma, shoei, more, supreme];

const Home = () => {
  return (
    <div>
      <div className="w-full flex lg:flex-row flex-col items-center bg-[#f2f2f2]">
        <img src={guy} alt={guy} />
        <div className=" p-10">
          <p className="uppercase font-medium text-base tracking-widest">
            IKIGAI
          </p>
          <p className="lg:text-5xl text-3xl font-medium lg:w-[388px] my-2">
            Leather bags worth hugging.
          </p>

          <p className="text-base lg:w-[388px]">
            Keep your everyday style chic and on-trend with our selection 20+
            styles to choose from.
          </p>
          <br />
          <p className="hover:underline cursor-pointer text-base font-medium">
            See Collection
          </p>
        </div>
      </div>

      {/* Brands */}
      <div className="flex justify-center items-center my-[20px]">
        <div className="px-5 lg:grid-cols-6 grid-cols-2 grid gap-12 p-10 lg:border-y">
          {brands.map((item) => (
            <img src={item} alt={item} />
          ))}
        </div>
      </div>

      {/* Variants */}
      <div className="flex justify-center items-center">
        <div className="lg:px-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
          {variants.map((item) => (
            <div className="flex flex-col justify-center items-center">
              <img src={item.image} alt={item.image} />
              <p className="text-sm text-[#d9d9d9] mt-2">{item.tag}</p>
              <p className="text-lg ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offer banner */}
      <div className="lg:px-10 flex lg:flex-row flex-col items-center mt-10 bg-[#f2f2f2] lg:scale-[0.91]">
        <img src={offer} alt={offer} />
        <div className="lg:p-10 p-5">
          <p className="text-base uppercase tracking-widest">exclusive</p>
          <p className="lg:text-5xl text-3xl uppercase font-medium my-2">
            50% off
          </p>
          <p className="text-base lg:w-[388px]">
            Irure eiusmod eiusmod consectetur voluptate commodo mollit
            incididunt est laboris esse laborum ad dolor pariatur.
          </p>
          <p className="text-2xl font-medium my-2">05d : 11h : 23m : 02s</p>

          <button className="capitalize bg-[#000] text-white hover:shadow-md p-2">
            shop now
          </button>
        </div>
      </div>
      {/* News Letter */}
      <div className="p-10 lg:m-[60px] m-5 border rounded-lg flex flex-col justify-center items-center">
        <p className="font-medium lg:text-3xl text-2xl">Join our newsletter</p>
        <p className="lg:text-base text-sm text-[#808080]">
          Exercitation tempor esse ad cupidatat.
        </p>
        <div className="flex items-center p-1 border-b lg:w-[500px]">
          <img src={mail} alt={mail} />
          <input
            className="outline-none bg-transparent p-2 w-full placeholder:font-light"
            placeholder="hrithikchandrashekar@gmail.com"
          />
          <button className="text-base font-medium p-2">Signup</button>
        </div>
      </div>
      {/* Craftsmanship */}
      <div className="flex flex-col justify-center items-center mb-[200px]">
        {/* for desktop */}
        <img className="lg:block hidden" src={end} alt={end} />
        {/* for phone */}
        <img className="lg:hidden block" src={endPhone} alt={endPhone} />
        <div className="relative lg:bottom-[350px] lg:mb-[-300px] lg:flex hidden flex-col justify-center items-center">
          <p className="lg:text-5xl text-3xl text-center text-white">
            Exquisite
            <br /> Craftsmanship
          </p>
          <br />
          <p className="text-base lg:w-[388px] text-white">
            Dolor et ad ipsum mollit consectetur culpa sunt amet anim ipsum.
            Velit tempor aliquip sunt mollit eu aliqu
          </p>
          <br />

          <button className="border-b border-[#fcfcfc] font-medium text-white text-base">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
