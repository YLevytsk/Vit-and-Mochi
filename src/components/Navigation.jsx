import React, { useEffect } from "react";
import { ReactComponent as PersonIcon } from "../assets/icons/person.svg"; // Импортируем иконку Person
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg"; // Импортируем иконку Search
import { ReactComponent as ShoppingBagIcon } from "../assets/icons/shopping-bag.svg"; // Импортируем иконку Shopping Bag

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
  useEffect(() => {
    adjustNavLinks();
  }, []);

  return (
    <div className="text-nav-wrapper">
      {/* Иконки в верхней части хедера */}
      <div className="icons">
        <a href="#person" className="icon">
          <PersonIcon className="person-icon" />
        </a>
        <a href="#search" className="icon">
          <SearchIcon className="search-icon" />
        </a>
        <a href="#cart" className="icon">
          <ShoppingBagIcon className="shopping-bag-icon" />
        </a>
      </div>

      {/* Навигация */}
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
  );
}

export default Navigation;

