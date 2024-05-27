import React from 'react';
import "./hero.css";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <section className='hero-section'>
        <div className="container mx-auto">
            <div className='hero-section__content flex flex-col items-center justify-center'>
                <h1 className='hero-section__heading'>{t('hero title')}</h1>

                <p className='hero-section__desc'>{t('hero content')}</p>

                <Link to='contacts'>
                  <button className='hero-section__btn'>{t('contact us')}</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero