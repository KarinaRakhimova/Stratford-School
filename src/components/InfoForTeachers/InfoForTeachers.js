import "./InfoForTeachers.css";

function InfoForTeachers() {
  return (
    <section className="teachers">
      <h4 className="teachers__title">
        Не бывает хорошей школы без хороших преподавателей.<br></br>
        Учитель – лицо образовательного учреждения и, развиваясь в сфере
        образовательных услуг с 2012 года без рекламы, а только благодаря
        рекомендациям и «сарафанному радио»,мы знаем о чем говорим. Поэтому
        относимся ко всем участникам нашей команды с уважением и трепетом.
      </h4>
      <ul className="teachers__list">
        Мы предлагаем:
        <li className="teachers__listItem">Официальное трудоустройство;</li>
        <li className="teachers__listItem">
          Уютные классы в центре города (ост. Алое поле) или проведение уроков в
          дистанционном формате;
        </li>
        <li className="teachers__listItem">
          Удобное расписание: полная или частичная занятость;
        </li>
        <li className="teachers__listItem">
          Доступ к нашей базе образовательных материалов и методических
          наработок наших преподавателей;
        </li>
        <li className="teachers__listItem">
          Профессиональный и творческий рост;
        </li>
        <li className="teachers__listItem">
          Поддержку со стороны коллег и руководителей;
        </li>
        <li className="teachers__listItem">Атмосферу уважения.</li>
      </ul>

      <ul className="teachers__list">
        Станьте частью нашей команды, если Вы:
        <li className="teachers__listItem">
          Любите иностранные языки и владеете ими;
        </li>
        <li className="teachers__listItem">
          У Вас уже есть опыт преподавания, и Вы хотите его развивать или Вы
          только начинаете свой путь в сфере образования;
        </li>
        <li className="teachers__listItem">
          Открыты новому, хотите учить и учиться;
        </li>
        <li className="teachers__listItem">
          Доброжелательны, общительны и предпочитаете мыслить креативно.
        </li>
      </ul>
      <h4 className="teachers__title">
        Если Вы хотите преподавать языки вместе с нами и Ваши цели и ценности
        совпадают с нашими – отправьте резюме на почту:
        <a
          href="mailto:Stratford.study@gmail.ru"
          className="link footer__linkItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Stratford.study@gmail.ru{" "}
        </a>
        или в WhatsApp{" "}
        <a
          className="link footer__linkItem"
          href="https://api.whatsapp.com/send?phone=9227505181"
          target="_blank"
          rel="noopener noreferrer"
        >
          +79227505181
        </a>{" "}
        или Телеграм{" "}
        <a
          className="link footer__linkItem"
          href="https://t.me/StratfordSchool"
          target="_blank"
          rel="noopener noreferrer"
        >
          StratfordSchool.
        </a>
      </h4>
    </section>
  );
}

export default InfoForTeachers;
