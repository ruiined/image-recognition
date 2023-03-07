import { SERVER_URL } from "@/utils/constants";
import type { Modal } from "@/utils/types";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";
import Images from "./Dialogs/Images";
import Predictions from "./Dialogs/Predictions";

const Modal = ({
  isOpen,
  handleClose,
  isPredictionTab,
  image,
  setPredictionData,
}: Modal) => {
  const fetchPrediction = async (): Promise<void> => {
    try {
      const response = await fetch(`${SERVER_URL}/predict`);

      if (!response.ok) {
        throw new Error("Network error getting the prediction");
      }
      const data = await response.json();

      return data?.predictions;
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const savePredictionData = async (title: string, description: string) => {
    const prediction = await fetchPrediction();

    setPredictionData({
      id: image?.fileName ?? "",
      title,
      description,
      timestamp: new Date().toLocaleString("gb-GB"),
      prediction,
    });

    toast.success("Prediction saved successfully");
  };

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={handleClose}
      className="z-10 fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex min-h-full items-center justify-center p-4 text-center"
    >
      {isPredictionTab ? (
        <Predictions image={image} />
      ) : (
        <Images
          image={image}
          handleClose={handleClose}
          savePredictionData={savePredictionData}
        />
      )}
    </Dialog>
  );
};

export default Modal;
