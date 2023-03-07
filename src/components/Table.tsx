import { FileData } from "./App";

export type Columns = { header: string; accessor: string }[];

type Table = {
  title: string;
  columns: Columns;
  fileData: FileData;
};

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
        <tr>
          <td>Value</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
