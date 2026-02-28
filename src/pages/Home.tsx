import logo from "../assets/icon.png";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a]">
      
      <header className="flex justify-between items-center px-10 py-4">
        
        <img src={logo} alt="icone" className="h-20" />

        <nav>
          <ol className="flex gap-8 text-gray-300 text-sm tracking-wider">
            <li className="hover:text-[#c9a227] transition-colors duration-300 cursor-pointer">
              Início
            </li>
            <li className="hover:text-[#c9a227] transition-colors duration-300 cursor-pointer">
              Personagens
            </li>
            <li className="hover:text-[#c9a227] transition-colors duration-300 cursor-pointer">
              História
            </li>
          </ol>
        </nav>

      </header>

    </div>
  );
}