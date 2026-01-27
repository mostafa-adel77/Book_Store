import bookBookmark from "../assets/images/book-bookmark 1.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-12">
        <div className="flex items-center gap-3">
          <img
            onClick={() => navigate("/")}
            className="w-8 hover:cursor-pointer"
            src={bookBookmark}
            alt=""
          />
          <p className="font-normal">Bookshop</p>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-semibold text-[18px]">Home</p>
          <p className="font-semibold text-[18px]">Books</p>
          <p className="font-semibold text-[18px]">About Us</p>
        </div>
      </div>
    </>
  );
}
