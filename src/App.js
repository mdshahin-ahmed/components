import React from "react";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const App = () => {
  const handleClick = () => {
    console.log("Shahin");
  };
  return (
    <>
      <div>
        <Button success rounded outline className="mb-2" onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </>
  );
};

export default App;
