import "./Programs.css";
import adultProgramsImage from "../../images/adults courses.jpg";
import childrenProgramsImage from "../../images/kids courses.jpg";
import examsProgramsImage from "../../images/exams.jpg";
function Programs() {
  return (
    <section className="programs">
      <article className="programs__item">
        <h2 className="programs__title">Программы длы взрослых</h2>
        <img className="programs__image" src={adultProgramsImage} alt="adult" />
        <p>
          данная программапредполагает всестороннее изучение английского языка и
          разработана для тех, кто поставил перед собой цель: овладеть языком в
          полном смысле этого выражения. Программа состоит из шести уровней:
          Beginner; Elementary; Pre-Intermediate; Intermediate;
          Upper-Intermediate; Advanced и основана на лучших методических
          пособиях по изучению английского языка Headway и New English File (от
          издательства Oxford Press), а также English Pronunciation in Use,
          Essential Grammar in Use (издательство Cambridge University Press).
        </p>
      </article>
      {/* <Link to="/children"> */}
      {/* <article className="programs__item">
        <h2 className="programs__title">Программы для детей</h2>
        <img
          className="programs__image"
          src={childrenProgramsImage}
          alt="kids"
        />
      </article>
      {/* </Link>
      <article className="programs__item">
        <h2 className="programs__title">Программы подготовки к экзаменам</h2>
        <img className="programs__image" src={examsProgramsImage} alt="exams" />
      </article> */}
    </section>
  );
}
export default Programs;
