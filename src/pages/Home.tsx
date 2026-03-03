import logo from "../assets/icon.png";
import background from "../assets/background-home.png";
import initialTitle from "../assets/initial-title.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white">

      <section className="flex items-center justify-center"></section>
      <div
        className="relative h-[100vh] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <img
          src={logo}
          alt="Knights Quest"
          className="relative z-10 h-60 md:h-80 drop-shadow-[0_0_40px_rgba(255,200,0,0.4)]"
        />
      </div>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-12 text-center max-w-2xl px-6">

          <img
            src={initialTitle}
            alt="Initial title"
            className="h-20 md:h-30 object-contain"
          />

          <p className="text-gray-300 text-lg leading-relaxed">
            Uma jornada épica começa aqui. Prepare-se para explorar reinos,
            enfrentar criaturas lendárias e provar seu valor.
          </p>

          <a className="mt-4 px-8 py-3 bg-[#c9a227] text-black font-semibold rounded-lg 
          hover:scale-105 transition-transform duration-300 shadow-lg mb-10" href="https://github.com/Jaca7x/Knight-s-Quest" target="_blank">
            Começar Aventura
          </a>

        </div>
      </section>

    </div>
  );
}