import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Beverage from "./pages/Beverage";
import Groceries from "./pages/Groceries";
import PersonalCare from "./pages/PersonalCare";
import HomeCare from "./pages/HomeCare";
import AgroCommodities from "./pages/AgroCommodities";
import Starch from "./pages/Starch";
import ProcessedFruits from "./pages/ProcessedFruits";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Beverage" element={<Beverage />} />
        <Route path="/Groceries" element={<Groceries />} />
        <Route path="/PersonalCare" element={<PersonalCare />} />
        <Route path="/HomeCare" element={<HomeCare />} />
        <Route path="/Agro" element={<AgroCommodities />} />
        <Route path="/Starch" element={<Starch />} />
        <Route path="/ProcessedFruits" element={<ProcessedFruits />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
