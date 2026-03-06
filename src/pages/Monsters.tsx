import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import goblinTilte from "../assets/imgs/monsters/goblins-title.png";
import goblinSprite from "../assets/imgs/sprites/goblin_sprite.png";
import goblinArcherSprite from "../assets/imgs/sprites/goblin_sprite.png";

import SpriteAnimator from "../components/SpriteAnimator";

export default function Monsters() {
  const [isHover, setIsHover] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white">

      <section id="goblins" className="flex flex-col items-center py-20 gap-6">

        <div>
          <img
            src={goblinTilte}
            alt="Goblins Title"
            className="h-28 object-contain"
          />
        </div>

        <div className="flex gap-10">

          <div
            className="bg-black/40 p-10 rounded-lg w-52 flex flex-col items-center gap-4 text-center"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >

            <div className="flex justify-center w-full">
              <SpriteAnimator
                sprite={goblinSprite}
                frameWidth={140}
                frameHeight={128}
                frames={6}
                fps={isHover ? 10 : 0}
              />
            </div>

            <p className="text-[#c9a227] font-semibold">
              Goblin
            </p>

          </div>

        </div>

      </section>

      <section id="wolfs">
        <h2>Lobos</h2>
      </section>

    </div>
  );
}