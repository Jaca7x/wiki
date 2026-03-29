import src_file from "@/features/technologies/assets/imgs/icons-files/folder-src.svg";
import c_file from "@/features/technologies/assets/imgs/icons-files/c.svg";
import makefiles_file from "@/features/technologies/assets/imgs/icons-files/makefile.svg";
import lib_file from "@/features/technologies/assets/imgs/icons-files/folder-lib.svg";
import assets_file from "@/features/technologies/assets/imgs/icons-files/folder-resource.svg";

import src_open_file from "@/features/technologies/assets/imgs/icons-files/folder-src-open.svg";
import lib_open_file from "@/features/technologies/assets/imgs/icons-files/folder-lib-open.svg";
import assets_open_file from "@/features/technologies/assets/imgs/icons-files/folder-resource-open.svg";

export interface FolderData {
  id: number;
  name: string;
  icon: string;
  openIcon: string;
  desc: string;
  snippets: Array<{ code: string; title: string }>;
}

export const folders: FolderData[] = [
  {
    id: 1,
    name: "main.c",
    icon: c_file,
    openIcon: c_file,
    desc: "O arquivo 'main.c' atua como o núcleo do projeto, sendo o ponto central de execução do 'Game Loop'. Sua função principal é orquestrar o fluxo da aplicação, garantindo que a lógica não fique centralizada em um único bloco, mas sim distribuída em módulos especializados. Durante a 'Inicialização', o sistema configura o contexto gráfico, o áudio e processa arquivos 'JSON' para carregar os mapas e entidades. A arquitetura segue o padrão de separação de responsabilidades, dividindo o ciclo de vida do jogo em quatro pilares: 'Init' (configuração de sistemas), 'Load' (carregamento de assets), 'Update' (processamento de física e IA) e 'Draw' (renderização visual). Com essa estrutura, o 'main.c' funciona como um coordenador de fluxo, mantendo o projeto modular, organizado e de fácil manutenção.",
    snippets: [
      {
        title: "Estrutura do Game Loop Principal",
        code: `// Função que carrega tudo do game enquanto a janela estiver aberta\n while (!WindowShouldClose()) {\n  UpdateMusicStream(menuMusic);\n  UpdateMusicStream(soundTrack);\n}`,
      },
      {
        title: "Inicialização e Alocação do Player",
        code: `Player player;\n InitPlayer(&player); // <- Acessando função InitPlayer dentro do arquivo player.c`,
      },
      {
        title: "Draw + Update",
        code: `UpdatePlayer(&player, &wolf, &runningWolf, &redWolf...) // <- função que atualiza o player\n DrawPlayer(&player); // <- função para desenhar o player`,
      },
      {
        title: "Lógica de Atualização (Update)",
        code: `UpdateStaminaBar(&player, delta);\n UpdateNpc(&npc, delta, &player...) // <- interações com o npc`,
      },
    ],
  },
  {
    id: 2,
    name: "src",
    icon: src_file,
    openIcon: src_open_file,
    desc: "",
    snippets: [],
  },
  {
    id: 3,
    name: "Makefiles",
    icon: makefiles_file,
    openIcon: makefiles_file,
    desc: "",
    snippets: [],
  },
  {
    id: 4,
    name: "lib",
    icon: lib_file,
    openIcon: lib_open_file,
    desc: "",
    snippets: [],
  },
  {
    id: 5,
    name: "assets",
    icon: assets_file,
    openIcon: assets_open_file,
    desc: "teste",
    snippets: [],
  },
];
