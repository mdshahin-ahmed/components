import React from "react";

const Table = ({ data }) => {
  const renderRows = data.map((fruit) => {
    const { name, color, score } = fruit;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{color}</td>
        <td>{score}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;