import StackCards from "@/features/technologies/components/StackCards"
import ArchitectureExplorer from "@/features/technologies/components/ArchitectureExplorer"

export default function Technologies() {

    return (
        <main>
            <section id="stack" className="scroll-mt-24"><StackCards /></section>

            <section id="architecture" className="scroll-mt-24">
                <ArchitectureExplorer />
            </section>
        </main>
    );
}