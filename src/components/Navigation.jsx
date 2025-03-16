import React, { useEffect } from "react";
import PersonIcon from "../assets/icons/person.svg"; // Иконка "person"
import SearchIcon from "../assets/icons/search.svg"; // Иконка "search"
import ShoppingBagIcon from "../assets/icons/shopping-bag.svg"; // Иконка "shopping-bag"

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
    <header>
      {/* Иконки в верхней части хедера */}
      <div className="icons" id="icons">
        <a href="#search" className="icon search" id="search-icon">
          <img src={SearchIcon} alt="Search Icon" />
        </a>
        <a href="#account" className="icon account" id="account-icon">
          <img src={PersonIcon} alt="Person Icon" />
        </a>
        <a href="#cart" className="icon cart" id="cart-icon">
          <img src={ShoppingBagIcon} alt="Shopping Bag Icon" />
        </a>
      </div>

      <div className="text-nav-wrapper">
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
    </header>
  );
}

export default Navigation;


