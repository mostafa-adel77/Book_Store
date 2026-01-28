import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import imgcard1 from "../assets/images/imgcard1.png";
import reviewCard1 from "../assets/images/reviewCard1.png";
export default function CardRecomendedForYou() {
  return (
    <div className="flex bg-white p-10 w-full md:w-162 px-3 gap-5">
      <img width={173} height={260} src={imgcard1} alt="" />
      <div className="flex flex-col gap-3">
        <h1 className="text-[18px] font-bold">Rich Dad And Poor Dad</h1>
        <h1 className="text-[14px] font-normal">
          <span className="text-[#22222280]">Author:</span> Robert T. Kiyosanki
        </h1>
        <p className="text-[#22222280] text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo. Aliquam in justo varius, Aliquam in justo varius,
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <img src={reviewCard1} alt="" />
          <h1 className="text-[26px] font-bold">$30.00</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <button className="w-full md:w-73 bg-move text-white p-4 flex items-center justify-center gap-3 rounded-2xl hover:cursor-pointer">
            Add To Cart
            <span>
              <FaShoppingCart className="text-2xl text-white" />
            </span>
          </button>
          <span className="border-2 border-move p-2 rounded-xl">
            <FaRegHeart className="text-3xl text-move hover:cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}
