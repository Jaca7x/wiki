import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "@/components/ui/SplashScreen";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

import Home from "@/pages/Home";
import Monsters from "@/pages/Monsters";
import Technologies from "@/pages/Technologies";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Social from "@/pages/Social";

function AppContent() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monsters" element={<Monsters />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/social" element={<Social />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <SplashScreen onFinish={() => setShowIntro(false)} />;
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}