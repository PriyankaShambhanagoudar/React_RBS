import React from "react";
import Myparagraph from "./MyParagraph";

const DemoOutPut = (props) => {
    console.log('DEMO OUTPUT PUNNING');
  return <Myparagraph> {props.show  ? "This is new!" : ' '}</Myparagraph>;
};
export default React.memo(DemoOutPut);
