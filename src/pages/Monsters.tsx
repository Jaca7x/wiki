import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { monsters } from "@/data/monster";
import type { MonsterKey } from "@/data/monster"

import goblinTitle from "@/assets/imgs/monsters/goblins-title.png";
import wolfTitle from "@/assets/imgs/monsters/wolf_title.png";
import bossTitle from "@/assets/imgs/monsters/goblins-title.png";
import npcsTitle from "@/assets/imgs/monsters/goblins-title.png";

import MonsterModal from "@/features/monster/MonsterModal";
import MonsterCard from "@/features/monster/MonsterCard";

export default function Monsters() {
  const [hoveredCard, setHoveredCard] = useState<MonsterKey | null>(null);
  const [selectMonsterIndex, setSelectMonsterIndex] = useState<number | null>(null);

  const { hash } = useLocation();

  const monsterGroups: Record<string, MonsterKey[]> = {
    goblins: ["goblin", "archer", "tank", "bomb"],
    wolfs: ["wolf", "whiteWolf", "redWolf"],
    boss: ["boss"],
    npcs: ["knight", "ghost", "peasant"]
  };

  const allMonstersList = useMemo(() => {
    return Object.keys(monsters).map((key) => ({
      key: key as MonsterKey,
      ...monsters[key as MonsterKey],
    }));
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const openModalAt = (key: MonsterKey) => {
    const index = allMonstersList.findIndex((m) => m.key === key);
    setSelectMonsterIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white px-2 sm:px-4 pb-20">
      
      <section id="goblins" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={goblinTitle} className="h-16 md:h-24 object-contain" alt="Goblins" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {monsterGroups.goblins.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="wolfs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={wolfTitle} className="h-16 md:h-24 object-contain" alt="Wolfs" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {monsterGroups.wolfs.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="boss" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={bossTitle} className="h-16 md:h-24 object-contain" alt="Boss" />
        <div className="flex justify-center">
          {monsterGroups.boss.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <section id="npcs" className="scroll-mt-24 flex flex-col items-center py-10 gap-6">
        <img src={npcsTitle} className="h-16 md:h-24 object-contain" alt="NPCs" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {monsterGroups.npcs.map((key) => (
            <MonsterCard
              key={key}
              {...monsters[key]}
              name={monsters[key].name}
              marginLeft={monsters[key].marginLeftCard}
              hovered={hoveredCard === key}
              onHover={() => setHoveredCard(key)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => openModalAt(key)}
            />
          ))}
        </div>
      </section>

      <MonsterModal
        isOpen={selectMonsterIndex !== null}
        onClose={() => setSelectMonsterIndex(null)}
        monsters={allMonstersList}
        initialIndex={selectMonsterIndex ?? 0}
      />
    </div>
  );
}