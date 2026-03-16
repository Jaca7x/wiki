import SpriteAnimator from "@/utils/SpriteAnimator"

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
    marginBottom: number
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
    marginBottom
}: MonsterCardProps) {
    return (
        <div
            className="bg-black/40 p-6 rounded-lg min-w-[240px] flex flex-col items-center justify-between transition-all duration-300 border border-transparent hover:border-[#c9a227]/30 cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <div className="flex items-center justify-center h-[200px] w-full">
                <div style={{ marginLeft: `${marginLeft}px`, marginBottom: `${marginBottom}px`}}>
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
            <p className="text-[#c9a227] font-semibold uppercase tracking-widest">
                {name}
            </p>
        </div>
    )
}