import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import { useEffect, useState } from "react";

export default function MainLayoutAfterLogin() {
  const [userData, setUserData] = useState(() => 
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <HeaderAfterLogin userData={userData} />
      <main className="w-full">
        <Outlet context={{ userData, setUserData }} />
      </main>
      <Footer />
    </>
  );
}
