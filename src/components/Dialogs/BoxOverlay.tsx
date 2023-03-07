import { useEffect, useState } from "react";
import type { Box, BoxOverlay } from "@/utils/types";

const BoxOverlay = ({ prediction, imageRatio }: BoxOverlay) => {
  const { label, score } = prediction;
  const [box, setBox] = useState<Box>({ top: 0, left: 0, width: 0, height: 0 });

  // TODO: Handle window resize
  useEffect(() => {
    if (!imageRatio) return;

    const { x1, x2, y1, y2 } = prediction.bbox;

    const top = y1 * imageRatio;
    const left = x1 * imageRatio;
    const height = y2 * imageRatio - top;
    const width = x2 * imageRatio - left;

    setBox({
      top,
      left,
      height,
      width,
    });
  }, [imageRatio, prediction]);

  return (
    <div
      className="absolute bg-blue-500 bg-opacity-10 text-blue-800 text-xs font-semibold border border-solid border-blue-800 text-right hover:bg-opacity-20 flex flex-col-reverse px-3"
      style={{
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
      }}
    >
      {label} {Math.round(score * 100)}%
    </div>
  );
};

export default BoxOverlay;
