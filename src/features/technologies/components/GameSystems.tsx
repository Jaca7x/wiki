import { gameSystems, type GameSystemsData } from "@/data/gameSystemsData";
import GameSystemsModal from "@/features/technologies/components/GameSystemsModal"
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function GameSystems() {
    const [selectSystem, setSelectSystem] = useState<GameSystemsData | null>(null);

    useEffect(() => {
        if (selectSystem) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'unset';
        }
        return () => { document.documentElement.style.overflow = 'unset'; };
    }, [selectSystem]);

    return (
        <section className="py-20 px-4  flex justify-center">
            <div className="grid md:grid-cols-2 grid-cols-1 max-w-5xl w-full gap-10">

                {gameSystems.map((system) => (
                    <div
                        role="button"
                        tabIndex={0}
                        key={system.id}
                        onClick={() => setSelectSystem(system)}
                        className="group flex flex-col h-full bg-[#0d0b16] border-2 border-[#3B354F] rounded-2xl overflow-hidden hover:border-[#FACC15]/60 transition-all duration-500 hover:-translate-y-1 shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FACC15] focus-visible:border-[#FACC15] focus-visible:ring-offset-8 focus-visible:ring-offset-[#FACC15]"
                    >
                        <div className="bg-[#161326] py-4 border-b-2 border-[#3B354F] group-hover:border-[#FACC15]/60 transition-colors duration-500 flex items-center justify-center">
                            <h1 className="uppercase text-[#FACC15] font-mono font-bold md:text-lg text-base tracking-[0.2em] px-4 text-center">
                                {system.title}
                            </h1>
                        </div>

                        <div className="flex-1 flex items-center justify-center bg-black/20 p-6 min-h-62.5 md:min-h-75 " >
                            <div className="relative w-full h-full flex items-center justify-center ">
                                <img
                                    src={system.gif}
                                    alt={system.title}
                                    className="max-w-full max-h-full object-contain rounded-lg border-2 border-[#3B354F] group-hover:border-[#FACC15]/40 transition-all duration-500 md:opacity-70 group-hover:opacity-100 group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>

                        <div className="py-3 text-center bg-[#161326] border-t-2 border-[#3B354F] group-hover:border-[#FACC15]/60 transition-all duration-500">
                            <span className="text-xs md:text-sm font-mono text-[#FACC15] tracking-[0.15em] font-bold">
                                EXPLORAR IMPLEMENTAÇÃO EM C
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectSystem && (<GameSystemsModal data={selectSystem} onClose={() => setSelectSystem(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}