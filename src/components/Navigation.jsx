import React, { useState, useEffect } from "react";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import PersonIcon from "../assets/icons/person.svg";
import SearchIcon from "../assets/icons/search.svg";
import ShoppingBagIcon from "../assets/icons/shopping-bag.svg";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Modal from "./Modal";
import Account from "./Account";  // Личный кабинет

function adjustNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length === 0) return;

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseEnter(event) {
    event.target.style.backgroundColor = "#E86868";
    event.target.style.transition = "background-color 0.3s ease";
  }

  function handleMouseLeave(event) {
    event.target.style.backgroundColor = "";
  }
}

function Navigation() {
  const [showModal, setShowModal] = useState(false); // Модалка для авторизации
  const [authMode, setAuthMode] = useState("login"); // В режиме авторизации или регистрации
  const [currentUser, setCurrentUser] = useState(null); // Состояние для текущего пользователя
  const [modalKey, setModalKey] = useState(0); // key для сброса формы

  useEffect(() => {
    adjustNavLinks();

    // Если в localStorage есть сохраненные данные о пользователе, то восстанавливаем их
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser)); // Восстановление состояния пользователя
    }
  }, []);

  const toggleModal = () => {
    if (!currentUser) {
      setShowModal(true);
      setAuthMode("login");
      setModalKey((prev) => prev + 1); // форсируем сброс формы при открытии
    }
  };

  const switchAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));  // Сохраняем в localStorage
    setShowModal(false); // Закрываем модалку при успешном входе
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");  // Удаляем из localStorage
    setShowModal(false); // Закрываем модалку при выходе
  };

  const closeAccount = () => {
    setCurrentUser(null); // Закрыть кабинет, не удаляя данные из localStorage
  };

  return (
    currentUser ? (
      // Если пользователь авторизован — показываем кабинет
      <Account user={currentUser} onLogout={handleLogout} onClose={closeAccount} />
    ) : (
      <header>
        <div className="icons">
          <div className="social-icons">
            <a href="https://www.instagram.com/" className="social-link">
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com/" className="social-link">
              <AiFillTwitterSquare />
            </a>
            <a href="https://wa.me/" className="social-link">
              <AiOutlineWhatsApp />
            </a>
          </div>

          <a href="#search" className="icon search">
            <img src={SearchIcon} alt="Search Icon" />
          </a>

          <a
            href="#account"
            className="icon account"
            id="account-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleModal(); // Показываем модалку только если не авторизован
            }}
          >
            <img src={PersonIcon} alt="Person Icon" />
          </a>

          <a href="#cart" className="icon cart">
            <img src={ShoppingBagIcon} alt="Shopping Bag Icon" />
          </a>
        </div>

        <div className="text-nav-wrapper">
          <div className="navigation">
            <ul className="nav-list">
              <li><a href="#shop" className="nav-link">Shop</a></li>
              <li><a href="#reviews" className="nav-link">Reviews</a></li>
              <li><a href="#about" className="nav-link">About Mochi</a></li>
              <li><a href="#partnership" className="nav-link">Partnership</a></li>
              <li><a href="#contacts" className="nav-link">Contacts</a></li>
            </ul>
          </div>

          <div className="header-text">
            <h1 className="site-title">Mochi</h1>
            <p className="tagline">Japanese Desserts</p>
            <button className="order-btn" id="order-btn">Order Now</button>
          </div>
        </div>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {showModal && authMode === "login" && (
            <LoginForm
              key={modalKey}
              onSwitchMode={switchAuthMode}
              onLogin={handleLogin}
            />
          )}
          {showModal && authMode === "register" && (
            <RegisterForm onSwitchMode={switchAuthMode} />
          )}
        </Modal>
      </header>
    )
  );
}

export default Navigation;




















