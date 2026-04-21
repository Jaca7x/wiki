import src_file from "@/features/technologies/assets/imgs/icons_files/folder-src.svg";
import c_file from "@/features/technologies/assets/imgs/icons_files/c.svg";
import makefiles_file from "@/features/technologies/assets/imgs/icons_files/makefile.svg";
import lib_file from "@/features/technologies/assets/imgs/icons_files/folder-lib.svg";
import assets_file from "@/features/technologies/assets/imgs/icons_files/folder-resource.svg";

import src_open_file from "@/features/technologies/assets/imgs/icons_files/folder-src-open.svg";
import lib_open_file from "@/features/technologies/assets/imgs/icons_files/folder-lib-open.svg";
import assets_open_file from "@/features/technologies/assets/imgs/icons_files/folder-resource-open.svg";

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
    desc: "A pasta 'src' é o coração técnico do projeto, onde reside a implementação modular das 'Entidades' através de arquivos '.c' e '.h'. Este diretório gerencia sistemas vitais como a 'Interface de Usuário' (Lifebar e Stamina) e a lógica de 'Desenho' (Render Pipeline) que orquestra o que aparece na tela. Através do arquivo 'define.h', o sistema estabelece 'Defines' e constantes universais, garantindo que todos os módulos falem a mesma língua. É aqui que as regras de negócio do jogo são escritas, separando a 'Lógica de Estado' da representação visual.",
    snippets: [
      {
        title: "Exemplo de defines globais",
        code: `#define GAME_FPS 60 // Fps do jogo.
#define ANIMATION_FPS  10 // Frames de animação p/segundo`,
      },
      {
        title: "Arquivo .h das entidades controlando funções e structs",
        code: `typedef struct boss\n{\n  Entity entity;\n  Monsters base;\n  (...)\n};\n
void InitBoss(Boss *boss);
void UpdateBoss(Boss *boss, Player *player, float delta, bool *bossTriggered);
void DrawBoss(Boss *boss);
void UnloadBoss(Boss *boss);`,
      },
      {
        title: "Função global de desenho e animação via sprites",
        code: `void DrawMonsters(Monsters *monstersint, int rowBase, int offsetHurtY, int offsetDeadY, int offsetAtackY, int offsetWalkY, int offsetIdleY);
void DrawBossAnim(Monsters *monsterint);`,
      },
    ],
  },
  {
    id: 3,
    name: "Makefiles",
    icon: makefiles_file,
    openIcon: makefiles_file,
    desc: "O 'Makefile' foi customizado para eliminar a necessidade de compilação manual de múltiplos arquivos. Implementei uma função 'rwildcard' que mapeia recursivamente todos os arquivos '.c' e '.h' do projeto. Além disso, configurei a integração de 'Icons' via 'windres' para o executável Windows e simplifiquei o fluxo de build para que o gerenciamento de caminhos entre as pastas 'lib' e 'src' seja feito de forma automática e transparente.",
    snippets: [
      {
        title: "Mapeamento Recursivo de Fontes",
        code: "//MAKEFILE\nrwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))\nSRC = $(call rwildcard, ./, *.c, *.h)\nOBJS = $(patsubst %.c,%.o,$(filter %.c,$(SRC)))",
      },
      {
        title: "Integração de Ícone do Jogo",
        code: "//MAKEFILE\nicon.o: icon.rc\n\t$(WINDRES) icon.rc -O coff -o icon.o\n\n$(PROJECT_NAME): $(OBJS) icon.o",
      },
    ],
  },
  {
    id: 4,
    name: "lib",
    icon: lib_file,
    openIcon: lib_open_file,
    desc: "O diretório 'lib' centraliza as dependências externas que compõem a fundação do jogo. Nele residem a 'Raylib' (gráficos/input), 'Raymath' (matemática vetorial) e a 'cJSON'. Esta última é fundamental para a arquitetura do projeto, permitindo que o 'Knight's Quest' seja 'Data-Driven'. Através do parsing de arquivos JSON, o motor consegue carregar dinamicamente camadas de tiles e imagens de fundo, separando completamente o design dos níveis do código-fonte e facilitando a criação de novos cenários.",
    snippets: [
      {
        title: "Integração de Bibliotecas Externas",
        code: '#include "lib/raylib.h"\n#include "lib/raymath.h"\n#include "lib/cJSON.h"',
      },
      {
        title: "Parsing de Mapas (cJSON)",
        code: 'TileMap LoadTileMap(const char *fileName) {\n    // Carregamento do arquivo e parsing inicial\n    char *jsonData = LoadFileText(fileName);\n    cJSON *root = cJSON_Parse(jsonData);\n\n    // Extração de metadados do mapa\n    map.width = cJSON_GetObjectItem(root, "width")->valueint;\n    map.height = cJSON_GetObjectItem(root, "height")->valueint;\n\n    cJSON *layers = cJSON_GetObjectItem(root, "layers");\n    int layerCount = cJSON_GetArraySize(layers);\n\n    for (int l = 0; l < layerCount; l++) {\n        cJSON *layer = cJSON_GetArrayItem(layers, l);\n        const char *type = cJSON_GetObjectItem(layer, "type")->valuestring;\n\n        if (strcmp(type, "tilelayer") == 0) {\n            // Alocação dinâmica e leitura dos IDs dos tiles\n            cJSON *data = cJSON_GetObjectItem(layer, "data");\n            map.data = malloc(sizeof(int) * (map.width * map.height));\n            for (int i = 0; i < total; i++) {\n                map.data[i] = cJSON_GetArrayItem(data, i)->valueint;\n            }\n        }\n    }\n    cJSON_Delete(root);\n    return map;\n}',
      },
    ],
  },
  {
    id: 5,
    name: "assets",
    icon: assets_file,
    openIcon: assets_open_file,
    desc: "O diretório 'assets' atua como o repositório central de recursos multimídia do 'Knights Quest'. Nele, a organização rigorosa de 'Spritesheets', 'SFX', 'Música' e 'Texturas' permite o carregamento dinâmico de 'Assets' em tempo de execução. Esta estrutura separa o conteúdo artístico da lógica de programação, permitindo modificações visuais e sonoras sem a necessidade de recompilar o binário do jogo. A gestão eficiente desses recursos é vital para otimizar o consumo de 'Memória de Vídeo' (VRAM) e garantir a fluidez da experiência do jogador.",
    snippets: [
      {
        title: "Carregamento de Recursos (Raylib)",
        code: '// Inicialização de texturas e sons a partir da pasta assets\nTexture2D knightTex = LoadTexture("assets/resources/sprites/wolf/wolf-attack.png");\nSound deathSnd = LoadSound("assets/resources/sounds/player/death.wav");\nFont mainFont = LoadFont("assets/resources/fonts/font.ttf");',
      },
      {
        title: "Estrutura de Arquivos",
        code: "assets/\n├── doc/     // Imagens do Readme.md\n├── maps/    // Arquivos JSON gerados pelo Tiled\n├── resources/     // Pasta que guarda fonts, imagens do game, músicas, sons, sprites.",
      },
    ],
  },
];
