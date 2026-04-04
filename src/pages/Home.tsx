import logo from "@/assets/imgs/icon/icon_game.png";
import background from "@/assets/imgs/backgrounds/background-main.png";
import initialTitle from "@/features/home/assets/imgs/initial-title.png";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0f0c1a] via-[#1a1428] to-[#2b1d3a] text-white">

      <section>
        <div
          className="relative h-screen bg-cover bg-top flex items-center justify-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

          <img
            src={logo}
            alt="Knights Quest"
            className="relative z-10 h-60 md:h-80 drop-shadow-[0_0_40px_rgba(255,200,0,0.4)]"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-12 text-center max-w-2xl px-6">

          <img
            src={initialTitle}
            alt="Initial title"
            className="h-20 md:h-30 object-contain"
          />

          <p className="text-gray-300 text-lg leading-relaxed">
            Este projeto é o resultado de uma jornada de aprendizado no mundo do game development. Desenvolvido como um projeto estudantil, meu objetivo foi aprender os fundamentos do desenvolvimento de jogos, praticar lógica e consolidar meus conhecimentos na linguagem C. Utilizando a biblioteca Raylib, criei um jogo totalmente em C, que explora mecânicas simples, mas com uma identidade visual única. Agora, o código está disponível no meu repositório no GitHub, convidando você a explorar, aprender e se inspirar nessa experiência.
          </p>

          <a
            href="https://github.com/Jaca7x/Knight-s-Quest"
            target="_blank"
            className="
            bg-[#c9a227] text-black
            font-semibold uppercase tracking-wide
            rounded-lg
            shadow-lg
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_15px_rgba(201,162,39,0.7)]
            mt-4 px-8 py-3
            active:scale-95
            mb-10">
            Começar Jornada!
          </a>

        </div>
      </section>

    </div>
  );
}