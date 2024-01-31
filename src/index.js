import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import License from "./components/License";
import ChildrenPrograms from "./components/ChildrenPrograms/ChildrenPrograms";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Programs from "./components/Programs/Programs";
import Main from "./components/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
               <Menu />
              <Main/>
              <Programs />
              <App />
            </>
          }
        />
        <Route path="/license" element={<License />} />
        <Route
          path="/adults"
          element={
            <>
              <Header />
              <Menu />
            </>
          }
        />
        <Route
          path="/children"
          element={
            <>
              <Header />
              <Menu />
              <ChildrenPrograms />
            </>
          }
        />
        <Route
          path="/exams"
          element={
            <>
              <Header />
              <Menu />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
