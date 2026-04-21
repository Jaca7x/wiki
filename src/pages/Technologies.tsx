import TechnologiesCard from "@/features/technologies/components/TechnologiesCard"
import ArchitectureExplorer from "@/features/technologies/components/ArchitectureExplorer"
import GameSystems from "@/features/technologies/components/GameSystems";

import stack_card from "@/features/technologies/assets/imgs/section_header/stack_card.png"
import architeture_explorer from "@/features/technologies/assets/imgs/section_header/architecture_explorer.png"
import system_grid from "@/features/technologies/assets/imgs/section_header/systems_grid.png"

export default function Technologies() {

    return (
        <main>
            <section id="stack" className="scroll-mt-32 flex flex-col items-center py-30 md:py-50">
                <img src={stack_card} className="h-16 md:h-24 object-contain" alt="Cards de ferramentas" />
                <TechnologiesCard />
            </section>

            <section id="architecture" className="scroll-mt-24 flex flex-col md:items-center">
                <img src={architeture_explorer} className="h-16 md:h-24 object-contain" alt="Explorador de Arquitetura" />
                <ArchitectureExplorer />
            </section>

            <section id="systems" className="scroll-mt-24 flex flex-col md:items-center">
                <img src={system_grid} className="h-16 md:h-24 object-contain" alt="Grid dos Sistemas" />
                <GameSystems />
            </section>
        </main>
    );
}