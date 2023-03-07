import { FileData, ImageDialog } from "@/utils/types";
import { Dialog } from "@headlessui/react";

const Images = ({ image, handleClose, savePredictionData }: ImageDialog) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    savePredictionData(title, description);
    handleClose();
  };

  return (
    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title as="h3" className="text-lg font-medium leading-6">
        {image?.fileName}
      </Dialog.Title>
      <Dialog.Description className="text-sm text-gray-400">
        Add more details for your image and click submit to predict
      </Dialog.Description>
      <form method="post" onSubmit={handleSubmit}>
        <div className="my-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Title
              <input
                name="title"
                className="mt-1 px-3 py-2 bg-white font-normal border text-slate-600 shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Description
              <input
                name="description"
                className="mt-1 px-3 py-2 bg-white font-normal border text-slate-600 shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </label>
          </div>
        </div>

        <div className="mt-4 space-x-3">
          <button
            type="submit"
            className="rounded-lg bg-green-100 px-4 py-2.5 text-sm font-medium text-green-900 hover:bg-green-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium hover:bg-slate-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </Dialog.Panel>
  );
};

export default Images;
