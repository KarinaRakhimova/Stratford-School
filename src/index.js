import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import License from './components/License';
import KidsProgramms from './components/KidsProgramms';
import Header from './components/Header';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/license' element={<License/>}/>
      <Route path='/children' element={
        <>
        <Header/>
        <Menu/>
      <KidsProgramms/>
      </>
      }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

