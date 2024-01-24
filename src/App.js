import "./App.css";
import React from 'react';
import { Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import mainImage from "../src/images/group-teenagers-happy-be-back-university.jpg";
import adultProgramsImage from "./images/adults courses.jpg";
import kidsProgramsImage from "./images/kids courses.jpg";
import examsProgramsImage from "./images/exams.jpg";
import License from "./components/License";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <p className="main__description">Центр изучения иностранных языков Stratford School</p>
        <img className="main__image" src={mainImage} alt="mainImage"/>
      </section>
      
      <nav>
        <ul className="menu">
          <li className="menu__item">Программы</li>
          <li className="menu__item">Цены</li>
          <li className="menu__item">Скидки и акции</li>
          <li className="menu__item">Отзывы</li>
          <li className="menu__item">О нас</li>
          <Link className="menu__item" to="/license">Лицензия</Link> 
        </ul>
      </nav>
      <section className="programs">
        <figure className="programs__item">
          <figcaption className="programs__title">Программы длы взрослых</figcaption>
          <img className="programs__image" src={adultProgramsImage} alt="adult"/>
        </figure>
        <Link to="/kidsprogramms">
        <figure className="programs__item">
         <figcaption className="programs__title">Программы для детей</figcaption>
          <img className="programs__image" src={kidsProgramsImage} alt="kids"/>
        </figure></Link>
        <figure className="programs__item">
          <figcaption className="programs__title">Программы подготовки к экзаменам</figcaption>
          <img  className="programs__image" src={examsProgramsImage} alt="exams"/>
        </figure>
        
      </section>
    </div>
  );
}

export default App;
