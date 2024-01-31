import "./Programs.css";
import adultProgramsImage from "../../images/adults courses.jpg";
import childrenProgramsImage from "../../images/kids courses.jpg";
import examsProgramsImage from "../../images/exams.jpg";
import { Link } from "react-router-dom";
function Programs() {
  return (
    <section className="programs">
      <Link to="/adults" className="programs__item">
        <h2 className="programs__title">Программы для взрослых</h2>
        <div className="programs__container">
          <img
            className="programs__image"
            src={adultProgramsImage}
            alt="adult"
          />
          <p className="programs__description">
            Данная программа предполагает всестороннее изучение английского
            языка и разработана для тех, кто поставил перед собой цель: овладеть
            языком в полном смысле этого выражения. Программа состоит из шести
            уровней: Beginner; Elementary; Pre-Intermediate; Intermediate;
            Upper-Intermediate; Advanced и основана на лучших методических
            пособиях по изучению английского языка Headway и New English File
            (от издательства Oxford Press), а также English Pronunciation in
            Use, Essential Grammar in Use (издательство Cambridge University
            Press).
          </p>
        </div>
      </Link>
      <Link to="/children" className="programs__item">
        <h2 className="programs__title">Программы для детей</h2>
        <div className="programs__container">
          <img
            className="programs__image"
            src={childrenProgramsImage}
            alt="adult"
          />
          <p className="programs__description">
            Для ребят от 4-6 лет мы разработали две универсальные программы,
            которые без сомнений понравятся Вашему ребенку и порадуют Вас его
            успехами.
          </p>
        </div>
      </Link>
      <Link to="/exams" className="programs__item">
        <h2 className="programs__title">Подготовка к экзаменам</h2>
        <div className="programs__container">
          <img
            className="programs__image"
            src={examsProgramsImage}
            alt="adult"
          />
          <p className="programs__description">
            Современные методики изучения иностранных языков предполагают не
            только наличие прогрессивных методических пособий, но и
            необходимость контроля качества процесса обучения, а именно
            возможность определить каким уровнем языка владеете Вы и какая
            программа необходима для достижения поставленных Вами целей.
          </p>
        </div>
      </Link>
    </section>
  );
}
export default Programs;
