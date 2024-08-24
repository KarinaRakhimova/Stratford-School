import "./Exams.css";
import cambridgeImage from "../images/Cambridge exams.jpg";
function Cambridge() {
  return (
    <section className="exams">
      <h3>
        Успешная сдача CAMRIDGE ENGLISH LANGUAGE ASSESSEMENT с языковым центром
        StratfordSchool!
      </h3>
      <img src={cambridgeImage} alt="cambridgeImage" className="exams__image" />

      <p>Об экзамене:</p>
      <p className="exams__text">
        С весны 2022 года центры IELTS, TOEFL и Cambridge Assessment English
        временно не работают на территории Российской Федерации.
      </p>
      <p className="exams__text">
        Однако, это не повод опускать руки и не идти к своей цели, если она у
        Вас была! Вы все еще можете сдать международный экзамен за рубежом.
        Самые популярные страны для тестирования сейчас: Казахстан, Азербайджан,
        Грузия, Армения, Узбекистан и Турция.
      </p>
      <p className="exams__text">
        А если Вам требуется наставник или Вы хотите записаться на курс по
        подготовке к международным экзаменам, мы будем рады вам помочь. Наши
        преподаватели имеют богатый опыт работы в сфере профессиональной
        подготовки к экзаменам формата Cambridge English Language Assessment и
        готовы стать проводником в достижении этой цели.
      </p>
      <p className="exams__text">
        В линейку экзаменов Cambridge входит 14 экзаменов разных уровней
        сложности и назначения — от A1 до C2. Каждый уровень разделен на две
        категории: для школьников и для взрослых. Подробнее о типах тестов
        написано{" "}
        <a
          href="https://www.cambridgeenglish.org/"
          className="footer__linkItem link"
          target="_blank"
          rel="noopener noreferrer"
        >
          на официальном сайте экзамена.
        </a>
      </p>
      <p className="exams__text">
        Кембриджские экзамены построены так, что в рамках одного тестирования
        можно получить один из двух или трех близких уровней. Если у Вас,
        например, уровень B1 и Вам не хватило баллов до нужного уровня B2, то вы
        подтвердите свой уровень B1. А если Вы сдадите экзамен лучше, чем
        рассчитывали, то у вас есть шанс получить сертификат более высокого
        уровня, например C1. Именно поэтому очень важно изначально правильно
        определить уровень и озвучить цель, к которой Вы стремитесь. Это даст
        преподавателю возможность подобрать для Вас соответствующие методические
        материалы и составить индивидуальный план подготовки.{" "}
      </p>
      <p>
        Каждый экзамен Cambridge соответствует международным стандартам в
        измерении языковых способностей и имеет следующую классификацию:
      </p>
      <ul className="exams__list">
        English Basic User (A1, A2): Экзамен Key (KET)
        <li>A1 (Beginner)</li>
        <li>A2 (Elementary English)</li>
      </ul>
      <ul className="exams__list">
        English Independent User (B1, B2): Экзамен Key (KET) / Preliminary (PET)
        / First (FCE)
        <li>B1 (Intermediate English)</li>
        <li>B2 (Upper-Intermediate English)</li>
      </ul>
      <ul className="exams__list">
        Proficient English User (C1, C2): Экзамен Advanced (CAE) / Proficiency
        (CPE)
        <li>C1 (Advanced English)</li>
        <li>C2 (Proficiency English)</li>
      </ul>
      <p className="exams__text">
        Стандартный темп изучения английского - один уровень за 200 часов
        регулярных занятий. То есть, чтобы подтянуть B1 до B2, нужно полгода
        заниматься 3-4 раза в неделю по 23 академических часа.
      </p>
      <p className="exams__text">
        <a
          className="footer__linkItem link"
          href="https://t.me/StratfordSchool_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Запишитесь
        </a>{" "}
        на пробный урок, чтобы проверить уровень владения языком, получить
        рекомендации нашего преподавателя, и узнать все подробности о процессе
        подготовки к экзаменам Cambridge English Language Assessment,
        материалах, а также условиях записи на курс.
      </p>
    </section>
  );
}

export default Cambridge;
