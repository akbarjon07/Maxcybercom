import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contacts from '../pages/Contacts/Contacts';
import Services from '../pages/Sevices/Services'
import Blog from '../pages/Blog/Blog';
import Portfolio from '../pages/Portfolio/Portfolio';
import Career from '../pages/Career/Career';
import PortfolioSingle from '../pages/PortfolioSingle/PortfolioSingle';
import JobApply from '../pages/JobApply/JobApply';
import BlogSingle from '../pages/BlogSingle/BlogSingle';
import ServiceSingle from '../pages/ServiceSingle/ServiceSingle';


const Layout = () => {
  return (
    <>
        <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<AboutUs/>}/>
                <Route path='contacts' element={<Contacts/>}/>
                <Route path='services' element={<Services/>}/>
                <Route path='service' element={<ServiceSingle/>}/>
                <Route path='blogs' element={<Blog/>}/>
                <Route path='blog' element={<BlogSingle/>}/>
                <Route path='career' element={<Career/>}/>
                <Route path='job-apply' element={<JobApply/>}/>
                <Route path='portfolio' element={<Portfolio/>}/>
                <Route path='work' element={<PortfolioSingle/>}/>
            </Routes>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout