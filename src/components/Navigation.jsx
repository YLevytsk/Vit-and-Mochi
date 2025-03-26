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

function adjustNavLinks() {
  console.log("✅ Navigation script executed!");

  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length === 0) return;

  let maxWidth = 295;
  navLinks.forEach((link) => {
    link.style.width = `${maxWidth}px`;
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
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" | "register"

  useEffect(() => {
    adjustNavLinks();
  }, []);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
    setAuthMode("login"); // всегда открываем сначала с формы входа
  };

  const switchAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <header>
      {/* Контейнер для всех иконок */}
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

        {/* 👤 Иконка аккаунта */}
        <a
          href="#account"
          className="icon account"
          id="account-icon"
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
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

      {/* Модалка с логином или регистрацией */}
      <Modal isOpen={showModal} onClose={toggleModal}>
        {authMode === "login" ? (
          <LoginForm onSwitchMode={switchAuthMode} />
        ) : (
          <RegisterForm onSwitchMode={switchAuthMode} />
        )}
      </Modal>
    </header>
  );
}

export default Navigation;






