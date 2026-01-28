import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSectionBeforeLogin from "./components/HeroSectionBeforeLogin";

export default function MainLayout() {
  return (
    <>
      <HeroSectionBeforeLogin />
      <main className="w-full ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
