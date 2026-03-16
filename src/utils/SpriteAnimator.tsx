import { useSpriteAnimation } from "@/hooks/useSpriteAnimation";

type SpriteAnimatorProps = {
  sprite: string;
  frameWidth: number;
  frameHeight: number;
  frames: number;
  scale: number;
  fps?: number;
};

export default function SpriteAnimator({
  sprite,
  frameWidth,
  frameHeight,
  frames,
  scale,
  fps = 8
}: SpriteAnimatorProps) {

  const frame = useSpriteAnimation({ frames, fps });
  
  return (
  <div
    style={{
      width: frameWidth * scale,
      height: frameHeight * scale,
      backgroundImage: `url(${sprite})`,
      backgroundPosition: `-${frame * frameWidth * scale}px 0px`,
      backgroundSize: `${frameWidth * frames * scale}px ${frameHeight * scale}px`,
      backgroundRepeat: "no-repeat",
      imageRendering: "pixelated"
    }}
  />
);
}