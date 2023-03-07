import type { FileData, Table } from "@/utils/types";
import { useState } from "react";
import Modal from "./Modal";

const Table = ({ title, columns, fileData }: Table) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <table className="table-auto w-full border-collapse">
        <thead className="border-b-2 border-slate-200 bg-slate-50">
          <tr>
            {columns.map(({ header, accessor }) => (
              <th
                key={accessor}
                className="text-left p-3 first:rounded-tl-xl last:rounded-tr-xl uppercase text-xs font-semibold text-slate-500 tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fileData.map((file: FileData) => (
            <tr
              key={file?.fileName}
              className=" border-b border-slate-100 text-sm last:border-b-0"
            >
              {columns.map(({ accessor }) => {
                return (
                  <td key={accessor} className="p-3">
                    {!accessor?.endsWith("Button") ? (
                      file[accessor]
                    ) : (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="uppercase text-xs font-semibold text-blue-500 tracking-wider px-2 py-1 border border-transparent hover:text-blue-800 rounded-lg   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ease-in duration-200"
                      >
                        {title === "Predictions" ? "View" : "Predict"}
                      </button>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Table;
