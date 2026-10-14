import { SquareMenu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../assets/images/LogoWhite.png";
import { Link } from "react-router";

const NavMobile = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <div>
        <SquareMenu onClick={()=>{
            setOpen(!open)
        }} className="text-white " size={52} strokeWidth={0.5} />
      </div>
      <div className={`w-3/4 transition-all duration-300  h-full z-100 p-2 fixed top-0 bg-black  flex flex-col items-stretch ${open ? "left-0":"-left-full"}`}>
      <div className="flex justify-between items-center ">
        
        <Link to={"/"}>
          <img className="w-20 mt-2  mb-4 mx-3" src={Logo} alt="" />
        </Link>
        <button onClick={()=>{setOpen(false)}}>

        <X  className="text-white bg-red-500/40" size={30} strokeWidth={0.5} />
        </button>
      </div>
        <NavLink
          onClick={()=>{setOpen(false)}}
          className={({ isActive }) =>
            `py-4 px-3 border-y border-white ${isActive ? " text-orange-500 bg-[#DED4C2]" : "text-white"}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={()=>{setOpen(false)}}
          className={({ isActive }) =>
            `py-4 px-3 border-b border-white ${isActive ? " text-orange-500 bg-[#DED4C2]" : "text-white"}`
          }
          to={"/about"}
        >
          {" "}
          About{" "}
        </NavLink>
        <NavLink
          onClick={()=>{setOpen(false)}}
          className={({ isActive }) =>
            `py-4 px-3 border-b border-white ${isActive ? " text-orange-500 bg-[#DED4C2]" : "text-white"}`
          }
          to={"/shop"}
        >
          {" "}
          Shop
        </NavLink>
        <NavLink
          onClick={()=>{setOpen(false)}}
          className={({ isActive }) =>
            `py-4 px-3 border-b border-white ${isActive ? " text-orange-500 bg-[#DED4C2]" : "text-white"}`
          }
          to={"/contact"}
        >
          Contact{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default NavMobile;
