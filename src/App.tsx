import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Home from "@/pages/Home";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <SplashScreen onFinish={() => setShowIntro(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}