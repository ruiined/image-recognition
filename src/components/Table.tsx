export type Columns = { header: string; accessor: string }[];

type Table = {
  title: string;
  columns: Columns;
};

const Table = ({ title, columns }: Table) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {columns.map(({ header, accessor }) => (
            <th key={accessor}>{header}</th>
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
