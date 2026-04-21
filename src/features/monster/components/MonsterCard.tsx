import SpriteAnimator from "@/components/ui/SpriteAnimator"

interface MonsterCardProps {
    name: string
    sprite: string
    frameWidth: number
    frameHeight: number
    frames: number
    scale: number
    fps: number
    hovered: boolean
    onHover: () => void
    onLeave: () => void
    onClick: () => void
    marginLeft?: number
    marginBottom?: number
}

export default function MonsterCard({
    name,
    sprite,
    frameWidth,
    frameHeight,
    frames,
    scale,
    fps,
    hovered,
    onHover,
    onLeave,
    onClick,
    marginLeft = 0,
    marginBottom = 0
}: MonsterCardProps) {

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            tabIndex={0}
            role="button"
            className="flex flex-col relative items-center justify-between bg-black/40 p-6 rounded-lg 
                       w-80 min-h-80 shrink-0 snap-center
                       transition-all duration-300 border border-transparent 
                       hover:border-[#c9a227]/30 cursor-pointer 
                       z-10 hover:z-20 focus-visible:ring-2 focus-visible:ring-[#FACC15] focus-visible:border-[#FACC15]/5 focus-visible:ring-offset-8 focus-visible:ring-offset-[#FACC15] 
                    focus:bg-[#FACC10]/5"
            onKeyDown={handleKeyDown}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <div className="flex items-center justify-center h-50 w-full pointer-events-none">
                <div style={{ marginLeft: `${marginLeft}px`, marginBottom: `${marginBottom}px` }}>
                    <SpriteAnimator
                        sprite={sprite}
                        frameWidth={frameWidth}
                        frameHeight={frameHeight}
                        scale={scale}
                        frames={frames}
                        fps={hovered ? fps : 0}
                    />
                </div>
            </div>
            <p className="text-[#c9a227] font-semibold uppercase tracking-widest text-center mt-4 pointer-events-none">
                {name}
            </p>
        </div>
    )
}