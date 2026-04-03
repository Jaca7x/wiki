import { gameSystems } from "@/data/gameSystemsData";

export default function GameSystems() {
    return (
        <section className="py-20 px-4 bg-[#120f1d] flex justify-center">
            {/* GRID: Mantive o 2 colunas no MD e 1 no mobile */}
            <div className="grid md:grid-cols-2 grid-cols-1 max-w-5xl w-full gap-10">

                {gameSystems.map((system) => (
                    <div
                        key={system.id}
                        className="group flex flex-col h-full bg-[#0d0b16] border-2 border-[#3B354F] rounded-2xl overflow-hidden hover:border-[#FACC15]/60 transition-all duration-500 hover:-translate-y-1 shadow-2xl"
                    >
                        {/* HEADER DO CARD */}
                        <div className="bg-[#161326] py-4 border-b-2 border-[#3B354F] group-hover:border-[#FACC15]/60 transition-colors duration-500 flex items-center justify-center">
                            <h1 className="uppercase text-[#FACC15] font-mono font-bold md:text-lg text-base tracking-[0.2em] px-4 text-center">
                                {system.title}
                            </h1>
                        </div>

                        {/* ÁREA DA IMAGEM / GIF: Altura fixa para manter o alinhamento do grid */}
                        <div className="flex-1 flex items-center justify-center bg-black/20 p-6 min-h-[250px] md:min-h-[300px]">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={system.gif}
                                    alt={system.title}
                                    className="max-w-full max-h-full object-contain rounded-lg border-2 border-[#3B354F] group-hover:border-[#FACC15]/40 transition-all duration-500 md:opacity-70 group-hover:opacity-100 group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>

                        {/* DICA DE CLIQUE (RODAPÉ) */}
                        <div className="py-3 text-center bg-[#161326] border-t-2 border-[#3B354F] group-hover:border-[#FACC15]/60 transition-all duration-500">
                            <span className="text-xs md:text-sm font-mono text-[#FACC15] tracking-[0.15em] font-bold">
                                EXPLORAR IMPLEMENTAÇÃO EM C
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}