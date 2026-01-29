import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSectionBeforeLogin from "./components/HeroSectionBeforeLogin";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      navigate("/HomeAfterLogin");
    }
  }, []);
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
