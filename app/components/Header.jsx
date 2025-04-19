import React from "react";

const Header = () => {

  return (
    <header className="landing-header full-width">
      <h1 className="landing-logo">
        <span className="italic">Action</span>
        <span className="bold">Rent</span>
      </h1>
      <nav className="landing-nav">
        <ul className="landing-nav-links">
          <li><a href="/">Главная</a></li>
          <li><a href="/price">Прайс</a></li>
          <li><a href="/promo">Акции</a></li>
          <li><a href="/rules">Правила проката</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
