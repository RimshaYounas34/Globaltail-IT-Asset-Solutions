import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Partnerships from "../pages/Partnerships";
import Contact from "../pages/Contact";
import SellAssets from "../pages/SellAssets";
import BulkPurchasing from "../pages/BulkPurchasing";
import QualityRefurbishment from "../pages/QualityRefurbishment";
import DataSecurity from "../pages/DataSecurity";
import LocalGlobalDelivery from "../pages/LocalGlobalDelivery";
import SustainableApproach from "../pages/SustainableApproach";
 import CompetitivePricing from "../pages/CompetitivePricing";
import ConsistentSupply from "../pages/ConsistentSupply";
import LongTermPartnerships from "../pages/LongTermPartnerships";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/partnerships" element={<Partnerships />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/sell-assets" element={<SellAssets />} />
        <Route path="/bulk-purchasing" element={<BulkPurchasing />} />
        <Route
          path="/quality-refurbishment"
          element={<QualityRefurbishment />}
        />
        <Route path="/data-security" element={<DataSecurity />} />
        <Route
          path="/local-global-delivery"
          element={<LocalGlobalDelivery />}
        />
        <Route path="/sustainable-approach" element={<SustainableApproach />} />
        <Route path="/competitive-pricing" element={<CompetitivePricing />} />
        <Route path="/consistent-supply" element={<ConsistentSupply />} />
        <Route
          path="/long-term-partnerships"
          element={<LongTermPartnerships />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
