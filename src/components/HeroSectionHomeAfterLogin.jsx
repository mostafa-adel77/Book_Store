import { FaMicrophone, FaSearch } from "react-icons/fa";

export default function HeroSectionHomeAfterLogin() {
  return (
    <>
    <section className="relative w-full h-150 md:h-175 bg-[url('/library.png')] bg-cover bg-center pt-22">      
      <div className="container mx-auto flex justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
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
    </>
  );
}


