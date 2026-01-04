import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
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

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
