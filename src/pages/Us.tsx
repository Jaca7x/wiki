export default function Us() {
    return (
        <section className="min-h-screen bg-[#0d0b16] flex justify-center items-center p-6">

            <div className="relative max-w-5xl w-full bg-[#120f1d] border-2 border-[#3B354F] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group hover:border-[#FACC15]/50 transition-all duration-500">

                <div className="bg-[#161326] px-6 py-3 border-b-2 border-[#3B354F] flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF605C]/20 border border-[#FF605C]/40" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD44]/20 border border-[#FFBD44]/40" />
                        <div className="w-3 h-3 rounded-full bg-[#00CA4E]/20 border border-[#00CA4E]/40" />
                    </div>
                    <span className="text-[10px] font-mono text-[#565f89] uppercase tracking-[0.3em]">Project_Log // v1.0</span>
                </div>

                <div className="p-8 md:p-16 flex md:flex-row gap-10 items-center">

                    <div className="flex-1 space-y-6">
                        <h1 className="text-[#FACC15] font-mono text-xs uppercase tracking-[0.4em]">
                            // Sobre_o_Projeto
                        </h1>

                        <div className="relative text-center">
                            <span className="absolute -top-4 -left-6 text-6xl text-[#3B354F] font-serif opacity-50 select-none">“</span>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic relative z-10">
                                Esta wiki nasceu como um projeto para documentar e compartilhar a arquitetura do meu jogo,
                                funcionando como minha <span className="text-white font-bold">porta de entrada</span> para o desenvolvimento web.
                                É o registro de um aprendizado que une a performance do C com a versatilidade do React.
                            </p>
                            <span className="absolute -right-4 text-6xl text-[#3B354F] font-serif opacity-50 select-none">”</span>
                        </div>

                        <div className="pt-4 flex items-center gap-4">
                            <div className="h-px flex-1 bg-linear-to-r from-[#3B354F] to-transparent" />
                            <span className="text-[10px] font-mono text-[#565f89] uppercase tracking-widest">End_of_Transmission</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}