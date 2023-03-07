import type { FileData, Table } from "@/utils/types";

const Table = ({ title, columns, fileData }: Table) => {
  return (
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
                  {file[accessor]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
