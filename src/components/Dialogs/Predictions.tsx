/* eslint-disable @next/next/no-img-element */
import { Prediction, PredictionDialog } from "@/utils/types";
import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";
import BoxOverlay from "./BoxOverlay";

const Predictions = ({ image }: PredictionDialog) => {
  const [imageRatio, setImageRatio] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);

  if (!image?.fileName) return null;

  const directoryPath = "/uploads";
  const imagePath = `${directoryPath}/${image?.fileName}`;

  const handleImageLoad = () => {
    if (!imageRef?.current) return;
    setImageRatio(imageRef.current.width / imageRef.current.naturalWidth);
  };

  return (
    <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden shadow-xl">
      {image?.prediction?.map((prediction: Prediction) => (
        <BoxOverlay
          key={prediction.label}
          prediction={prediction}
          imageRatio={imageRatio}
        />
      ))}
      <img
        style={{
          height: "auto",
          width: "100%",
        }}
        ref={imageRef}
        alt={image?.fileName}
        src={imagePath}
        onLoad={handleImageLoad}
      />
    </Dialog.Panel>
  );
};

export default Predictions;
