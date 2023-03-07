import type { Modal } from "@/utils/types";
import { Dialog } from "@headlessui/react";

const Modal = ({ isOpen, handleClose }: Modal) => {
  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={handleClose}
      className="z-10 fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex min-h-full items-center justify-center p-4 text-center"
    >
      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        Nothing here yet
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
