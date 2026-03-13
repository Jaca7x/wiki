import { useLocation, Link } from "react-router-dom";
import logo from "../assets/imgs/icon/icon.png";
import { useState, useEffect } from "react";

export default function NavBar() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [olVisible, setOlVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setVisible(true);
    }, 200);

    const fadeInOlTimer = setTimeout(() => {
      setOlVisible(true);
    }, 350);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeInOlTimer);
    };
  }, []);

  const isHome = pathname === "/";

  const getNavLinks = () => {
    if (isHome) {
      return [
        { name: "Bestiário", path: "/monsters" },
        { name: "Ferramentas", path: "/tools" },
        { name: "Sobre", path: "/us" },
      ];
    }
    if (pathname.startsWith("/monsters")) {
      return [
        { name: "Goblins", path: "/monsters#goblins" },
        { name: "Wolf", path: "/monsters#wolfs" },
        { name: "Boss", path: "/monsters#boss" },
        { name: "Npcs", path: "/monsters#npcs" }
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
        transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <nav className="relative flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {!isHome && (
          <Link to="/" className="flex items-center z-10">
            <img
              src={logo}
              alt="Logo do jogo"
              className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        )}

        <ol
        className={`
        flex
        ${isHome ? "flex-row flex-nowrap" : "flex-row flex-wrap"}
        justify-center
        gap-4 sm:gap-6 md:gap-8
        text-xs sm:text-sm
        text-gray-300 tracking-widest font-medium uppercase
        absolute left-1/2 -translate-x-1/2
        `}>

          {navLinks.map((link, index) => (
            <li
              key={link.path}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`
              transition-all duration-500
              ${olVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}> 
                <Link
                to={link.path}
                className="relative group hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.5)]"
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