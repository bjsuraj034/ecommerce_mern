import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm  font-semibold">
        <NavLink
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-gray-800 underline "
              : "text-gray-400"
          } uppercase`}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/collection"
          className={`${
            location.pathname === "/collection"
              ? "text-gray-800 underline "
              : "text-gray-400"
          }  uppercase `}
        >
          <p>Collection</p>
        </NavLink>
        <NavLink
          to="/about"
          className={`${
            location.pathname === "/about"
              ? "text-gray-800 underline "
              : "text-gray-400 uppercase "
          }`}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={`${
            location.pathname === "/contact"
              ? "text-gray-800 "
              : "text-gray-400"
          }  hover:underline uppercase`}
        >
          <p>Contact</p>
        </NavLink>
      </ul>
      <div className="flex items-center justify-center gap-5">
        <img src={assets.search} alt="" className="w-5 cursor-pointer" />
        <div className=" group relative">
          <img src={assets.account} alt="" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu  right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="hover:text-black cursor-pointer">My profile</p>
              <p className="hover:text-black cursor-pointer">orders</p>
              <p className="hover:text-black cursor-pointer">logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full aspect-square text-[8px]">
            10
          </p>
        </Link>
        <img
          src={assets.hamburger}
          onClick={() => setvisible(true)}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>
      <div
        className={`absolute bg-gray-100 overflow-hidden top-0 right-0 left-0 bottom-0 transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setvisible(false)} className="flex items-center gap-4 p-3">
            <img src={assets.sidearrow} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setvisible(false)}  to='/'>
          <p className="border-b-2 border-gray-200 py-3 px-5">HOME</p></NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/collection'>
          <p className="border-b-2 border-gray-200 py-3 px-5">COLLECTION</p></NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/about'>
          <p className="border-b-2 border-gray-200 py-3 px-5">ABOUT</p></NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/contact'>
          <p className="border-b-2 border-gray-200 py-3 px-5">CONTACT</p></NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/admin'>
          <p className="border-b-2 border-gray-200 py-3 px-5">Admin</p></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
