import React from 'react';
import './App.css';
import Home from "./Routes/home"
import Project from "./Routes/Project"
import Contact from "./Routes/Contact"
import About from "./Routes/About"
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
