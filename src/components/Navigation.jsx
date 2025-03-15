import React, { useEffect } from "react";

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

