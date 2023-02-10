import React from "react";

const Table = ({ data, config }) => {
  const renderHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p-3">{config[0].render(fruit)}</td>
        <td className="p-3">{config[1].render(fruit)}</td>
        <td className="p-3">{config[2].render(fruit)}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
