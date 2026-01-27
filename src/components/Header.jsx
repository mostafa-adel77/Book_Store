import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full py-6 bg-[#FFFFFF33]">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Navbar />

        <div className="flex gap-5">
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
      </div>
    </header>
  );
}
