import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import "./Carousel.css";
import image1 from "../../images/adults courses.jpg";
import image2 from "../../images/exams.jpg";
import image3 from "../../images/group-friends-happy-be-back-university.jpg"
import { Link, NavLink } from "react-router-dom";

const MyCarousel = () => (
  <Carousel autoPlay={true} showThumbs={false} infiniteLoop={false} showStatus={false}>
    <div>
    <Link to="/oge">
      <img alt="" src={image1} style={{borderRadius: '25px'}}/>
      <p className="legend_important">Подготовка к ОГЭ/ЕГЭ</p>
    </Link></div>
    <div><Link to="/childrenSpeaking">
      <img alt="" src={image2} style={{borderRadius: '25px'}}/>
      <p className="legend_important">Разговорный для школьников</p></Link>
    </div>
    <div><Link to="/speaking">
      <img alt="" src={image3} style={{borderRadius: '25px'}}/>
      <p className="legend_important">Разговорный для взрослых</p></Link>
    </div>
    <div><Link to="/children">
      <img alt="" src={image3} style={{borderRadius: '25px'}}/>
      <p className="legend_important">Курсы для детей</p></Link>
    </div>
    <div><Link to="/adults">
      <img alt="" src={image3} style={{borderRadius: '25px'}}/>
      <p className="legend_important">Курсы для взрослых</p></Link>
    </div>
  </Carousel>
);

export default MyCarousel;
