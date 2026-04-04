import { useState, useEffect } from "react";

interface UseSpriteAnimationProps {
    frames: number;
    fps: number;
}

export function useSpriteAnimation({ frames, fps }: UseSpriteAnimationProps) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {

        if (fps === 0) {
            setTimeout(() => setFrame(0), 0);
            return;
        }

        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % frames);
        }, 1000 / fps);

        return () => clearInterval(interval);

    }, [frames, fps]);

    return frame;
}