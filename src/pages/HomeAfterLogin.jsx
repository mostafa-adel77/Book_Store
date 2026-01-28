import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeAfterLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("token"));
    if (!jwt) {
      navigate("/");
    }
  }, []);
  return <div>HomeAfterLogin</div>;
}
