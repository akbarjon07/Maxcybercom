import React from 'react';
import { useTranslation } from "react-i18next";
import "./about.css";
import Bg from '../../assets/images/ab.jpeg';
import Bg2 from '../../assets/images/abo.jpeg';

const About = () => {

  const { t } = useTranslation();

  return (
    <section className='about-section'>
        <div className="container about-section__container">
            <div className='about-section__top flex items-center'>
                <div className='about-section__content'>
                    <h2 className='about-section__content-title'>{t('about us')} <span style={{color:'#8C0F95'}}>?</span></h2>

                    <p className='about-section__content-desc'>{t('about content')}</p>
                </div>

                <div className='about-section__image-content ml-[90px]'>
                    <div className='about-section__image-content'>
                        <img src={Bg} alt="image" width={502} height={340}/>

                        <div className='about-section__edu'>
                            <h3 className='about-section__edu-title'>{t('practice')}</h3>

                            <ul className='about-section__edu-list'>
                                <li className='about-section__edu-item'>Core and Enterprise Systems</li>
                                <li className='about-section__edu-item'>Platform and Product Development</li>
                                <li className='about-section__edu-item'>API & Integration & Modernization</li>
                                <li className='about-section__edu-item'>MACH (Modern Composable Architecture) </li>
                                <li className='about-section__edu-item'>DevOps in Fintech , Edtech, Travel Tech</li>
                                <li className='about-section__edu-item'>DevOps in GIS (geographic information systems)</li>
                                <li className='about-section__edu-item'>DevOps of Mobile Applications</li>
                                <li className='about-section__edu-item'>Integration of AI</li>
                                <li className='about-section__edu-item'>Quality Engineering</li>
                                <li className='about-section__edu-item'>Technical support and maintenance</li>
                            </ul>
                        </div>
                    </div>

                    <div className='about-section__image-content mt-[16px]'>
                        <img src={Bg2} alt="image" width={490} height={327}/>

                        <div className='about-section__edu'>
                            <h3 className='about-section__edu-title'>{t('ai')}</h3>

                            <ul className='about-section__edu-list'>
                                <li className='about-section__edu-item'>Core and Enterprise Systems</li>
                                <li className='about-section__edu-item'>Platform and Product Development</li>
                                <li className='about-section__edu-item'>API & Integration & Modernization</li>
                                <li className='about-section__edu-item'>MACH (Modern Composable Architecture) </li>
                                <li className='about-section__edu-item'>DevOps in Fintech , Edtech, Travel Tech</li>
                                <li className='about-section__edu-item'>DevOps in GIS (geographic information systems)</li>
                                <li className='about-section__edu-item'>DevOps of Mobile Applications</li>
                                <li className='about-section__edu-item'>Integration of AI</li>
                                <li className='about-section__edu-item'>Quality Engineering</li>
                                <li className='about-section__edu-item'>Technical support and maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About