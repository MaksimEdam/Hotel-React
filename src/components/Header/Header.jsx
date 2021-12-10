import React from "react";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__nav">
          <a className="logo header__logo link" href="index.html">
            <span className="logo__accent">Две</span>Люды
          </a>
          <ul className="menu list">
            <li className="menu__item">
              <a className="menu__link link current" href="index.html">
                Главная
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link link" href="rules.html">
                Правила
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link link" href="сontacts.html">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <button class="header__mobail-menu-btn" data-menu-button>
          <svg class="header__mobail-menu">
            <use href="./images/svg/sprite.svg#mobail-icon-menu"></use>
          </svg>
        </button>
        <ul class="contact list">
          <li class="contact__mail">
            <a class="contact__mail-link link" href="mailto:info@devstudio.com">
              <svg class="header__icon-mail">
                <use href="./images/svg/sprite.svg#icon-mail"></use>
              </svg>
              info@devstidio.com
            </a>
          </li>
          <li>
            <a class="contact__phone-link link" href="tel:+380961111111">
              <svg class="header__icon-phone">
                <use href="./images/svg/sprite.svg#icon-smartphone"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li>
        </ul>
      </div>
      <div class="mobail-menu" data-menu>
        <div class="container mobail-menu__container">
          <button type="button" class="mobail-menu__close-btn" data-menu-close>
            <svg class="mobail-menu__close">
              <use href="./images/svg/sprite.svg#icon-close"></use>
            </svg>
          </button>
          <ul class="mobail-menu__nav list">
            <li class="mobail-menu__item">
              <a class="mobail-menu__link link current" href="./index.html">
                Студия
              </a>
            </li>
            <li class="mobail-menu__item">
              <a class="mobail-menu__link link" href="./rules.html">
                Правила
              </a>
            </li>
            <li class="mobail-menu__item">
              <a class="mobail-menu__link link" href="./сontacts.html">
                Контакты
              </a>
            </li>
          </ul>
          <ul class="mobail-menu__contact">
            <li class="mobail-menu__contact-phone list">
              <a
                class="mobail-menu__contact-phone-link link"
                href="tel:+380961111111"
              >
                +38 096 111 11 11
              </a>
            </li>
            <li class="mobail-menu__contact-mail list">
              <a
                class="mobail-menu__contact-mail-link link"
                href="mailto:info@devstudio.com"
              >
                info@devstidio.com
              </a>
            </li>
          </ul>
          {/* <ul class="mobail-menu__social list">
        <li class="mobail-menu__social-item">
          <a class="mobail-menu__social-link link" href="">
            Instagram
          </a>
        </li>
        <li class="mobail-menu__social-item">
          <a class="mobail-menu__social-link link" href="">
            Twitter
          </a>
        </li>
        <li class="mobail-menu__social-item">
          <a class="mobail-menu__social-link link" href="">
            Facebook
          </a>
        </li>
        <li class="mobail-menu__social-item">
          <a class="mobail-menu__social-link link" href="">
            LinkedIn
          </a>
        </li>
      </ul> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
