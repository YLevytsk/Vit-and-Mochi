import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import AuthModal from "./AuthModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Автоматическая авторизация при загрузке
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Открытие/закрытие модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ Вход в аккаунт (вызывается из LoginForm или RegisterForm)
  const handleLogin = (userData, token) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    if (token) {
      localStorage.setItem("accessToken", token);
    }
    closeModal(); // закрываем модалку после входа
  };

  // ✅ Выход из аккаунта
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navigation
        isLoggedIn={isLoggedIn}
        user={user}
        openModal={openModal}
        handleLogout={handleLogout}
      />

      {isModalOpen && (
        <AuthModal
          onClose={closeModal}
          onLogin={handleLogin}
        />
      )}

      {/* 💡 Здесь можно отобразить Личный кабинет или приветствие */}
      {isLoggedIn && user && (
        <div style={{ padding: "24px" }}>
          <h2>Welcome, {user.username || user.email}!</h2>
        </div>
      )}
    </>
  );
};

export default App;



