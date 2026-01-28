import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <>
      <HeroSection />
      <main className="w-full ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
