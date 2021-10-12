import React from "react";

const Myparagraph = (props) => {
    console.log('Myparagraph PUNNING');
  return <p> {props.children}</p>;
};
export default Myparagraph;
