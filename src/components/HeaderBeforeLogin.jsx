import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavbarBeforeLogin from "./NavbarBeforeLogin";

export default function HeaderBeforeLogin() {
  const navigate = useNavigate();
  const [BarsOpen, setBarsOpen] = useState(false);
  return (
    <header className="relative w-full py-6 bg-[#FFFFFF33] px-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <NavbarBeforeLogin />

        <div className="hidden md:flex gap-5">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-3 bg-move rounded-xl hover:cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-3 bg-white text-move rounded-xl hover:cursor-pointer"
          >
            Sign Up
          </button>
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

            <div className="flex flex-col gap-5">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-3 bg-move text-white rounded-xl"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-3 bg-white text-move rounded-xl"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
