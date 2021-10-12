import React, { useState } from "react";

import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP IS RUNNING ');

  const ToggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut />
      <Button onClick={ToggleParagraphHandler}>Toggle Paragraph</Button>

    </div>
  );
}

export default App;
