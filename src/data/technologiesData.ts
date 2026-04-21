import c_logo from "@/features/technologies/assets/imgs/stacks_icon/c.png";
import raylib_logo from "@/features/technologies/assets/imgs/stacks_icon/raylib.png";
import raymath_logo from "@/features/technologies/assets/imgs/stacks_icon/raymath.png";
import json_logo from "@/features/technologies/assets/imgs/stacks_icon/json.png";
import makefile_logo from "@/features/technologies/assets/imgs/stacks_icon/makefile.png";
import tiled_logo from "@/features/technologies/assets/imgs/stacks_icon/tiled.png";

export interface TechnologiesData {
  id: number;
  title: string;
  image: string;
  desc: string;
  tag: string;
  color: string;
  glowColor: string;
}

export const technologies: TechnologiesData[] = [
  {
    id: 1,
    title: "Linguagem C",
    image: c_logo,
    desc: "A base absoluta. Toda a 'lógica do reino' e o 'gerenciamento de memória' foram forjados puramente em C, garantindo a 'performance bruta' necessária para uma jornada épica e um controle total sobre cada pixel do sistema.",
    tag: "CORE SYSTEM ENGINE",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    id: 2,
    title: "Biblioteca Raylib",
    image: raylib_logo,
    tag: "GRAPHICS & MEDIA LAYER",
    desc: "O motor visual do projeto. Através da 'Raylib', dei vida aos sprites e cenários, gerenciando 'inputs' e 'renderização' acelerada por hardware para transformar linhas de código em um mundo 'vibrante' e interativo",
    color: "#ffffff",
    glowColor: "#ffffff",
  },
  {
    id: 3,
    title: "Biblioteca Raymath",
    image: raymath_logo,
    tag: "MATHEMATICS MODULE",
    desc: "A biblioteca de 'matéria de baixo nível' que lida com vetores, matrizes e quaternions para o motor do jogo.",
    color: "#F472B6",
    glowColor: "#F472B6",
  },
  {
    id: 4,
    title: "MAKEFILES",
    image: makefile_logo,
    tag: "BUILD INFRASTRUCTURE",
    desc: "O 'Mestre da Forja'. Através de scripts de automação, o GNU Make padroniza a compilação de todo o reino, garantindo que cada peça de código seja 'unida' com precisão absoluta.",
    color: "#BE123C",
    glowColor: "#BE123C",
  },
  {
    id: 5,
    title: "TILED MAP EDITOR",
    image: tiled_logo,
    tag: "WORLD DESIGN INTERFACE",
    desc: "O grande cartógrafo do reino. Através do 'Tiled', projetei cada 'sala' e 'bioma' de 'Knights Quest'. Esta ferramenta permitiu a criação de 'layouts complexos', transformando tiles simples em um mundo vasto e 'explorável'.",
    color: "#38bdf8",
    glowColor: "#38bdf8",
  },
  {
    id: 6,
    title: "JSON & CJSON",
    image: json_logo,
    tag: "DATA SERIALIZATION LAYER",
    desc: "Utilizado para a estruturação e armazenamento dos 'mapas do jogo'. Através da biblioteca 'CJSON', o motor realiza o parsing de arquivos externos, permitindo uma edição ágil dos níveis sem a necessidade de recompilar o código fonte.",
    color: "#f59e0b",
    glowColor: "#f59e0b",
  },
];
