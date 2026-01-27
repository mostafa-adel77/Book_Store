import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Homepage from "../pages/Homepage";
import BooksPage from "../pages/BooksPage";
import AboutPage from "../pages/AboutPage";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="books" element={<BooksPage />} />
      <Route path="aboutus" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgetPassword" element={<ForgetPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />
    </Routes>
  )
}
