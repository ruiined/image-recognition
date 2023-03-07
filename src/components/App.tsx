import { Tab } from "@headlessui/react";
import { CATEGORIES } from "@/utils/constants";
import Table, { Columns } from "./Table";
import { classNames } from "@/utils/helpers";
import { useEffect, useState } from "react";

export type FileData = {
  fileName: string;
  fileSize: number;
  uploadTimestamp: Date;
};

const App = () => {
  const [fileData, setFileData] = useState<FileData[]>([]);

  const fetchFileData = async () => {
    try {
      const response = await fetch("/api/files");
      const data = await response.json();
      setFileData(data.files);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const selectedFile = event?.target?.files?.[0];

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Image uploaded successfully.");
    } else {
      alert("Image upload failed.");
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
            <div>
              <input type="file" onChange={handleUpload} />
            </div>
            {CATEGORIES.map(
              ({ title, columns }: { title: string; columns: Columns }) => (
                <Tab.Panel
                  key={title}
                  className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                >
                  <Table title={title} columns={columns} fileData={fileData} />
                </Tab.Panel>
              )
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default App;
