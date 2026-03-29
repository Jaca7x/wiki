import { type FolderData, folders } from "@/data/architectureData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ArchitectureExplorer() {
    const [activeFolder, setActiveFolder] = useState<FolderData>(folders[0]);
    const [showEditor, setShowEditor] = useState(false);

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row w-full h-[650px] md:h-[600px] max-w-6xl mx-auto my-10 md:my-20 bg-[#120f1d] border-2 border-[#3B354F] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.7)] overflow-hidden">

                <div className={`
                    ${showEditor ? "hidden md:flex" : "flex"} 
                    flex w-full md:w-64 flex-none flex-col border-b md:border-b-0 md:border-r-2 border-[#3B354F] bg-[#0d0b16]/50 py-4 overflow-y-auto
                `}>
                    <ul className="w-full">
                        <li className="text-[10px] font-black mb-4 px-6 text-[#565f89] uppercase tracking-[0.3em]">
                            Source Control
                        </li>
                        <li className="text-xs font-bold mb-3 px-6 text-[#FACC15] flex items-center gap-2">
                            <span className="opacity-50">⌄</span> KNIGHT'S QUEST
                        </li>

                        {folders.map((folder) => (
                            <li key={folder.id}>
                                <button
                                    type="button"
                                    className={`
                                        flex gap-x-3 w-full items-center cursor-pointer px-6 py-2.5 text-sm transition-all duration-300 border-l-2
                                        ${activeFolder.id === folder.id
                                            ? "bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]"
                                            : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
                                        }`}
                                    onClick={() => {
                                        setActiveFolder(folder);
                                        setShowEditor(true);
                                    }}
                                >
                                    <span className={`text-[10px] transition-transform ${activeFolder.id === folder.id ? "rotate-90 text-[#FACC15]" : "opacity-30"}`}>
                                        ❯
                                    </span>
                                    <img
                                        src={activeFolder.id === folder.id ? folder.openIcon : folder.icon}
                                        alt=""
                                        className={`w-5 h-5 ${activeFolder.id === folder.id ? "opacity-100" : "opacity-60"}`}
                                    />
                                    <span className="font-medium tracking-wide">{folder.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`
                    ${!showEditor ? "hidden md:flex" : "flex"} 
                    flex-1 flex flex-col bg-[#120f1d] overflow-hidden
                `}>

                    <div className="flex bg-[#0d0b16] h-10 border-b border-[#3B354F] flex-none">
                        <button
                            onClick={() => setShowEditor(false)}
                            className="md:hidden px-4 text-[#FACC15] text-xl"
                        >
                            ❮
                        </button>

                        <div className="bg-[#120f1d] px-6 flex items-center gap-3 border-t-2 border-[#FACC15] border-r border-[#3B354F] min-w-[150px]">
                            <img src={activeFolder.icon} alt="" className="w-4 h-4" />
                            <span className="text-xs text-[#FACC15] font-mono">
                                {activeFolder.name}
                            </span>
                            <span className="ml-auto text-[10px] text-gray-500 hover:text-red-400 cursor-pointer">✕</span>
                        </div>
                    </div>

                    <div className="flex-1 flex font-mono relative overflow-hidden">

                        <div className="w-12 bg-black/30 flex flex-col items-center py-8 text-[#3B354F] border-r border-[#3B354F]/20 select-none flex-none">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                <span key={num} className="h-6 flex items-center text-[14px] font-mono">
                                    {num}
                                </span>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth p-6 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFolder.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full max-w-4xl mx-auto"
                                >
                                    <span className="text-[#565f89] block mb-4 italic select-none">
                                        {"// Location: ~/knights-quest/" + activeFolder.name}
                                    </span>

                                    <h2 className="text-[#A78BFA] text-lg md:text-xl leading-relaxed italic mb-12">
                                        {activeFolder.desc.split("'").map((part, i) =>
                                            i % 2 === 1 ? (
                                                <span key={i} style={{ color: "#FACC15" }} className="font-bold">
                                                    {part}
                                                </span>
                                            ) : part
                                        )}
                                    </h2>

                                    <div className="space-y-10 pb-10">
                                        {activeFolder.snippets?.map((snippet, index) => (
                                            <div key={index} className="group">

                                                <div className="flex items-center gap-2 mb-0 ml-1">
                                                    <div className="bg-[#1e1a35] px-4 py-1.5 rounded-t-lg border-x border-t border-[#3B354F] flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
                                                        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                                            {snippet.title}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="rounded-xl rounded-tl-none border border-[#3B354F] overflow-hidden shadow-2xl bg-[#0d0b16]">
                                                    <SyntaxHighlighter
                                                        language="cpp"
                                                        style={vscDarkPlus}
                                                        {...({} as any)} // Previne erro de tipos se necessário
                                                        codeTagProps={{
                                                            style: {
                                                                display: 'block',
                                                                width: 'fit-content',
                                                                minWidth: '100%',
                                                                paddingRight: '20px'
                                                            }
                                                        }}
                                                        customStyle={{
                                                            margin: 0,
                                                            padding: '20px',
                                                            backgroundColor: 'transparent',
                                                            fontSize: '13px',
                                                            lineHeight: '1.6',
                                                            overflowX: 'auto', // Ativa scroll horizontal no código
                                                        }}
                                                    >
                                                        {snippet.code}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="h-6 bg-[#0d0b16] border-t border-[#3B354F] flex items-center px-4 justify-between text-[10px] text-[#565f89] flex-none">
                        <div className="flex gap-4">
                            <span className="hidden sm:inline">Master*</span>
                            <span>UTF-8</span>
                            <span>C / Raylib</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse"></span>
                            Ready
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}