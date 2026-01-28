import CardRecomendedForYou from "./CardRecomendedForYou";

export default function RecomendedForYou() {
  return (
    <>
      <section className="w-full flex justify-center bg-creamy">
        <div className="container flex flex-col gap-5 py-30 text-black px-3">
          <h1 className="text-[26px] font-bold">Recomended For You</h1>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
            <CardRecomendedForYou />
            <CardRecomendedForYou />
          </div>
        </div>
      </section>
    </>
  );
}
