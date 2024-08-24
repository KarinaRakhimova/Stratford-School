import "./Course.css";

function Course({description, src}) {
  return(
    <article className="course">
      <div className="course__container">
        <img className="course__image" src={src} alt=""/>
        <p className="course__description">{description}</p>
      </div>
    </article>
  )
}
export default Course;
