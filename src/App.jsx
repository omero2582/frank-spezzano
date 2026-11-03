import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './layout/Navbar/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Bressani from './pages/Bressani/Bressani.jsx';
import Books from './pages/Books/Books.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-neutral-950 grid grid-rows-[auto_1fr_auto]'>
        <Navbar/>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/bressani' element={<Bressani/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/author' element={<AboutMe/>}/>         
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
