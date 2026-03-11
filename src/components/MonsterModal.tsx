import SpriteAnimator from "./SpriteAnimator";

interface MonsterModalProps {
    isOpen: boolean;
    onClose: () => void;
    sprite: string;
    title: string;
    description: string;
    frameWidth: number;
    frameHeight: number;
    frames: number;
    scale: number;
    fps?: number;
    marginLeft: number;
}

export default function MonsterModal({
    isOpen,
    onClose,
    sprite,
    title,
    description,
    frameWidth,
    frameHeight,
    frames,
    scale,
    fps,
    marginLeft
}: MonsterModalProps) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

            <div className="bg-white text-black p-6 rounded-lg w-[300px] text-center">

                <h2 className="text-xl font-bold mb-2">
                    {title}
                </h2>

                <div style={{ marginLeft:  `${marginLeft}rem`}}>
                    <SpriteAnimator
                        sprite={sprite}
                        frameWidth={frameWidth}
                        frameHeight={frameHeight}
                        scale={scale}
                        frames={frames}
                        fps={fps}
                    />
                </div>


                <p className="mb-4">
                    {description}
                </p>

                <button
                    onClick={onClose}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Fechar
                </button>

            </div>

        </div>
    );
}