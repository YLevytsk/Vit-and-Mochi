import React from "react";
import Navigation from "./Navigation"; // Импортируем компонент Navigation
import Icons from "./Icons"; // Импортируем компонент Icons

function Header() {
  return (
    <header className="header">
      <Navigation /> {/* Компонент для навигации */}
      <Icons /> {/* Компонент для иконок */}
    </header>
  );
}

export default Header;
