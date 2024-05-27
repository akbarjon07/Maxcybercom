import React, {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Loader from '../components/Loader/Loader';


const Layout = () => {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
        <Header/>
          {loading && <Loader />}
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='about' element={<AboutUs/>}/>
              <Route path='contacts' element={<Contacts/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='services/:id' element={<ServiceSingle/>}/>
              <Route path='blogs' element={<Blog/>}/>
              <Route path='blogs/:id' element={<BlogSingle/>}/>
              <Route path='career' element={<Career/>}/>
              <Route path='career/:id' element={<JobApply/>}/>
              <Route path='portfolio' element={<Portfolio/>}/>
              <Route path='portfolio/:id' element={<PortfolioSingle/>}/>
            </Routes>
        <Footer/>
    </>
  )
}

export default Layout