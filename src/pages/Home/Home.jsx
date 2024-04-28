import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Field from '../../components/Field/Field';
import Start from '../../components/Start/Start';
import Industry from '../../components/Industry/Industry';
import Clients from '../../components/Clients/Clients';
import Blogs from '../../components/Blogs/Blogs';
import Contact from '../../components/Contact/Contact';


const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Field/>
        <Start/>
        <Industry/>
        <Clients/>
        <Blogs/>
        <Contact/>
    </main>
  )
}

export default Home