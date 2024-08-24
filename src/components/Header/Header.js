import "./Header.css";
import icon from "../../images/Stratford лого 1.png";
import motto from "../../images/be cool with stratford school.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={icon} className="header__icon" alt="icon" />
      </Link>
      <Link to="/discounts"  className="header__logo">
        <img src={motto} alt="motto" className="header__motto"/>
      </Link>
      <div className="header__container">
        <a
          className="header__button"
          href="https://t.me/StratfordSchool_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Записаться на пробное занятие
        </a>
        <button className="header__button " href="tel:+79090692700">
          Связаться с нами
        </button>
      </div>
    </header>
  );
}

export default Header;
