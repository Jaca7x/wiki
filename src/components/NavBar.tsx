import { useLocation, Link } from "react-router-dom";
import logo from "../assets/imgs/icon/icon.png";

export default function NavBar() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const getNavLinks = () => {
    if (isHome) {
      return [
        { name: "Monstros", path: "/monsters" },
        { name: "Ferramentas", path: "/tools" },
        { name: "Sobre", path: "/us" },
      ];
    }
    if (pathname.startsWith("/monsters")) {
      return [
        { name: "Goblins", path: "/monsters#goblins" },
        { name: "Wolf", path: "/monsters#wolfs" },
        { name: "Boss", path: "/monsters/boss" },
      ];
    }
    return [{ name: "Início", path: "/" }];
  };

  const navLinks = getNavLinks();

  return (
    <header
      className={`
        sticky top-0 w-full z-50 transition-all duration-300
        ${isHome ? "py-10" : "py-6"} 
        bg-[linear-gradient(to_bottom,rgba(15,12,26,0.95),rgba(26,20,40,0.9),rgba(43,29,58,0.85))]
      `}
    >
      <nav className="relative flex items-center max-w-7xl mx-auto px-10">

        {!isHome && (
          <Link to="/" className="flex items-center z-10">
            <img
              src={logo}
              alt="Logo do jogo"
              className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        )}

        <ol className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-gray-300 tracking-widest text-sm font-medium uppercase">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative group transition-all duration-300 
                   hover:text-white 
                   hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.5)]"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[1.5px] bg-[#c9a227] 
                         w-0 transition-all duration-300 
                         group-hover:w-full 
                         shadow-[0_0_10px_#c9a227]">
                </span>
              </Link>
            </li>
          ))}
        </ol>

      </nav>
    </header>
  );
}