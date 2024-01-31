import "./Header.css";
import icon from "../../images/photo_2023-09-09_18-20-23-new.jpg";

function Header() {
  return (
    <header className="header">
      <div>
        <p className="header__motto">Be cool with Stratford School</p>
        <img src={icon} className="header__icon" alt="icon" />
      </div>
        <button className="header__button">
          Записаться на пробное занятие
        </button>
        <a className="header__link" href="https://stratford-school.ru/contacts">
          Связаться с нами
        </a>
    </header>
  );
}

export default Header;
