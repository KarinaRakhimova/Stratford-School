import icon from "../images/photo_2023-09-09_18-20-23-new.jpg";

function Header() {
  return (
    <header className="App-header">
      <div>
        <p className="header__motto">Be cool with Stratford School</p>
        <img src={icon} className="App-icon" alt="icon" />
      </div>

      <div className="header__links">
        <button className="header__button">
          Записаться на пробное занятие
        </button>
        <a className="header__link" href="https://stratford-school.ru/contacts">
          Связаться с нами
        </a>
      </div>
    </header>
  );
}

export default Header;
