import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [ShowParagraph, setShowParagraph] = useState(false);

  console.log('APP IS RUNNING ');

  const ToggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {ShowParagraph && <p>This is new!</p>}
      <Button onClick={ToggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
