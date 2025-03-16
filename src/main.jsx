import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Глобальные стили
import App from "./components/App"; // Главный компонент

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

