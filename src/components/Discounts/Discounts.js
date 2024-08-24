import "./Discounts.css";
import discountsImage from "../../images/studying by levels.jpg";
import { Link } from "react-router-dom";
function Discounts() {
  return (
    <section className="discounts">
      <h3>Наш языковой центр предоставляет скидки круглый год!</h3>
      <p className="discounts__title">Сезонные спецпредложения:</p>
      <p className="discounts__text">
        Запишитесь в период с 20 августа по 6 сентября и получите скидку 5% на
        весь курс обучения по следующим направлениям:
      </p>

      {/* <img
        src={discountsImage}
        className="discounts__image"
        alt="discountsImage"
      /> */}

      <ul className="discounts__list">
        <li>
          <Link to={"/oge"} className="discounts__link link">
            Подготовка к ОГЭ/ЕГЭ
          </Link>
        </li>
        <li>
          <Link to={""} className="discounts__link link">
            Подготовка к IELTS/TOEFL
          </Link>
        </li>
        <li>
          <Link to={""} className="discounts__link link">
            Разговорный для детей
          </Link>
        </li>
      </ul>

      <p className="discounts__title">Скидки для постоянных клиентов:</p>
      <p className="discounts__text">
        Приведите друга/пару/члена семьи - получи скидку 5%!
      </p>
      <p className="discounts__text">
        А если Вы пришли от друга - получите скидку 3%!
      </p>
      <p className="discounts__title">Онлайн - дешевле!</p>
      <p className="discounts__text">
        Сэкономить время и деньги просто, если учиться онлайн. Переходите на
        дистанционное обучение и получите дополнительную скидку 3%
      </p>
      <p className="discounts__title">Налоговый вычет</p>
      <p className="discounts__text">
        Обучаясь в нашем языковом центре, Вы можете не только получить
        сертификат установленного образца, но и оформить налоговый вычет 13%
      </p>
      <a
        className="discounts__button link"
        href="https://t.me/StratfordSchool_bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
      </a>
    </section>
  );
}
export default Discounts;
