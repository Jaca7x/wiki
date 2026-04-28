import LinkedIn from "@/assets/svg/LinkedIn.svg"
import Github from "@/assets/svg/Github.svg"

export default function Social() {
    return (
        <main className="h-screen min-h-screen bg-linear-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white flex items-center justify-center p-6">
            <div className="w-full max-w-lg group">
                <div className="bg-[#1a162e] border-2 border-[#3B354F] border-b-0 rounded-t-2xl px-6 py-3 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3B354F] group-hover:bg-red-500/50 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3B354F] group-hover:bg-yellow-500/50 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3B354F] group-hover:bg-green-500/50 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-[#565f89] uppercase tracking-[0.2em]">Comm_Protocol_v1</span>
                </div>

                <div className="bg-[#161326] border-2 border-[#3B354F] rounded-b-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-[#FACC15]/30">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FACC15]/5 blur-[80px] rounded-full group-hover:bg-[#FACC15]/10 transition-all" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h1 className="uppercase font-mono font-black text-xl md:text-2xl text-[#FACC15] tracking-[0.3em] mb-6">
                            Social
                        </h1>

                        <div className="w-12 h-px bg-linear-to-r from-transparent via-[#3B354F] to-transparent mb-8" />

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mb-10">
                            Caso queira acompanhar minha evolução no mundo Tech, conecte-se comigo pelos botões abaixo!
                        </p>
                    </div>
                    <div className="flex justify-center gap-10 ">
                        <a href="https://www.linkedin.com/in/miguel-ed-costa/" target="_blank" className="group relative flex items-center justify-center w-14 h-14 bg-[#1a162e] border-2 border-[#3B354F] rounded-xl transition-all duration-500 hover:border-[#FACC15] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 hover:scale-120">
                            <img src={LinkedIn} alt="" className="" />
                        </a>
                        <a href="https://github.com/Jaca7x" target="_blank" className="group relative flex items-center justify-center w-14 h-14 bg-[#1a162e] border-2 border-[#3B354F] rounded-xl transition-all duration-500 hover:border-[#FACC15] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 hover:scale-120">
                            <img src={Github} alt="" className="" />
                        </a>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-mono text-[#565f89] uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Sistema Online
                    </span>
                    <span className="opacity-30">|</span>
                    <span>Conexão criptografada</span>
                </div>
            </div>
        </main>
    );
}