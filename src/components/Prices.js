import "./Prices.css";
function Prices() {
  return (
    <section className="prices">
      <h3>Все цены актуальны для нового учебного года 2024-2025</h3>
      <p className="prices__text">
        Приглашаем Вас ознакомиться с нашими скидками и акциями, информацией о
        нашей лицензии и нашими программами. На все вопросы будем рады ответить
        по{" "}
        <a className="footer__linkItem link" href="tel:+79090692700">
          телефону
        </a>{" "}
        или на{" "}
        <a
          className="footer__linkItem link"
          href="https://t.me/StratfordSchool_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          бесплатном пробном уроке.
        </a>
      </p>
      <p className="prices__text">
        Обращаем Ваше внимание на то, что мы работаем только в форматах
        мини-групп (от 3х до 5 человек), парных и индивидуальных занятий. В
        нашем языковом центре мы делаем акцент на индивидуальном подходе и
        деликатно подбираем группы, ориентируясь на уровень владения языком,
        языковые потребоности и эмоциональный комфорт.{" "}
      </p>
      <div className="prices__table">
        <p className="prices__elementary">Начальные классы</p>
        <p className="prices__high">Средние классы</p>
        <p className="prices__adults">Взрослые</p>

        <p className="prices__minutes">Продолжительность</p>
        <div className="prices__minutes_elementary45">45 минут</div>
        <div className="prices__minutes_elementary60">60 минут</div>
        <div className="prices__minutes_high45">45 минут</div>
        <div className="prices__minutes_high60">60 минут</div>
        <div className="prices__minutes_ind45">45 минут</div>
        <div className="prices__minutes_ind60">60 минут</div>

        <p className="prices__mini">Мини-группа</p>
        <p className="prices__couple">Пара</p>
        <p className="prices__ind">Индивидуально</p>

        <div className="prices__elementary45">350</div>
        <div className="prices__elementary60">450</div>
        <div className="prices__high45">400</div>
        <div className="prices__high60">550</div>
        <div className="prices__adult45">450</div>
        <div className="prices__adult60">670</div>
        <div className="prices__elementary45_couple">400</div>
        <div className="prices__elementary60_couple">520</div>
        <div className="prices__high45_couple">500</div>
        <div className="prices__high60_couple">650</div>
        <div className="prices__adult45_couple">550</div>
        <div className="prices__adult60_couple">730</div>
        <div className="prices__elementary45_ind">800</div>
        <div className="prices__elementary60_ind">1000</div>
        <div className="prices__high45_ind">800</div>
        <div className="prices__high60_ind">1000</div>
        <div className="prices__adult45_ind">800</div>
        <div className="prices__adult60_ind">1000</div>
      </div>
    </section>
  );
}

export default Prices;
