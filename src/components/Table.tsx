import React from 'react';

type Props = {
  columns: string[];
  rows: (string|number)[][];
};

const Table: React.FC<Props> = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={`column-${i}`}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((cell, j) => (
              <td key={`cell-${i}-${j}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
