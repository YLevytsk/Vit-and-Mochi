import React from "react";
import "./App.css"; // Подключаем стили для компонента

// Импортируем изображение
import backgroundImage from '../assets/images/mochi.webp';  // Важно указать правильный путь

function App() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${backgroundImage})` }}  // Используем импортированное изображение
    >
      {/* Навигация и остальной контент */}
    </header>
  );
}

export default App;


