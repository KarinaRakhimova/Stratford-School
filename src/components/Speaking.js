import "./Online.css";
import adultProgramsSpeaking from "../images/speaking course.jpg";
function Speaking() {
  return (
    <article className="online">
      <h4 className="online__title"> Разговорный английский</h4>
      <img
        src={adultProgramsSpeaking}
        alt="levelsCourses"
        className="online__image"
      />
      <p className="online__description">
        Цель данного курса – дать студентам возможность эффективно общаться,
        используя английский язык в англоязычной среде. Наша программа
        сосредоточена не только на изучении лексики, которую мы используем
        ежедневно (от заказа завтрака в кафе до посещения музеев и выставок), но
        и общения на интересующие вас темы. "Разговорный английский" — это
        всегда новые неожиданные темы, которые Вы подбираете вместе с Вашей
        группой и преподавателем. Это просмотры видео на YouTube и разбор новой
        лексики. Это прослушивание и разбор Ваших любимых песен, и чтение
        текстов на ваших любимых иностранных telegram каналах. На данном курсе
        наши преподаватели стараются быть максимально адаптивными к Вашим
        предпочтениям и готовят материалы, подходящие Ваши запросам.
      </p>
      <p className="online__description">
        <a
          className="footer__linkItem link"
          href="https://t.me/StratfordSchool_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Запишитесь{"  "}
        </a>
        на пробный урок сегодня и узнайте о больше о курсе и условиях записи на
        него.
      </p>
    </article>
  );
}
export default Speaking;
