import React from "react";
import brand from "./common/assets/brand.svg";

import facebook from "./common/assets/icons/facebook.svg";
import instagram from "./common/assets/icons/instagram.svg";
import twitter from "./common/assets/icons/twitter.svg";
import email from "./common/assets/icons/email.svg";

const contents = [
  {
    id: 1,
    name: "Product",
    subArray: ["Learn", "Plugins", "Gallery", "Pricing"],
  },
  {
    id: 2,
    name: "Information",
    subArray: ["Privacy", "Cookies", "Terms", "Security"],
  },
  {
    id: 3,
    name: "Support",
    subArray: ["Updates", "Discord", "Startups", "Contact"],
  },
];

const socials = [facebook, instagram, twitter, email];

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] w-full p-10 grid lg:grid-cols-2 grid-cols-1">
      <div>
        <img src={brand} alt={brand} />
        <p className="text-base my-2">
          Est ullamco et deserunt ad consectetur nisi ullamco.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((item) => (
            <img className="cursor-pointer" src={item} alt={item} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1">
        {contents.map((item) => (
          <>
            <div className="lg:block hidden">
              <p className="text-base my-2">{item.name}</p>
              <div className="flex flex-col gap-2">
                {item.subArray.map((sub) => (
                  <p className="text-base text-[#808080] hover:underline cursor-pointer">
                    {sub}
                  </p>
                ))}
              </div>
            </div>

            <details className="lg:hidden block">
              <summary className="text-base my-2">&nbsp;{item.name}</summary>
              <div className="flex flex-col gap-2">
                {item.subArray.map((sub) => (
                  <p className="text-base text-[#808080] hover:underline cursor-pointer">
                    {sub}
                  </p>
                ))}
              </div>
            </details>
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
