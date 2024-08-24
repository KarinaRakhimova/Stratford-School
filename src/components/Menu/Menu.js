import "./Menu.css";
import React from "react";
import menuCloseIcon from "../../images/menuCloseIcon.svg";
import burgerIcon from "../../images/burgerIcon.svg";
import { NavLink } from "react-router-dom";
function Menu() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [burgerOpened, setBurgerOpened] = React.useState(false);
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const handleBurgerClick = () => {
    setBurgerOpened(true);
  };
  const handleBurgerClose = () => {
    setBurgerOpened(false);
  };
  const menuElement = () => {
    if (windowWidth > 768) {
      return (
        <nav className="menu">
          <NavLink to="/programs" className="menu__item link">
            Программы
          </NavLink>
          <NavLink to="/online" className="menu__item link">Онлайн-обучение</NavLink>
          <NavLink to="/prices" className="menu__item link">
            Цены
          </NavLink>
          <NavLink to="/discounts" className="menu__item link">
            Скидки и акции
          </NavLink>
          <NavLink to="/aboutUs" className="menu__item link">
            О нас
          </NavLink>
        </nav>
      );
    }
    return (
      <>
        <img src={burgerIcon} alt="бургер меню" onClick={handleBurgerClick} className="menu__burger"/>
        <nav className={`menu ${burgerOpened ? "" : "menu_hidden"}`}>
          <img
            src={menuCloseIcon}
            alt="иконка закрытия меню"
            className="menu__closeButton"
            onClick={handleBurgerClose}
          />
          <NavLink to="/programs" className="menu__item link">
            Программы
          </NavLink>
          <NavLink to="/online" className="menu__item link">Онлайн-обучение</NavLink>
          <NavLink to="/prices" className="menu__item link">
            Цены
          </NavLink>
          <NavLink to="/discounts" className="menu__item link">
            Скидки и акции
          </NavLink>
          <NavLink to="/aboutUs" className="menu__item link">
            О нас
          </NavLink>
        </nav>
      </>
    );

}
return menuElement();
}


export default Menu;
