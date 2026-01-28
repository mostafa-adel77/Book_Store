import CardFlash from "./CardFlash";

export default function FlashSale() {

  return (
    <>
      <section className="w-full flex justify-center bg-creamy">
        <div className="container flex flex-col gap-15 py-30 text-black px-5">
          <h1 className="text-[26px] font-bold">Flash Sale</h1>
          <p className="text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            <br /> ultricies est. Aliquam in justo varius, sagittis neque ut,
            malesuada leo.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
           <CardFlash/>
           <CardFlash/>
          </div>
        </div>
      </section>
    </>
  );
}
