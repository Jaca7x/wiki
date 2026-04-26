import SpriteAnimator from "@/components/ui/SpriteAnimator";
import { motion, AnimatePresence } from "framer-motion";
import background from "@/assets/imgs/backgrounds/background-main.png";
import { useEffect, useState, useRef, useCallback } from "react";
import type { MonsterData } from "@/data/monster";
import { ANIM_VARIANTS_MODAL } from "@/utils/animations/modal/modal_animation";
import type { AnimVariantsModalProps } from "@/utils/animations/modal/modal_animation"
import { createPortal } from "react-dom";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < monsters.length - 1 ? prev + 1 : prev));
  }, [monsters.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    history.pushState({ modal: true }, "");

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    const handlePopState = () => onClose();

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) > 30) {
        isScrolling.current = true;
        if (e.deltaY > 0) handleNext();
        else handlePrev();
        setTimeout(() => (isScrolling.current = false), 600);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  const currentMonster = monsters[currentIndex];

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <Dialog static open={isOpen} onClose={onClose} className="relative z-999">
          <motion.div
            variants={ANIM_VARIANTS_MODAL.modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 backdrop-blur-sm"
          />

          <div className="fixed inset-0 flex items-center justify-center sm:p-4 overflow-hidden">
            <DialogPanel
              as={motion.div}
              variants={ANIM_VARIANTS_MODAL.cardModal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative flex flex-col bg-[#1a1428] text-white w-full h-full sm:h-auto sm:max-h-[95vh] sm:w-137.5 rounded-none sm:rounded-3xl  sm:border-2 sm:border-[#c9a227] shadow-2xl outline-none"
            >

              <div className="flex-none pt-8 sm:pt-6 pb-4 text-center bg-linear-to-b from-black/20 to-transparent  ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMonster.name}
                    variants={ANIM_VARIANTS_MODAL.cardTextsModal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <DialogTitle as="h2" className="text-3xl sm:text-4xl font-black uppercase -tracking-widest italic text-[#c9a227]">
                      {currentMonster.name}
                    </DialogTitle>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="flex-none relative h-64 sm:h-80 flex items-center justify-center bg-black/40 border-y border-[#c9a227]/10"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  perspective: "1200px"
                }}
              >
                <button
                  onClick={handlePrev}
                  className={`absolute left-2 sm:left-4 z-1100 p-2 text-[#c9a227] hover:scale-110 transition-all focus:border-2 focus:border-[#c9a227] rounded-full ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"}`}
                >
                  <ArrowLeft />
                </button>

                <button
                  onClick={handleNext}
                  className={`absolute right-2 sm:right-4 z-1100 p-2 text-[#c9a227] hover:scale-110 transition-all focus:border-2 focus:border-[#c9a227] rounded-full ${currentIndex === monsters.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"}`}
                >
                  <ArrowRight />
                </button>

                <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                  {monsters.map((monster, idx) => {
                    const offsetValue = idx - currentIndex;
                    if (Math.abs(offsetValue) > 1) return null;
                    return (
                      <motion.div
                        variants={ANIM_VARIANTS_MODAL.offsetCardModal}
                        custom={{ offset: offsetValue } as AnimVariantsModalProps}
                        key={idx}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute"
                      >
                        <div style={{ marginLeft: `${monster.marginLeftModal}rem` }} className={offsetValue !== 0 ? "blur-md scale-75 opacity-50" : ""}>
                          <SpriteAnimator {...monster} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#130f1d] p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={ANIM_VARIANTS_MODAL.cardTextsModal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center w-full"
                  >
                    <p className="text-gray-400 text-center text-sm sm:text-base italic mb-8 max-w-md leading-relaxed">
                      "{currentMonster.description}"
                    </p>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                      <StatBadge label="ATAQUE" value={currentMonster.valueAtk} color="text-red-500" />
                      <StatBadge label="VIDA" value={currentMonster.valueLife} color="text-blue-400" />
                      <StatBadge label="VELOCIDADE" value={currentMonster.valueSpe} color="text-green-500" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex-none p-4 sm:p-0">
                <button
                  onClick={onClose}
                  className="w-full py-5 sm:py-6 bg-[#c9a227] text-black font-black uppercase tracking-[0.2em] hover:bg-[#e0b52d] transition-colors cursor-pointer focus:border-3 focus:border-white focus:rounded-lg sm:rounded-b-2xl "
                >
                  Voltar ao Jogo
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>,
    document.body
  );
}

function StatBadge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-black/40 p-2 sm:p-3 rounded-xl border border-[#c9a227]/10 flex flex-col items-center shadow-inner">
      <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold mb-1 tracking-tighter sm:tracking-normal">{label}</span>
      <span className={`text-lg sm:text-xl font-mono font-black ${color}`}>{value}</span>
    </div>
  );
}