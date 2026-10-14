import React from "react";
import { NavLink } from "react-router";
const nav = () => {
  return (
    <div>
      <div className="lg:flex hidden gap-5 text-white text-lg font-semibold">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " text-orange-500" : "text-white"}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " text-orange-500" : "text-white"}`
          }
          to={"/about"}
        >
          {" "}
          About{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " text-orange-500" : "text-white"}`
          }
          to={"/shop"}
        >
          {" "}
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " text-orange-500" : "text-white"}`
          }
          to={"/contact"}
        >
          Contact{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default nav;
