import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "@/data/technologiesData";
import { ANIM_VARIANTS_TECHNOLOGIES_CARD } from "@/utils/animations/technolgies_card/card";

export default function StackCards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const currentTech = technologies[currentIndex];
    const totalCards = technologies.length;

    const nextCard = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
    };

    const prevCard = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    return (
        <div className="flex items-center justify-center min-h-175 p-4 md:my-20 my-30 overflow-hidden">

            <div className="relative w-full max-w-4xl">

                <motion.button
                    onClick={prevCard}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${currentTech.color}66` }}
                    whileTap={{ scale: 0.9 }}
                    style={{ borderColor: `${currentTech.color}33`, color: currentTech.color }}
                    className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E1B29] border cursor-pointer outline-none focus:outline-none select-none"
                >
                    <span className="text-2xl">❮</span>
                </motion.button>

                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={ANIM_VARIANTS_TECHNOLOGIES_CARD.cardSlide}
                        initial="hidden"
                        animate="animate"
                        exit="exit"
                        transition={{
                            x: {
                                type: "spring", stiffness: 300, damping: 30
                            },
                            opacity: { duration: 0.3 },
                        }}
                        className="relative w-full bg-[#120f1d] grid grid-cols-1 md:grid-cols-2 rounded-2xl border shadow-[0_0_50px_rgba(0,0,0,1)] overflow-visible"
                        style={{ borderColor: `${currentTech.color}44` }}
                    >

                        <div style={{ borderColor: currentTech.color }} className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl z-40 opacity-50" />
                        <div style={{ borderColor: currentTech.color }} className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl z-40 opacity-50" />
                        <div style={{ borderColor: currentTech.color }} className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 rounded-bl-2xl z-40 opacity-50" />
                        <div style={{ borderColor: currentTech.color }} className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl z-40 opacity-50" />

                        <div className="col-span-1 md:col-span-2 relative">
                            <h1 style={{ color: currentTech.color }} className="text-center text-xl md:text-3xl py-6 font-black tracking-[0.4em] uppercase drop-shadow-md">
                                {currentTech.title}
                            </h1>
                            <div className="h-px w-full bg-linear-to-r from-transparent via-[#3B354F] to-transparent" />
                        </div>

                        <div className="relative flex items-center justify-center p-8 md:p-16 min-h-75">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute w-40 h-40 blur-[80px] rounded-full"
                                style={{ backgroundColor: currentTech.color }}
                            />
                            <motion.img
                                src={currentTech.image}
                                animate={{ y: [0, -25, 0], rotateZ: [0, 2, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-36 h-36 md:w-56 md:h-56 object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 md:p-12 relative">
                            <div className="hidden md:block absolute left-0 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-[#3B354F] to-transparent" />

                            <div className="relative">
                                <span style={{ color: `${currentTech.color}30` }} className="absolute -top-6 -left-4 text-6xl font-serif select-none italic">“</span>
                                <p className="relative z-10 leading-relaxed text-sm md:text-lg text-[#cbd5e1] text-center font-medium">
                                    {currentTech.desc.split("'").map((part, i) =>
                                        i % 2 === 1 ? (
                                            <span key={i} style={{ color: currentTech.color }} className="font-bold">{part}</span>
                                        ) : part
                                    )}
                                </p>
                                <span style={{ color: `${currentTech.color}30` }} className="absolute -bottom-10 -right-4 text-6xl font-serif select-none italic">”</span>
                            </div>

                            <div style={{ borderColor: `${currentTech.color}60`, backgroundColor: `${currentTech.color}15`, color: currentTech.color }} className="mt-8 px-4 py-1 rounded-full border text-[10px] uppercase tracking-widest font-bold">
                                {currentTech.tag}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <motion.button
                    onClick={nextCard}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${currentTech.color}66` }}
                    whileTap={{ scale: 0.9 }}
                    style={{ borderColor: `${currentTech.color}33`, color: currentTech.color }}
                    className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E1B29] border cursor-pointer outline-none focus:outline-none select-none"
                >
                    <span className="text-2xl">❯</span>
                </motion.button>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-5">
                    {technologies.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-2.5 w-2.5 rotate-45 transition-all duration-500 border-2 outline-none focus:outline-none ${currentIndex === index ? 'scale-125' : 'opacity-30'
                                }`}
                            style={{
                                borderColor: currentTech.color,
                                backgroundColor: currentIndex === index ? currentTech.color : 'transparent',
                                boxShadow: currentIndex === index ? `0 0 15px ${currentTech.color}` : 'none'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}