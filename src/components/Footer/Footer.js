import { Link } from "react-router-dom";
import map from "../../images/map.png"
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <Link to="/infoForTeachers" className="footer__linkItem link">
          Стать частью нашей команды
        </Link>
        <Link to="/license" className="footer__linkItem link">
          Лицензия
        </Link>
        <a className="footer__linkItem link" href="tel:+79090692700">
          Позвонить
        </a>
        <a
          className="footer__linkItem link"
          href="https://t.me/StratfordSchool_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать в Telegram
        </a>
      </div>
      <div>
        <p>
          Как нас найти: Свердловский проспект 60, левое крыло, второй этаж,
          офис 206
        </p>
        <a
          href="https://go.2gis.com/ldxs7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__map"
            src={map}
            alt="map"
          />
        </a>
      </div>
    </section>
  );
}

export default Footer;
