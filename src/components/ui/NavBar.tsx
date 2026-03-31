import { useLocation, Link } from "react-router-dom";
import logo from "@/assets/imgs/icon/icon_helmet.png";
import { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const isHome = pathname === "/";

  const getNavLinks = () => {
    if (isHome) {
      return [
        { name: "Bestiário", path: "/monsters" },
        { name: "Tecnologias", path: "/technologies" },
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
    if (pathname.startsWith("/technologies")) {
      return [
        { name: "Stack", path: "/technologies#stack" },
        { name: "Arquitetura", path: "/technologies#architecture" },
        { name: "Conceitos", path: "/monsters#concepts" },
        { name: "Sistemas", path: "/monsters#systems" }
      ];
    }
    return [{ name: "Início", path: "/" }];
  };

  const navLinks = getNavLinks();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">


      <div className={`
        hidden md:flex justify-center transition-all duration-500 pointer-events-auto
        ${scrolled ? "mt-4" : "mt-8"}
      `}>
        <nav className="relative group">

          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative flex items-center bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-2xl">


            <Link
              to="/"
              className="flex items-center justify-center ml-2 mr-6 transition-all group/logo"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-auto object-contain group-hover/logo:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
              />
            </Link>

            <div className="w-[1px] h-4 bg-white/10 mr-2"></div>

            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {

                const isActive = pathname === link.path || window.location.hash === link.path.split('#')[1];

                return (
                  <li key={link.path} className="relative">
                    <Link
                      to={link.path}
                      className={`
                        relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300
                        ${isActive ? "text-blue-400" : "text-gray-400 hover:text-white"}
                      `}
                    >
                      {link.name}
                    </Link>

                    {isActive && (
                      <div className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full z-0"></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      <div className={`
        md:hidden flex items-center justify-between px-6 transition-all duration-500 pointer-events-auto
        ${scrolled ? "py-3 bg-[#0a0a0f]/95 border-b border-white/5 backdrop-blur-md" : "py-5 bg-transparent"}
      `}>
        <Link to="/" className="group">
          <img src={logo} alt="Logo" className="h-20 w-auto group-active:scale-90 transition-transform" />
        </Link>

        <div className="flex items-center gap-3">
          <HamburgerMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}