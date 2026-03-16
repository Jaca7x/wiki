import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import SplashScreen from "@/utils/SplashScreen";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

import Home from "@/pages/Home";
import Monsters from "@/pages/Monsters";

function AppContent() {
  
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/monsters" element={<Monsters />} />
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}