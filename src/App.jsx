import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import CartPage from "./pages/cart/CartPage";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((store) => store.global);
  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [theme]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
