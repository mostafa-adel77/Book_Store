import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BooksPage from "../pages/BooksPage";
import AboutPage from "../pages/AboutPage";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../MainLayout";
import HomeBeforeLogin from "../pages/HomeBeforeLogin";
import HomeAfterLogin from "../pages/HomeAfterLogin";
import MainLayoutAfterLogin from "../MainLayoutAfterLogin";
import ProfilePage from "../pages/ProfilePage";
import WishlistPage from "../pages/wishlistPage";
import CartPage from "../pages/CartPage";

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeBeforeLogin />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Route>

      <Route path="/HomeAfterLogin" element={<MainLayoutAfterLogin />}>
        <Route index element={<HomeAfterLogin />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}
