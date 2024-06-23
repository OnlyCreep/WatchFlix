import React, { StrictMode } from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css"
import App from "./Components/App";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
