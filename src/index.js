import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./app";
import { HashRouter as Router } from "react-router-dom";
//ver R-18+
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

//ver R-17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
