import { useLocation, Link } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isMonsters = location.pathname === "/monsters";

  return (
    <header
      className={"fixed top-0 w-full z-50 py-6 transition-all duration-300 bg-[linear-gradient(to_bottom,rgba(15,12,26,0.9),rgba(26,20,40,0.85),rgba(43,29,58,0.8))]"}
    >
      <nav className="flex justify-center">
        <ol className="flex gap-8 text-gray-300 tracking-wider text-sm">

          <li>
            <Link
              to="/"
              className={`hover:text-[#c9a227] transition-colors duration-300 ${
                isHome ? "text-[#c9a227]" : ""
              }`}
            >
              Início
            </Link>
          </li>

          <li>
            <Link
              to="/personagens"
              className="hover:text-[#c9a227] transition-colors duration-300"
            >
              Personagens
            </Link>
          </li>

          <li>
            <Link
              to="/historia"
              className="hover:text-[#c9a227] transition-colors duration-300"
            >
              História
            </Link>
          </li>

          <li>
            <Link
              to="/monsters"
              className={`hover:text-[#c9a227] transition-colors duration-300 ${
                isMonsters ? "text-[#c9a227]" : ""
              }`}
            >
              Monstros
            </Link>
          </li>

        </ol>
      </nav>
    </header>
  );
}