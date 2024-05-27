import React from 'react';
import { useTranslation } from "react-i18next";
import './contact.css';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section className='contact-section'>
        <div className="container contact-section__container">
            <ul className='contact-section__list'>
                <li className='contact-section__item'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="24" cy="24" r="24" fill="#8C0F95"/>
                        <path d="M31.2037 27.25L28.6637 26.96C28.0537 26.89 27.4537 27.1 27.0237 27.53L25.1837 29.37C22.3537 27.93 20.0337 25.62 18.5937 22.78L20.4437 20.93C20.8737 20.5 21.0837 19.9 21.0137 19.29L20.7237 16.77C20.6037 15.76 19.7537 15 18.7337 15H17.0037C15.8737 15 14.9337 15.94 15.0037 17.07C15.5337 25.61 22.3637 32.43 30.8937 32.96C32.0237 33.03 32.9637 32.09 32.9637 30.96V29.23C32.9737 28.22 32.2137 27.37 31.2037 27.25Z" fill="#8C0F95"/>
                    </svg>

                    <div className='contact-section__item-wrapper ml-[24px]'>
                        <p className='contact-section__item-desc'>{t("phone")}</p>

                        <a href='tel:+998902537753' className='contact-section__item-data'>+998 90 253 77 53</a>
                    </div>
                </li>

                <li className='contact-section__item'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="24" cy="24" r="24" fill="#8C0F95"/>
                        <path d="M32 16H16C14.9 16 14 16.9 14 18V30C14 31.1 14.9 32 16 32H32C33.1 32 34 31.1 34 30V18C34 16.9 33.1 16 32 16ZM31.6 20.25L25.06 24.34C24.41 24.75 23.59 24.75 22.94 24.34L16.4 20.25C16.15 20.09 16 19.82 16 19.53C16 18.86 16.73 18.46 17.3 18.81L24 23L30.7 18.81C31.27 18.46 32 18.86 32 19.53C32 19.82 31.85 20.09 31.6 20.25Z" fill="#8C0F95"/>
                    </svg>


                    <div className='contact-section__item-wrapper ml-[24px]'>
                        <p className='contact-section__item-desc'>{t("email")}</p>

                        <a href='mailto:info@maxcybercom.uz' className='contact-section__item-data'>info@maxcybercom.uz</a>
                    </div>
                </li>

                <li className='contact-section__item'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="24" cy="24" r="24" fill="#8C0F95"/>
                        <path d="M24 24C25.1 24 26 23.1 26 22C26 20.9 25.1 20 24 20C22.9 20 22 20.9 22 22C22 23.1 22.9 24 24 24ZM24 14C28.2 14 32 17.22 32 22.2C32 25.38 29.55 29.12 24.66 33.43C24.28 33.76 23.71 33.76 23.33 33.43C18.45 29.12 16 25.38 16 22.2C16 17.22 19.8 14 24 14Z" fill="#8C0F95"/>
                    </svg>

                    <div className='contact-section__item-wrapper ml-[24px]'>
                        <p className='contact-section__item-desc'>{t("address")}</p>

                        <p className='contact-section__item-data'>Uzbekistan, Kokand, Guzar 12</p>
                    </div>
                </li>
            </ul>

            <div className='contact-section__form-wrapper'>
                <h4 className='contact-section__form-title'>{t("send message")}</h4>

                <p className='contact-section__form-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>

                <form className='contact-section__form'>
                    <div className='contact-section__input-wrapper flex items-center mb-[16px] gap-[24px]'>
                        <input className='contact-section__form-input' placeholder='Email' type="email" />

                        <input className='contact-section__form-input' placeholder='Full name' type="text" />
                    </div>

                    <textarea className='contact-section__form-message' placeholder='Your message' rows="10"></textarea>

                    <button className='contact-section__form-btn'>{t("send")}</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact