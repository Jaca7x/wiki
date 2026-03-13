import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "@/components/SplashScreen";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Monsters from "@/pages/Monsters";
//import Characters from "@/pages/Characters";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [userHasInteract, setUserHasInteract] = useState(false);

  function onUserInteract() {
    setUserHasInteract(true);
  }

  if (showIntro) {
    return <SplashScreen onFinish={() => setShowIntro(false)} />;
  }

  return (
    <BrowserRouter>
      {userHasInteract && <NavBar />}

      <Routes>
        <Route
          path="/"
          element={<Home onUserInteract={onUserInteract} />}
        />
        <Route path="/monsters" element={<Monsters />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}