import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import CarDetails from "./pages/CarDetails";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Services from "./pages/Services";
import LogoMarquee from "./components/LogoMarquee";
import Contact from "./pages/Contact";
import Baaratis from "./pages/Baaratis";
import EmiCalculator from "./pages/EmiCalculator";

export default function App() {
  const logos = [
    "honda.png",
    "ford.png",
    "bmw.png",
    "mercedes.png",
    "audi.png",
    "toyota.png",
    "suzuki.svg",
    "hyundai.svg",
    "kia.svg",
    "tata.svg",
    "jeep.svg",
    "renault.svg",
  ];

  return (
    <Router>
      <div
        className="relative min-h-screen flex flex-col bg-black/20 text-white overflow-hidden"
        style={{ fontFamily: "var(--site-font)" }}
      >
        <Navbar />

        <main className="flex-1 relative z-10">
          <Routes>
            {/* 🌍 PUBLIC WEBSITE ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/baraatis" element={<Baaratis />} />
            <Route path="/emi-calculator" element={<EmiCalculator />} />
          </Routes>
        </main>

        <LogoMarquee logos={logos} speed={60} height={50} />
        <Footer />
      </div>
    </Router>
  );
}
