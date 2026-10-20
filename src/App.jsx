import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './layout/Navbar/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Bressani from './pages/Bressani/Bressani.jsx';
import AllWorks from './pages/AllWorks/AllWorks.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-stone-800 grid grid-rows-[auto_1fr_auto]'>
        <Navbar/>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/bressani' element={<Bressani/>}/>
            <Route path='/all-works' element={<AllWorks/>}/>         
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
