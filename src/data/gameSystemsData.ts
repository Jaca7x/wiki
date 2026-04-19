import atack from "@/features/technologies/assets/gifs/atack.gif";
import run from "@/features/technologies/assets/gifs/running.gif";
import dialogue from "@/features/technologies/assets/gifs/dialogue.gif";
import jump from "@/features/technologies/assets/gifs/jump.gif";

export interface GameSystemsData {
  id: number;
  title: string;
  gif: string;
  desc: string;
}

export const gameSystems: GameSystemsData[] = [
  {
    id: 1,
    title: "Sistema de ataque",
    gif: atack,
    desc: "Combate modular com variações de ataques 'Leves' e 'Pesados'. A lógica utiliza 'Timers' para controlar a duração das animações e 'Booleans' para gerenciar os estados de ação, garantindo sincronia perfeita entre os frames da 'Sprite' e as janelas de hit.",
  },
  {
    id: 2,
    title: "Sistema de pulo",
    gif: jump,
    desc: "Salto baseado em 'Física Cinemática' com altura proporcional à 'Estamina' atual. Utiliza 'Booleans' para controle de estado em solo ('isGrounded') e aplicação de gravidade constante, integrando o fôlego do cavaleiro diretamente à sua mobilidade.",
  },
  {
    id: 3,
    title: "Sistema de corrida",
    gif: run,
    desc: "Sistema de 'Corrida' que aplica um multiplicador à 'Velocidade Base' do personagem. A lógica utiliza 'Booleans' para transição de estados e integra o consumo de 'Estamina' em tempo real, equilibrando a mobilidade rápida com o gerenciamento de recursos do jogador.",
  },
  {
    id: 4,
    title: "Sistema de diálogo",
    gif: dialogue,
    desc: "Interface de 'Diálogo' com suporte a 'Áudio Dinâmico'. O sistema utiliza vozes sintetizadas por 'IA' para elevar a 'Imersão' narrativa, sincronizando a exibição de caixas de texto com gatilhos de áudio processados em tempo real durante a interação com NPCs.",
  },
];
