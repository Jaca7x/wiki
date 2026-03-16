import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import goblinTilte from "@/assets/imgs/monsters/goblins-title.png";

import goblinSprite from "@/assets/imgs/sprites/goblin/goblin_sprite.png";
import goblinArcherSprite from "@/assets/imgs/sprites/goblin/goblin_archer_sprite.png";
import goblinTankSprite from "@/assets/imgs/sprites/goblin/goblin_tank_sprite.png";
import goblinBombSprite from "@/assets/imgs/sprites/goblin/goblin_bomb_sprite.png";

import wolfTitle from "@/assets/imgs/monsters/wolf_title.png";

import wolfSprite from "@/assets/imgs/sprites/wolf/wolf_sprite.png";
import whiteWolfSprite from "@/assets/imgs/sprites/wolf/white_wolf_sprite.png";
import redWolfSprite from "@/assets/imgs/sprites/wolf/red_wolf_sprite.png";

import bossTitle from "@/assets/imgs/monsters/boss_title.png";

import bossSprite from "@/assets/imgs/sprites/boss/boss_attack.png"

import npcsTtile from "@/assets/imgs/monsters/npcs_title.png"

import npcSprite from "@/assets/imgs/sprites/npcs/npc_sprite.png"
import ghostSprite from "@/assets/imgs/sprites/npcs/npc_ghost_sprite.png"
import peasantSprite from "@/assets/imgs/sprites/npcs/peasant_sprite.png"

import MonsterModal from "@/features/monster/MonsterModal";
import MonsterCard from "@/features/monster/MonsterCard";

export default function Monsters() {

  type MonsterKey =
    | "goblin"
    | "archer"
    | "tank"
    | "bomb"
    | "wolf"
    | "whiteWolf"
    | "redWolf"
    | "boss"
    | "knight"
    | "ghost"
    | "peasant";
    

  const [hoveredCard, setHoveredCard] = useState<MonsterKey | null>(null);
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
    marginLeftModal: number;
    marginLeftCard: number;
    marginBottom: number;
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
      marginLeftModal: 4.5,
      marginLeftCard: 40,
      marginBottom: 0
    },

    archer: {
      name: "Goblin Archer",
      description: "Ataca a distância.",
      sprite: goblinArcherSprite,
      frameWidth: 158,
      frameHeight: 128,
      frames: 9,
      scale: 1,
      fps: 10,
      marginLeftModal: 3,
      marginLeftCard: 25,
      marginBottom: 0
    },

    tank: {
      name: "Goblin Tank",
      description: "Muito resistente.",
      sprite: goblinTankSprite,
      frameWidth: 220,
      frameHeight: 200,
      frames: 10,
      scale: 1,
      fps: 10,
      marginLeftModal: 2.5,
      marginLeftCard: 55,
      marginBottom: 60
    },

    bomb: {
      name: "Goblin Bomb",
      description: "Explode perto do jogador.",
      sprite: goblinBombSprite,
      frameWidth: 100,
      frameHeight: 128,
      frames: 8,
      scale: 2.5,
      fps: 10,
      marginLeftModal: -1,
      marginLeftCard: 0,
      marginBottom: 0
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
      marginLeftModal: 3,
      marginLeftCard: 20,
      marginBottom: 60
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
      marginLeftModal: 3,
      marginLeftCard: 20,
      marginBottom: 60
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
      marginLeftModal: 2,
      marginLeftCard: 0,
      marginBottom: 60
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
      marginLeftModal: 0,
      marginLeftCard: 20,
      marginBottom: 60
    },

    knight: {
      name: "Cavaleiro Jovem",
      description: "O chefe dos goblins.",
      sprite: npcSprite,
      frameWidth: 120,
      frameHeight: 150,
      frames: 4,
      scale: 1,
      fps: 2,
      marginLeftModal: 4,
      marginLeftCard: 0,
      marginBottom: 20
    },

    ghost: {
      name: "Cavaleiro Fantasma",
      description: "O chefe dos goblins.",
      sprite: ghostSprite,
      frameWidth: 120,
      frameHeight: 150,
      frames: 3,
      scale: 1,
      fps: 2,
      marginLeftModal: 4,
      marginLeftCard: 0,
      marginBottom: 20
    },

    peasant: {
      name: "Fazendeiro",
      description: "O chefe dos goblins.",
      sprite: peasantSprite,
      frameWidth: 120,
      frameHeight: 150,
      frames: 2,
      scale: 1,
      fps: 2,
      marginLeftModal: 0,
      marginLeftCard: 5,
      marginBottom: 20
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

  const monsterGroups: Record<string, MonsterKey[]> = {
    goblins: ["goblin", "archer", "tank", "bomb"],
    wolfs: ["wolf", "whiteWolf", "redWolf"],
    boss: ["boss"],
    npcs: ["knight", "ghost", "peasant"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white px-2 sm:px-4">

      <section id="goblins" className="scroll-mt-24 flex flex-col items-center py-6 sm:py-8 md:py-10 gap-2">
        <div>
          <img
            src={goblinTilte}
            alt="Goblins Title"
            className="h-14 sm:h-20 md:h-24 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-10 text-center px-4 sm:px-6 md:px-8">
          {monsterGroups.goblins.map((key) => {
            const monster = monsters[key];

            return (
              <MonsterCard
                key={key}
                name={monster.name}
                sprite={monster.sprite}
                frameWidth={monster.frameWidth}
                frameHeight={monster.frameHeight}
                frames={monster.frames}
                scale={monster.scale}
                fps={monster.fps}
                marginLeft={monster.marginLeftCard}
                marginBottom={monster.marginBottom}
                hovered={hoveredCard === key}
                onHover={() => setHoveredCard(key)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectMonster(key)}
              />
            );
          })}
        </div>

      </section>

      <section id="wolfs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={wolfTitle}
            alt="Wolfs Title"
            className="h-14 sm:h-20 md:h-24 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-10 text-center px-4 sm:px-6 md:px-8">
          {monsterGroups.wolfs.map((key) => {
            const monster = monsters[key];

            return (
              <MonsterCard
                key={key}
                name={monster.name}
                sprite={monster.sprite}
                frameWidth={monster.frameWidth}
                frameHeight={monster.frameHeight}
                frames={monster.frames}
                scale={monster.scale}
                fps={monster.fps}
                marginLeft={monster.marginLeftCard}
                marginBottom={monster.marginBottom}
                hovered={hoveredCard === key}
                onHover={() => setHoveredCard(key)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectMonster(key)}
              />
            );
          })}
        </div>
      </section>

      <section id="boss" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={bossTitle}
            alt="Boss title"
            className="h-14 sm:h-20 md:h-24 object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center items-stretch text-center">
          {monsterGroups.boss.map((key) => {
            const monster = monsters[key];

            return (
              <MonsterCard
                key={key}
                name={monster.name}
                sprite={monster.sprite}
                frameWidth={monster.frameWidth}
                frameHeight={monster.frameHeight}
                frames={monster.frames}
                scale={monster.scale}
                fps={monster.fps}
                marginLeft={monster.marginLeftCard}
                marginBottom={monster.marginBottom}
                hovered={hoveredCard === key}
                onHover={() => setHoveredCard(key)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectMonster(key)}
              />
            );
          })}
        </div>
      </section>

      <section id="npcs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <div>
          <img
            src={npcsTtile}
            alt="Npcs title"
            className="h-14 sm:h-20 md:h-24 object-contain"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-10 text-center px-4 sm:px-6 md:px-8">
          {monsterGroups.npcs.map((key) => {
            const monster = monsters[key];

            return (
              <MonsterCard
                key={key}
                name={monster.name}
                sprite={monster.sprite}
                frameWidth={monster.frameWidth}
                frameHeight={monster.frameHeight}
                frames={monster.frames}
                scale={monster.scale}
                fps={monster.fps}
                marginLeft={monster.marginLeftCard}
                marginBottom={monster.marginBottom}
                hovered={hoveredCard === key}
                onHover={() => setHoveredCard(key)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectMonster(key)}
              />
            );
          })}
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
          marginLeft={monsters[selectMonster].marginLeftModal}
        />
      )}
    </div>
  );
}