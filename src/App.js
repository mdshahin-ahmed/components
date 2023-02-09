import React, { useState } from "react";
import DropDown from "./components/DropDown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  return (
    <>
      <DropDown onChange={handleSelect} value={selection} options={options} />
    </>
  );
};

export default App;
