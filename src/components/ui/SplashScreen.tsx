import { useSplashScreen } from "@/hooks/useSplashScreen";
import logo from "@/assets/imgs/icon/icon_game.png";

type SplashScreenProps = {
    onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {

    const visible = useSplashScreen({ onFinish })

    return (
        <div className="h-screen bg-linear-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] flex flex-col">

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