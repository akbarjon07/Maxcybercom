import React from 'react';
import { useTranslation } from "react-i18next";
import './industry.css';
import Edu from '../../assets/images/Edu.jpeg';
import Fintech from '../../assets/images/Fintech.jpeg';
import Government from '../../assets/images/Government.jpeg';
import Medicine from  '../../assets/images/Medicine.jpeg';
import Social from  '../../assets/images/Social.jpeg'
import Travel from '../../assets/images/Travel.jpeg';

const Industry = () => {

    const { t } = useTranslation();

  return (
    <section className='industry-section'>
        <div className="container">
            <h2 className='industry-section__title'>{t('industries title')}</h2>

            <div className='industry-section__list'>
                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Fintech} alt="Fintech" width={577} height={395}/>

                    <p className='industry-section__item-desc'>{t('fintech')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Travel} alt="Travel" width={577} height={395}/>

                    <p className='industry-section__item-desc'>{t('travel')}</p>
                </div>
            </div>

            <div className='industry-section__list2'>
                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Social} alt="Social" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('social')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Medicine} alt="Medicine" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('medicine')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Edu} alt="Edu" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('edu')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Government} alt="Government" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('government')}</p>
                </div>
            </div>

            <div className="industry-section__list-responsive">
                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Fintech} alt="Fintech" width={577} height={395}/>

                    <p className='industry-section__item-desc'>{t('fintech')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Travel} alt="Travel" width={577} height={395}/>

                    <p className='industry-section__item-desc'>{t('travel')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Social} alt="Social" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('social')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Medicine} alt="Medicine" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('medicine')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Edu} alt="Edu" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('edu')}</p>
                </div>

                <div className='industry-section__item'>
                    <img className='industry-section__item-img' src={Government} alt="Government" width={286} height={206}/>

                    <p className='industry-section__item-desc'>{t('government')}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Industry