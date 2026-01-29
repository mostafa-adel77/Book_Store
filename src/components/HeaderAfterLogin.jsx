import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import NavbarAfterLogin from "./NavbarAfterLogin";
import johnImg from "../assets/images/johnImg.png";

export default function HeaderAfterLogin({ userData }) {
  const navigate = useNavigate();
  const [BarsOpen, setBarsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full py-6 bg-[#FFFFFF33] px-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <NavbarAfterLogin />

        <div className="flex gap-10 items-center">
          <div className="hidden md:flex gap-8 items-center">
            <FaRegHeart onClick={()=>navigate("/HomeAfterLogin/wishlist")}  className="text-white text-3xl hover:cursor-pointer" />
            <FaCartShopping onClick={()=>navigate("/HomeAfterLogin/cart")}  className="text-white text-3xl hover:cursor-pointer" />
          </div>

          <div className="flex gap-5">
            <img
              onClick={() => navigate("/HomeAfterLogin/profile")}
              className="object-contain hover:cursor-pointer"
              width={40}
              height={40}
              src={johnImg}
              alt="User"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">
                {userData?.first_name} {userData?.last_name}
              </h1>
              <p className="text-[#ffffff93]">{userData?.email}</p>
            </div>
          </div>
        </div>

        <FaBars
          onClick={() => setBarsOpen(!BarsOpen)}
          className="md:hidden text-3xl text-Gray cursor-pointer"
        />

        {BarsOpen && (
          <div className="absolute top-full left-0 w-full md:hidden mt-4 flex flex-col gap-6 text-Gray text-lg font-semibold p-6 shadow-lg">
            <NavLink to="/login" onClick={() => setBarsOpen(false)}>Home</NavLink>
            <NavLink to="/HomeAfterLogin/books" onClick={() => setBarsOpen(false)}>Books</NavLink>
            <NavLink to="/HomeAfterLogin/aboutus" onClick={() => setBarsOpen(false)}>About Us</NavLink>
            <div className="flex gap-8 items-center">
              <FaRegHeart className="text-white text-3xl" />
              <FaCartShopping className="text-white text-3xl" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
