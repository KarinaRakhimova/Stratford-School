import "./Main.css";
import MyCarousel from "../Carousel/Carousel";
function Main() {
  return(
    <section className="main">
        <p className="main__description">Языковой центр Stratford School.
        С вами с 2012 года</p>
        <MyCarousel/>
      </section>
  )
}

export default Main;
