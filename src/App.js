import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something
        </Button>
      </div>
    </>
  );
};

export default App;
