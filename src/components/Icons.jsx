import React from "react";

// Импортируем SVG файлы как React компоненты
import { ReactComponent as PersonIcon } from '../assets/icons/person.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as ShoppingBagIcon } from '../assets/icons/shopping-bag.svg';

function Icons() {
  return (
    <div className="icons">
      <a href="#person" className="icon">
        <PersonIcon className="person" />
      </a>
      <a href="#search" className="icon">
        <SearchIcon className="search" />
      </a>
      <a href="#cart" className="icon">
        <ShoppingBagIcon className="shopping-bag" />
      </a>
    </div>
  );
}

export default Icons;
