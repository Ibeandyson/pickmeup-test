import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from "react-toast-notifications";
import { Provider as LocationProvider } from "./context/locationStore";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
