import SpriteAnimator from "@/utils/SpriteAnimator";
import { motion, AnimatePresence } from "framer-motion";
import background from "@/assets/imgs/home/background-home.png";
import { useEffect, useState, useRef } from "react";
import type { MonsterData } from "@/data/monster";
import { ANIM_VARIANTS_MODAL } from "@/utils/animations/modal/modal_animation";

const ArrowLeft = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

interface MonsterModalProps {
  isOpen: boolean;
  onClose: () => void;
  monsters: MonsterData[];
  initialIndex: number;
}

export default function MonsterModal({
  isOpen,
  onClose,
  monsters,
  initialIndex,
}: MonsterModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isScrolling = useRef(false);

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const handleNext = () => {
    if (currentIndex < monsters.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleBack = () => {
    onClose();
  }

  useEffect(() => {
    if (!isOpen) return;

    if (isOpen) {
      history.pushState({ modal: true }, "");
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    const handlePopState = () => {
      if (isOpen) handleBack();
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) > 30 || Math.abs(e.deltaX) > 30) {

        isScrolling.current = true;

        if (e.deltaY > 0 || e.deltaX > 0) handleNext();
        else handlePrev();

        setTimeout(() => (isScrolling.current = false), 600);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("popstate", handlePopState)
    };
  }, [isOpen, currentIndex]);

  const currentMonster = monsters[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex justify-center items-center overflow-hidden">

          <motion.div
            variants={ANIM_VARIANTS_MODAL.modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/90"
          />

          <motion.div
            variants={ANIM_VARIANTS_MODAL.cardModal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`
              relative flex flex-col bg-[#1a1428] text-white 
              w-full h-full sm:w-[550px] sm:h-auto sm:max-h-[95vh] 
              sm:rounded-2xl sm:border-2 sm:border-[#c9a227] 
              shadow-2xl z-[1000] overflow-hidden
            `}
          >

            <div className="pt-14 pb-4 text-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  variants={ANIM_VARIANTS_MODAL.cardTitleModal}
                  key={currentMonster.name}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-3xl sm:text-4xl font-black uppercase tracking-widest italic text-[#c9a227]"
                >
                  {currentMonster.name}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div
              className="relative flex-1 sm:h-[350px] min-h-[300px] flex items-center justify-center bg-black/40"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                perspective: "1200px"
              }}
            >
              <button
                onClick={handlePrev}
                className={`absolute left-4 z-[1100] p-3 text-[#c9a227] hover:scale-125 transition-all active:scale-90 ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"}`}
              >
                <ArrowLeft />
              </button>

              <button
                onClick={handleNext}
                className={`absolute right-4 z-[1100] p-3 text-[#c9a227] hover:scale-125 transition-all active:scale-90 ${currentIndex === monsters.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"}`}
              >
                <ArrowRight />
              </button>

              <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                {monsters.map((monster, idx) => {
                  const offset = idx - currentIndex;
                  if (Math.abs(offset) > 1) return null;

                  return (
                    <motion.div
                      variants={ANIM_VARIANTS_MODAL.offsetCardModal}
                      custom={offset}
                      key={idx}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute"
                    >
                      <div style={{ marginLeft: `${monster.marginLeftModal}rem` }} className={offset !== 0 ? "blur-sm" : ""}>
                        <SpriteAnimator {...monster} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="p-8 bg-[#130f1d] border-t border-[#c9a227]/20 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  variants={ANIM_VARIANTS_MODAL.descCardModal}
                  key={currentIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center w-full"
                >
                  <p className="text-gray-400 text-center text-sm sm:text-base italic mb-8 min-h-[50px] max-w-md">
                    "{currentMonster.description}"
                  </p>

                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    <StatBadge label="ATAQUE" value={currentMonster.valueAtk} color="text-red-500" />
                    <StatBadge label="VIDA" value={currentMonster.valueLife} color="text-blue-500" />
                    <StatBadge label="VELOCIDADE" value={currentMonster.valueSpe} color="text-green-500" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={onClose}
              className="w-full py-6 bg-[#c9a227] text-black font-black uppercase tracking-[0.2em] hover:bg-[#e0b52d] transition-colors mt-auto sm:mt-0"
            >
              Voltar ao Jogo
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function StatBadge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-black/60 p-3 rounded-lg border border-[#c9a227]/20 flex flex-col items-center shadow-lg">
      <span className="text-[10px] text-gray-500 font-bold mb-1 tracking-wider">{label}</span>
      <span className={`text-xl font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}