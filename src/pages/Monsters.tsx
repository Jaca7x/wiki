import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import goblinTilte from "../assets/imgs/monsters/goblins-title.png";

import goblinSprite from "../assets/imgs/sprites/goblin/goblin_sprite.png";
import goblinArcherSprite from "../assets/imgs/sprites/goblin/goblin_archer_sprite.png";
import goblinTankSprite from "../assets/imgs/sprites/goblin/goblin_tank_sprite.png";
import goblinBombSprite from "../assets/imgs/sprites/goblin/goblin_bomb_sprite.png";

import wolfTitle from "../assets/imgs/monsters/wolf_title.png";

import wolfSprite from "../assets/imgs/sprites/wolf/wolf_sprite.png";
import whiteWolfSprite from "../assets/imgs/sprites/wolf/white_wolf_sprite.png";
import redWolfSprite from "../assets/imgs/sprites/wolf/red_wolf_sprite.png";

import bossTitle from "../assets/imgs/monsters/boss_title.png";

import bossSprite from "../assets/imgs/sprites/boss/boss_attack.png"

import SpriteAnimator from "@/components/SpriteAnimator";
import MonsterModal from "@/components/MonsterModal";

export default function Monsters() {

  type MonsterKey =
    | "goblin"
    | "archer"
    | "tank"
    | "bomb"
    | "wolf"
    | "whiteWolf"
    | "redWolf"
    | "boss";

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectMonster, setSelectMonster] = useState<MonsterKey | null>(null);

  const { hash } = useLocation();

  const monsters: Record<MonsterKey, {
    name: string;
    description: string;
    sprite: string;
    frameWidth: number;
    frameHeight: number;
    frames: number;
    scale: number;
    fps: number;
    marginLeft: number;
  }> = {
    goblin: {
      name: "Goblin",
      description: "Criatura fraca.",
      sprite: goblinSprite,
      frameWidth: 139.7,
      frameHeight: 128,
      frames: 6,
      scale: 1,
      fps: 10,
      marginLeft: 4.5
    },

    archer: {
      name: "Goblin Archer",
      description: "Ataca a distância.",
      sprite: goblinArcherSprite,
      frameWidth: 151,
      frameHeight: 128,
      frames: 9,
      scale: 1,
      fps: 10,
      marginLeft: 3
    },

    tank: {
      name: "Goblin Tank",
      description: "Muito resistente.",
      sprite: goblinTankSprite,
      frameWidth: 300,
      frameHeight: 195,
      frames: 10,
      scale: 1,
      fps: 10,
      marginLeft: 2.5
    },

    bomb: {
      name: "Goblin Bomb",
      description: "Explode perto do jogador.",
      sprite: goblinBombSprite,
      frameWidth: 300,
      frameHeight: 300,
      frames: 8,
      scale: 1,
      fps: 10,
      marginLeft: -1
    },

    wolf: {
      name: "Lobo",
      description: "Predador veloz.",
      sprite: wolfSprite,
      frameWidth: 180,
      frameHeight: 180,
      frames: 6,
      scale: 1,
      fps: 7,
      marginLeft: 3
    },

    whiteWolf: {
      name: "Lobo Albino",
      description: "Mais raro e perigoso.",
      sprite: whiteWolfSprite,
      frameWidth: 180,
      frameHeight: 180,
      frames: 4,
      scale: 1,
      fps: 8,
      marginLeft: 3
    },

    redWolf: {
      name: "Lobo Rubro",
      description: "Extremamente agressivo.",
      sprite: redWolfSprite,
      frameWidth: 180,
      frameHeight: 180,
      frames: 5,
      scale: 1,
      fps: 6,
      marginLeft: 3
    },

    boss: {
      name: "Brakkor, O Dourado",
      description: "O chefe dos goblins.",
      sprite: bossSprite,
      frameWidth: 140,
      frameHeight: 128,
      frames: 9,
      scale: 2,
      fps: 6,
      marginLeft: 0
    }
  };

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

      <section id="goblins" className="flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={goblinTilte}
            alt="Goblins Title"
            className="h-28 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-10 text-center px-4">

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("goblin")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("goblin")}
          >

            <div className="flex items-center justify-center h-[200px] w-full">
              <div className="ml-8">
                <SpriteAnimator
                  sprite={goblinSprite}
                  frameWidth={139.7}
                  frameHeight={128}
                  scale={1}
                  frames={6}
                  fps={hoveredCard === "goblin" ? 10 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("archer")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("archer")}
          >
            <div className="flex items-center justify-center h-[200px] w-full">
              <div className="ml-5">
                <SpriteAnimator
                  sprite={goblinArcherSprite}
                  frameWidth={151}
                  frameHeight={128}
                  scale={1.0}
                  frames={9}
                  fps={hoveredCard === "archer" ? 10 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Arqueiro
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[320px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("tank")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("tank")}
          >
            <div className="flex items-center justify-center h-[160px] w-full">
              <div className="ml-15">
                <SpriteAnimator
                  sprite={goblinTankSprite}
                  frameWidth={300}
                  frameHeight={195}
                  scale={1}
                  frames={10}
                  fps={hoveredCard === "tank" ? 10 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Tank
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("bomb")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("bomb")}
          >
            <div className="flex items-center justify-center h-[200px] w-full">
              <SpriteAnimator
                sprite={goblinBombSprite}
                frameWidth={128}
                frameHeight={128}
                scale={2.5}
                frames={8}
                fps={hoveredCard === "bomb" ? 10 : 0}
              />
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Goblin Bomba
            </p>
          </div>

        </div>
      </section>

      <section id="wolfs" className="flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={wolfTitle}
            alt="Wolfs Title"
            className="h-24 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-10 text-center px-4">

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("wolf")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("wolf")}
          >

            <div className="flex items-center justify-center h-[200px] w-full">
              <div className="ml-5">
                <SpriteAnimator
                  sprite={wolfSprite}
                  frameWidth={180}
                  frameHeight={180}
                  scale={1}
                  frames={6}
                  fps={hoveredCard === "wolf" ? 8 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Lobo
            </p>
          </div>
          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("whiteWolf")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("whiteWolf")}
          >

            <div className="flex items-center justify-center h-[200px] w-full">
              <div className="ml-5">
                <SpriteAnimator
                  sprite={whiteWolfSprite}
                  frameWidth={180}
                  frameHeight={180}
                  scale={1}
                  frames={4}
                  fps={hoveredCard === "whiteWolf" ? 6 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Lobo Albino
            </p>
          </div>

          <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={() => setHoveredCard("redWolf")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectMonster("redWolf")}
          >

            <div className="flex items-center justify-center h-[200px] w-full">
              <div>
                <SpriteAnimator
                  sprite={redWolfSprite}
                  frameWidth={180}
                  frameHeight={180}
                  scale={1}
                  frames={5}
                  fps={hoveredCard === "redWolf" ? 6 : 0}
                />
              </div>
            </div>
            <p className="text-[#c9a227] font-semibold mt-4 uppercase tracking-widest">
              Lobo Rubro
            </p>
          </div>
        </div>
      </section>

      <section id="boss" className="flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={bossTitle}
            alt="Boss title"
            className="h-24 object-contain"
          />
        </div>

        <div
          className="bg-black/40 p-8 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
          onMouseEnter={() => setHoveredCard("boss")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setSelectMonster("boss")}
        >

          <div className="flex items-center justify-center h-[200px] w-full">
            <div>
              <div className="ml-6">
                <SpriteAnimator
                  sprite={bossSprite}
                  frameWidth={140}
                  frameHeight={128}
                  scale={2}
                  frames={9}
                  fps={hoveredCard === "boss" ? 6 : 0}
                />
              </div>
            </div>
          </div>
          <p className="text-[#c9a227] font-semibold mt-10 uppercase tracking-widest">
            Brakkor, O Dourado
          </p>
        </div>
      </section>

      {selectMonster && (
        <MonsterModal
          isOpen={true}
          onClose={() => setSelectMonster(null)}
          title={monsters[selectMonster].name}
          description={monsters[selectMonster].description}
          sprite={monsters[selectMonster].sprite}
          frameWidth={monsters[selectMonster].frameWidth}
          frameHeight={monsters[selectMonster].frameHeight}
          frames={monsters[selectMonster].frames}
          scale={monsters[selectMonster].scale}
          fps={monsters[selectMonster].fps}
          marginLeft={monsters[selectMonster].marginLeft}
        />
      )}

    </div>
  );
}