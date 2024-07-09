// src/App.tsx
import React from 'react';
import {Routes } from 'react-router-dom';
import HeaderFirst from './components/HeaderFirst';
import Header from './components/Header';
import Home from './pages/Home';
import Today from './pages/Today';
import Categories from './pages/Categories';
import Thismonth from './pages/Thismonth';
import Explore from './pages/Explore';
import Featured from './pages/Featured';
import Services from './pages/Services';
import Footer from './pages/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderFirst/>
      <Header/>
      <Home/>
      <Today/>
      <Categories/>
      <Thismonth/>
      <Explore/>
      <Featured/>
      <Services/>
      <Footer/>
      
      <Routes>
        
      </Routes>
    </div>
  );
};

export default App;
