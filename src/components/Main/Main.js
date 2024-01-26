import "./Main.css";
import mainImage from "../../images/group-teenagers-happy-be-back-university.jpg"
function Main() {
  return(
    <section className="main">
        <p className="main__description">Центр изучения иностранных языков Stratford School</p>
        <img className="main__image" src={mainImage} alt="mainImage"/>
      </section>
  )
}

export default Main;
