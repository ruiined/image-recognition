type Table = {
  title: string;
  columns: { header: string; accessor: string }[];
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
