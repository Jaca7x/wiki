export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">Knight's Quest</h2>
                    <p className="text-sm">© 2026 Knight's Quest. Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-6">
                    {['Sobre', 'Contato', 'Privacidade', 'Social'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="relative group text-gray-400 hover:text-white transition-colors duration-300"
                        >

                            {item}

                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full"></span>

                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}