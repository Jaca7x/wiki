import { useEffect, useState } from "react";
import logo from "../assets/icon.png";

type SplashScreenProps = {
    onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setVisible(true);
        }, 100);

        const fadeOutTimer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2700);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className="h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] flex flex-col">

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={logo}
                    alt="icone"
                    className={`
          h-96
          drop-shadow-[0_0_30px_rgba(255,200,0,0.3)]
          transition-opacity duration-1000 ease-in-out
          ${visible ? "opacity-100" : "opacity-0"}
        `}
                />
            </div>

            <span
                className={`
        text-gray-400 text-xs tracking-wider pb-4 text-center
        transition-opacity duration-1000 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
            >
                © 2026 Knights Quest. All rights reserved.
            </span>

        </div>
    );
}