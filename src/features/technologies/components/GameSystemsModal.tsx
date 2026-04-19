import { type GameSystemsData } from "@/data/gameSystemsData";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_MODAL } from "@/utils/animations/modal/modal_animation";

interface Props {
    data: GameSystemsData;
    onClose: () => void;
}

export default function GameSystemsModal({ data, onClose }: Props) {
    return createPortal(
        <motion.div
            variants={ANIM_VARIANTS_MODAL.modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-999 flex justify-center items-center p-4 bg-black/90 pointer-events-auto "
        >
            <motion.div
                variants={ANIM_VARIANTS_MODAL.cardModal}
                className="relative bg-[#120f1d] border-2 border-[#3B354F] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col "
            >
                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">

                    <div className="bg-[#161326] p-6 border-b-2 border-[#3B354F] ">
                        <span className="text-[#FACC15] font-mono text-[10px] tracking-[0.3em] uppercase mb-1 block">
                            System Documentation
                        </span>
                        <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                            {data.title}
                        </h1>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                        <div className="bg-black/40 rounded-2xl border border-[#3B354F] overflow-hidden p-2">
                            <img
                                src={data.gif}
                                alt={data.title}
                                className="w-full h-auto rounded-xl object-contain"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#FACC15] font-mono text-xs uppercase tracking-widest">
                                // Descrição do Funcionamento
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base italic">
                                {data.desc.split("'").map((part, i) =>
                                    i % 2 === 1 ? (
                                        <span key={i} style={{ color: "#FACC15" }}>
                                            {part}
                                        </span>
                                    ) : part
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-[#0d0b16] border-t border-[#3B354F] flex justify-center">
                        <button
                            onClick={onClose}
                            className="text-[#565f89] hover:text-[#FACC15] text-[10px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                        >
                            Sair do Módulo
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div >,
        document.body
    );
}