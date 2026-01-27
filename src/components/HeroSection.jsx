import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="relative w-full h-86 bg-[url('/library.png')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header*/}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

    </section>
  );
}
