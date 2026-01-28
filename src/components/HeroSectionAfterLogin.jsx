import { FaMicrophone, FaSearch } from "react-icons/fa";
import HeaderAfterLogin from "./HeaderAfterLogin";

export default function HeroSectionAfterLogin() {
  return (
    <section className="relative w-full h-120 md:h-150 bg-[url('/library.png')] bg-cover bg-center">
      <div className="container mx-auto flex justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Header*/}
        <div className="absolute top-0 left-0 w-full z-30">
          <HeaderAfterLogin />
        </div>
        {/* Search */}
        <div className="absolute w-80 lg:w-134 pt-70 z-20">
          <div className="flex items-center mx-auto overflow-hidden rounded-full bg-white shadow-md">
            {/* Input */}
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-5 py-3 text-gray-700 outline-none"
            />

            {/* Mic Icon */}
            <button className="px-4 text-gray-500 hover:text-gray-700">
              <FaMicrophone />
            </button>

            {/* Search Button */}
            <button className="bg-move px-6 py-5 text-white hover:cursor-pointer">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
