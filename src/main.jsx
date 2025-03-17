import React from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App.jsx";
import Navigation from "./components/Navigation"; // Импорт Navigation

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation /> {/* Добавляем компонент Navigation */}
    <App />
  </React.StrictMode>
);
