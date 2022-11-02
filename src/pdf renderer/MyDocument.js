import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "../App.css";
import Child from "./Child";
const ref = React.createRef();

function Test() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref} style={{ textAlign: "center" }}>
        <Child />
      </div>
    </div>
  );
}
export default Test;
