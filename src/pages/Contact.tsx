import { useState } from "react";

export default function Contact() {
    const email = "miguel7cos@gmail.com";
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopy(true);
                setTimeout(() => setCopy(false), 2000);
            })
    }

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
                            Entre em Contato
                        </h1>

                        <div className="w-12 h-px bg-linear-to-r from-transparent via-[#3B354F] to-transparent mb-8" />

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mb-10">
                            "Para futuras melhorias ou ideias, entre em contato via e-mail! Sua sugestão é fundamental para a evolução do Knight's Quest."
                        </p>

                        <div className="w-full relative group/input">
                            <div className="w-full bg-[#0d0b16] border border-[#3B354F] rounded-xl px-6 py-4 font-mono text-sm text-gray-300 flex items-center justify-between group-hover/input:border-[#FACC15]/50 transition-all">
                                <span className="truncate mr-4">{email}</span>

                                <button
                                    tabIndex={0}
                                    onClick={handleCopy}
                                    className="bg-[#3B354F]/50 hover:bg-[#FACC15] hover:text-black p-2 rounded-lg transition-all duration-300 cursor-pointer active:scale-95 focus:border focus:border-[#FACC15]"
                                    title="Copiar E-mail"
                                >
                                    {copy ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                    )}
                                </button>
                            </div>

                            <span className="text-[9px] font-mono text-[#565f89] uppercase mt-3 block tracking-widest opacity-0 group-hover/input:opacity-100 transition-opacity">
                                Clique no ícone para copiar o endereço
                            </span>
                        </div>
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