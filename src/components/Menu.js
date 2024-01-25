import { Link } from 'react-router-dom';
function Menu() {
    return(
<nav>
        <ul className="menu">
          <li className="menu__item">Программы</li>
          <li className="menu__item">Цены</li>
          <li className="menu__item">Скидки и акции</li>
          <li className="menu__item">Отзывы</li>
          <li className="menu__item">О нас</li>
          <Link className="menu__item" to="/license">Лицензия</Link> 
        </ul>
      </nav>
    )
}

export default Menu;