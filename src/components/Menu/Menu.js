import "./Menu.css";
import { Link, NavLink } from 'react-router-dom';
function Menu() {
    return(
<nav className="menu">

          <NavLink to="/programs" className="menu__item">Программы</NavLink>
          <NavLink to="/prices" className="menu__item">Цены</NavLink>
          <NavLink to="/discounts" className="menu__item">Скидки и акции</NavLink>
          <NavLink to="/" className="menu__item">Отзывы</NavLink>
          <NavLink to="/abotUs" className="menu__item">О нас</NavLink>
          <NavLink to="/license" className="menu__item">Лицензия</NavLink>

      </nav>
    )
}

export default Menu;
