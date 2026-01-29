import BestSeller from "../components/BestSeller";
import RecomendedForYou from "../components/RecomendedForYou";
import FlashSale from "../components/FlashSale";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TraksHome from "../components/TraksHome";
export default function HomeBeforeLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      navigate("/HomeAfterLogin");
    }
  }, []);
  return (
    <>
      <TraksHome />
      <BestSeller />
      <RecomendedForYou />
      <FlashSale />
    </>
  );
}
