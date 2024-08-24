import "./Courses.css";
import eyesOpen1 from "../images/eyesOpen1.jpg";
import eyesOpen2 from "../images/eyesOpen2.jpg";
import eyesOpen3 from "../images/eyesOpen3.jpg";
import eyesOpen4 from "../images/eyesOpen4.jpg";
function EyesOpenList() {
  return (
    <section className="courses">
      <article className="course">
        <img className="course__image" src={eyesOpen1} alt="eyesOpen1" />
        <div>
          <p className="course__title">
            Eyes Open 1 – предназначен для формирования базовых навыков
            английского языка. Данный курс будет полезен тем, кто изучал язык в
            школе, но не овладел базовыми знаниями. Курс поможет «заполнить
            пробелы», отработать полученные знания и заложить основы английского
            языка для уверенного продолжения изучения. По окончании данного
            курса учащийся может продолжить обучение на уровне А2 по
            международной шкале CEFR.
          </p>
        </div>
      </article>
      <article className="course">
        <img className="course__image" src={eyesOpen2} alt="eyesOpen2" />
        <div>
          <p className="course__title">
            Eyes Open 2 – предназначен для ребят, которые уже обладают базовыми
            знаниями, получившими на уровне Elementary (A1). Курс рассчитан на
            отработку и углубление базовых навыков владения иностранным языком:
            использование языка в повседневной бытовой среде, на разные темы (от
            общения в магазине до обсуждения проблем здорового питания). Во
            время обучения учащиеся прорабатывают все четыре аспекта владения
            языком: восприятие речи на слух, чтение, письмо, отработка
            грамматических конструкций. По окончании данного курса учащийся
            может продолжить обучение на уровне В1 по международной шкале CEFR.
          </p>
        </div>
      </article>
      <article className="course">
        <img className="course__image" src={eyesOpen3} alt="eyesOpen3" />
        <div>
          <p className="course__title">
            Eyes Open 3 – предназначен для закрепления, отработки и углубления
            знаний полученных на предыдущем уровне Pre-Intermediate (A2). Курс
            рассчитан на расширение тематик и уверенное их использование в
            англо-говорящей среде. Ребята учатся писать письма, общаться на
            социально-значимые темы и знакомятся с заданиями формата
            международных экзаменов. По окончании данного курса, учащийся может
            продолжить обучение на уровне B2 по международной шкале CEFR.
          </p>
        </div>
      </article>
      <article className="course">
        <img className="course__image" src={eyesOpen4} alt="eyesOpen4" />
        <div>
          <p className="course__title">
            Eyes Open 4 - предназначен для закрепления, отработки и углубления
            знаний полученных на предыдущем уровне Intermediate (В1). Курс
            рассчитан на отработку полученных ранее знаний, углубленного
            изучения грамматики и расширенного использования
          </p>
        </div>
      </article>
    </section>
  );
}
export default EyesOpenList;
