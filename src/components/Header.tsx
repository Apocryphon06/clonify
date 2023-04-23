import React from "react";
import brand from "./common/assets/brand.svg";

import user from "./common/assets/icons/user.svg";
import cart from "./common/assets/icons/cart.svg";
import heart from "./common/assets/icons/heart.svg";
import search from "./common/assets/icons/search.svg";
import menu from "./common/assets/icons/menu.svg";

const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Shop",
    link: "#",
  },
  {
    id: 1,
    name: "Product",
    link: "#",
  },

  {
    id: 1,
    name: "Pages",
    link: "#",
  },
];

const Header = () => {
  return (
    <div className="w-full p-3 flex items-center justify-between px-5 bg-white shadow">
      <img className="cursor-pointer" src={brand} alt={brand} />

      <div className="lg:flex hidden items-center gap-10">
        {menuItems.map((item) => (
          <p className="text-base hover:underline cursor-pointer font-sans font-medium">
            {item.name}
          </p>
        ))}
      </div>

      <div className="lg:flex hidden items-center gap-5">
        {[search, user, heart, cart].map((item) => (
          <img className="cursor-pointer" src={item} alt={item} />
        ))}
      </div>

      <div className="lg:hidden flex items-center gap-5">
        <div className="flex items-center">
          <img src={cart} alt={cart} />
          <p className="bg-[#000] text-white rounded-full text-xs font-medium px-2 p-1">
            2
          </p>
        </div>

        <img className="cursor-pointer" src={menu} alt={menu} />
      </div>
    </div>
  );
};

export default Header;
