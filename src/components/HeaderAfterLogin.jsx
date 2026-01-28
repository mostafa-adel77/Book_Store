import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa";
import NavbarAfterLogin from "./NavbarAfterLogin";
import { FaCartShopping } from "react-icons/fa6";
import johnImg from "../assets/images/johnImg.png";
export default function HeaderAfterLogin() {
  const [BarsOpen, setBarsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <header className="relative w-full py-6 bg-[#FFFFFF33] px-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <NavbarAfterLogin />
        <div className="flex gap-10 items-center">
          <div className="hidden md:flex gap-8 items-cente">
            <FaRegHeart className="text-white text-3xl" />
            <FaCartShopping className="text-white text-3xl" />
          </div>
          <div className="flex gap-5">
            <img
              className="object-contain"
              width={40}
              height={40}
              src={johnImg}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">{`${user?.first_name}  ${user?.last_name}`}</h1>
              <p className="text-[#ffffff93]">{user?.email}</p>
            </div>
          </div>
        </div>
        <FaBars
          onClick={() => setBarsOpen(!BarsOpen)}
          className="md:hidden text-3xl text-Gray cursor-pointer"
        />
        {BarsOpen && (
          <div
            className="absolute top-full left-0 w-full md:hidden
                  mt-4 flex flex-col gap-6 text-Gray text-lg font-semibold p-6 shadow-lg"
          >
            <NavLink to="/login" onClick={() => setBarsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/books" onClick={() => setBarsOpen(false)}>
              Books
            </NavLink>
            <NavLink to="/aboutus" onClick={() => setBarsOpen(false)}>
              About Us
            </NavLink>
            <div className="flex gap-8 items-cente">
              <FaRegHeart className="text-white text-3xl" />
              <FaCartShopping className="text-white text-3xl" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
