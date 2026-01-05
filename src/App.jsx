import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FloatingActions from "./components/FloatingComponents";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

/* Pages */
import About from "./pages/about";
import Brands from "./pages/brands";
import Contact from "./pages/contact";
import Home from "./pages/home";

import Beverage from "./pages/beverage";
import Groceries from "./pages/groceries";
import HomeCare from "./pages/homecare";
import PersonalCare from "./pages/personalcare";

import AgroCommodities from "./pages/agrocommodities";
import PrivacyPolicy from "./pages/privacypolicy";
import ProcessedFruits from "./pages/processedfruits";
import Starch from "./pages/starch";
import Terms from "./pages/terms";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />

        {/* FMCG dropdown pages */}
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/beverage" element={<Beverage />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/homeCare" element={<HomeCare />} />

        {/* Products dropdown pages */}
        <Route path="/agro" element={<AgroCommodities />} />
        <Route path="/starch" element={<Starch />} />
        <Route path="/processedfruits" element={<ProcessedFruits />} />

        {/* legal routes */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
};

export default App;