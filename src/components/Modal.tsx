import type { Modal } from "@/utils/types";
import { Dialog } from "@headlessui/react";
import Images from "./Dialogs/Images";

const Modal = ({ isOpen, handleClose, isPredictionTab, image }: Modal) => {
  console.log({ image });
  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={handleClose}
      className="z-10 fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex min-h-full items-center justify-center p-4 text-center"
    >
      {isPredictionTab ? (
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          Nothing here yet
        </Dialog.Panel>
      ) : (
        <Images image={image} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default Modal;
