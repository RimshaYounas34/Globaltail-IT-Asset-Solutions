import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Partnerships from "../pages/Partnerships";
import Contact from "../pages/Contact";
import SellAssets from "../pages/SellAssets";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/partnerships" element={<Partnerships />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/sell-assets" element={<SellAssets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;