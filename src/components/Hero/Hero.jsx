import React from 'react';
import "./hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="container mx-auto">
            <div className='hero-section__content flex flex-col items-center justify-center'>
                <h1 className='hero-section__heading'>The future has come</h1>

                <p className='hero-section__desc'>The future has already come and there’s no time to waste</p>

                <Link to='contacts'>
                  <button className='hero-section__btn'>Contact with us</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero