import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP IS RUNNING ");

  const ToggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle] );

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle </Button>
      <Button onClick={ToggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
