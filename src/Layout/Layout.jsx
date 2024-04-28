import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contacts from '../pages/Contacts/Contacts';
import Services from '../pages/Sevices/Services'
import Blog from '../pages/Blog/Blog';
import Portfolio from '../pages/Portfolio/Portfolio';
import Career from '../pages/Career/Career';


const Layout = () => {
  return (
    <>
        <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blogs' element={<Blog/>}/>
                <Route path='/career' element={<Career/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>

        <Footer/>
    </>
  )
}

export default Layout