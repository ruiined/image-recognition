import { Tab } from "@headlessui/react";
import { CATEGORIES, SIZE_LIMIT_IN_MB } from "@/utils/constants";
import Table from "./Table";
import { classNames } from "@/utils/helpers";
import { useEffect, useState } from "react";
import type { Columns, FileData } from "@/utils/types";
import { toast } from "react-hot-toast";

const App = () => {
  const [fileData, setFileData] = useState<FileData[]>([]);

  const fetchFileData = async () => {
    try {
      const response = await fetch("/api/files");
      const data = await response.json();
      setFileData(data.files);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.success("Something went wrong");
      }
    }
  };

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const selectedFile = event?.target?.files?.[0];

    if (!selectedFile) return;

    // TODO: Add more restrictions here e.g. file type, name, size & extract as a function validateFile()
    if (selectedFile.size > 1024 * 1024 * SIZE_LIMIT_IN_MB) {
      toast.error(`File size exceeds ${SIZE_LIMIT_IN_MB}MB`);
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      fetchFileData();
      toast.success("Image uploaded successfully.");
    } else {
      toast.error("Image upload failed.");
    }
  };

  useEffect(() => {
    fetchFileData();
  }, []);

  console.log({ fileData });

  return (
    <div className="flex justify-center mt-12 text-slate-900 bg-slate-50">
      <div className="w-full max-w-3xl px-2 py-16 sm:px-0">
        <h1 className="text-2xl font-bold text-center mt-24 mb-12 uppercase text-blue-600">
          Image Recognition
        </h1>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-slate-100 p-1">
            {CATEGORIES.map(({ title }: { title: string }) => (
              <Tab
                key={title}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all",
                    selected
                      ? "bg-white text-blue-700 shadow ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      : "text-slate-600 hover:text-slate-900"
                  )
                }
              >
                {title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-6">
            {CATEGORIES.map(
              ({ title, columns }: { title: string; columns: Columns }) => {
                return (
                  <Tab.Panel
                    key={title}
                    className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  >
                    {title === "Images" && (
                      <div className="flex space-x-1 pt-4 pb-6">
                        <input
                          type="file"
                          onChange={handleUpload}
                          className="w-full rounded-lg border border-slate-200 text-slate-200 px-3 py-1.5 bg-transparent file:-mx-3 file:-my-1.5 file:cursor-pointer file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-slate-50 file:px-3 file:py-3 file:text-emerald-500 file:font-semibold file:transition-all file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] file:uppercase file:text-xs file:tracking-wide hover:file:bg-slate-100 "
                        />
                      </div>
                    )}
                    <Table
                      title={title}
                      columns={columns}
                      fileData={fileData}
                    />
                  </Tab.Panel>
                );
              }
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default App;
