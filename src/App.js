import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import License from "./components/License/License";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import List from "./components/List/List";
import Faq from "./components/Faq/Faq";
import {
  adultPrograms,
  childrenPrograms,
  examsPrograms,
  mainPrograms,
} from "./utils/constants";

import AboutUs from "./components/About us/AboutUs";
import Online from "./components/Online";
import FlyHighList from "./components/FlyHighList";
import EyesOpenList from "./components/EyesOpenList";
import SolutionsList from "./components/SolutionsList";
import Discounts from "./components/Discounts/Discounts";
import OGE from "./components/OGE";
import Prices from "./components/Prices";
import Footer from "./components/Footer/Footer";
import InfoForTeachers from "./components/InfoForTeachers/InfoForTeachers";
import Levels from "./components/Levels";
import Specialized from "./components/Specialized";
import Speaking from "./components/Speaking";
import ChildrenSpeaking from "./components/ChildrenSpeaking";
import IELTS from "./components/IELTS";
import Cambridge from "./components/Cambridge";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Menu />
            <Main />
                 <List programs={mainPrograms}  />
             <Faq />
               <Footer />
            </>
          }
        />
        <Route
          path="/programs"
          element={
            <>
              <Header />
              <Menu />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/license"
          element={
            <>
              <Header />
              <Menu />
              <License />
              <Footer />
            </>
          }
        />
        <Route
          path="/adults"
          element={
            <>
              <Header />
              <Menu />
              <List programs={adultPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/levels"
          element={
            <>
              <Header />
              <Menu />
              <Levels />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/specialized"
          element={
            <>
              <Header />
              <Menu />
              <Specialized />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/speaking"
          element={
            <>
              <Header />
              <Menu />
              <Speaking />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/children"
          element={
            <>
              <Header />
              <Menu />
              <List programs={childrenPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/primary"
          element={
            <>
              <Header />
              <Menu />
              <FlyHighList />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/middle"
          element={
            <>
              <Header />
              <Menu />
              <EyesOpenList />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/high"
          element={
            <>
              <Header />
              <Menu />
              <SolutionsList />
              <Footer />
            </>
          }
        />
                <Route
          path="/childrenSpeaking"
          element={
            <>
              <Header />
              <Menu />
              <ChildrenSpeaking />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/oge"
          element={
            <>
              <Header />
              <Menu />
              <OGE />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
                <Route
          path="/ielts"
          element={
            <>
              <Header />
              <Menu />
              <IELTS />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
                        <Route
          path="/cambridge"
          element={
            <>
              <Header />
              <Menu />
              <Cambridge />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/exams"
          element={
            <>
              <Header />
              <Menu />
              <List programs={examsPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/prices"
          element={
            <>
              <Header />
              <Menu />
              <Prices />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <>
              <Header />
              <Menu />
              <AboutUs />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/online"
          element={
            <>
              <Header />
              <Menu />
              <Online />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/discounts"
          element={
            <>
              <Header />
              <Menu />
              <Discounts />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
        <Route
          path="/infoForTeachers"
          element={
            <>
              <Header />
              <Menu />
              <InfoForTeachers />
              <List programs={mainPrograms} />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
