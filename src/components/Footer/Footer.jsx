import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container mx-auto footer__container">
            <div className='footer__wrapper'>
                <div className='footer__logo-wrapper'>
                    <Link className='flex items-center' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <rect x="1.87207" y="1.84961" width="2.56797" height="2.56797" fill="#1048A9"/>
                            <rect x="1.87207" y="9.55371" width="2.56797" height="2.56797" fill="#1048A9"/>
                            <rect x="9.57617" y="1.84961" width="2.56797" height="2.56797" fill="#1048A9"/>
                            <rect x="9.57617" y="9.55371" width="2.56797" height="2.56797" fill="#1048A9"/>
                            <rect x="7.00879" y="0.0302734" width="2.56797" height="2.56797" transform="rotate(45 7.00879 0.0302734)" fill="#1048A9"/>
                            <rect x="12.1416" y="5.16602" width="2.56797" height="2.56797" transform="rotate(45 12.1416 5.16602)" fill="#1048A9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4161 13.7337C12.9867 13.8193 13.3393 13.7167 13.528 13.528C13.7167 13.3393 13.8193 12.9867 13.7337 12.4161C13.6503 11.86 13.3969 11.1678 12.9861 10.3834C12.7079 9.85205 12.3601 9.28349 11.9504 8.69244L11.6094 8.26567L12.1334 8.50938C13.7797 10.8761 14.4546 12.9041 13.6794 13.6794C12.5261 14.8326 8.60083 12.777 4.91193 9.08807C1.22302 5.39917 -0.832566 1.47386 0.320646 0.320646C1.0556 -0.414306 2.91648 0.154036 5.12452 1.61786L5.30982 1.75211L5.53719 2.1801L4.9409 1.80148C4.48102 1.49789 4.03716 1.23412 3.6166 1.01389C2.83215 0.603092 2.13997 0.349726 1.58386 0.266301C1.01327 0.180704 0.660679 0.283252 0.471965 0.471966C0.283252 0.660679 0.180704 1.01327 0.266301 1.58386C0.349726 2.13997 0.603092 2.83215 1.01389 3.6166C1.83393 5.18253 3.25755 7.07166 5.09294 8.90706C6.92834 10.7425 8.81747 12.1661 10.3834 12.9861C11.1678 13.3969 11.86 13.6503 12.4161 13.7337Z" fill="#1048A9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61643 1.01437C3.28498 0.8408 2.97001 0.695334 2.6748 0.578918V0.311523C3.7999 0.733519 5.18277 1.5688 6.63376 2.71805V3.0451C5.56741 2.18588 4.53617 1.49602 3.61643 1.01437ZM10.6394 6.98216C11.6463 8.18438 12.4466 9.35403 12.9859 10.3839C13.3967 11.1683 13.6501 11.8605 13.7335 12.4166C13.8191 12.9872 13.7166 13.3398 13.5279 13.5285C13.3392 13.7172 12.9866 13.8198 12.416 13.7342C11.8599 13.6508 11.1677 13.3974 10.3832 12.9866C9.96268 12.7664 9.51881 12.5026 9.05893 12.199L8.46264 11.8204L8.69001 12.2484L8.87531 12.3826C11.0834 13.8464 12.9442 14.4148 13.6792 13.6798C14.6313 12.7277 13.3961 9.88591 10.8602 6.84767V6.98216H10.6394Z" fill="#1048A9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57105 12.3713C7.90731 11.9186 7.21621 11.3889 6.51776 10.793L5.19238 12.1183L7.00822 13.9342L8.57105 12.3713Z" fill="#1048A9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19738 7.46956C2.6017 6.77054 2.0724 6.07902 1.62023 5.41504L0.0537109 6.98156L1.86954 8.79739L3.19738 7.46956Z" fill="#1048A9"/>
                        </svg>

                        <p className='footer__logo-name'>MAXCYBERCOM</p>
                    </Link>

                    <p className='footer__logo-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p>

                    <ul className='footer__logo-list'>
                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="https://www.instagram.com/" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5998 5.59981H19.1998M7.19981 0.799805H16.7998C20.3344 0.799805 23.1998 3.66518 23.1998 7.19981V16.7998C23.1998 20.3344 20.3344 23.1998 16.7998 23.1998H7.1998C3.66518 23.1998 0.799805 20.3344 0.799805 16.7998V7.1998C0.799805 3.66518 3.66518 0.799805 7.19981 0.799805ZM11.9998 16.7998C9.34884 16.7998 7.19981 14.6508 7.19981 11.9998C7.19981 9.34884 9.34884 7.19981 11.9998 7.19981C14.6508 7.19981 16.7998 9.34884 16.7998 11.9998C16.7998 14.6508 14.6508 16.7998 11.9998 16.7998Z" stroke="#376FFF"/>
                                </svg>
                            </a>
                        </li>

                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="https://www.facebook.com/" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.7996 23.1998C6.61402 23.1998 1.59961 18.1854 1.59961 11.9998C1.59961 5.81422 6.61402 0.799805 12.7996 0.799805C18.9852 0.799805 23.9996 5.81422 23.9996 11.9998C23.9996 18.1854 18.9852 23.1998 12.7996 23.1998ZM12.7996 23.1998V10.3998C12.7996 8.63249 14.2323 7.19981 15.9996 7.19981H16.7996M8.79961 13.5998H16.7996" stroke="#376FFF"/>
                                </svg>
                            </a>
                        </li>

                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="https://t.me/maxcyber_com" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M23.7994 2.40039L1.39941 10.4004L7.79941 13.6004L17.3994 7.20039L10.9994 15.2004L20.5994 21.6004L23.7994 2.40039Z" stroke="#376FFF" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='footer__list-wrapper'>
                    <ul className='footer__company-list'>
                        <li className='footer__company-item title'>Company</li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Our mission</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Team</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Careers</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Contact</p>
                        </li>
                    </ul>

                    <ul className='footer__company-list'>
                        <li className='footer__company-item title'>Projects</li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Case studies</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Button</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Button</p>
                        </li>

                        <li className='footer__company-item flex items-center'>
                            <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p className='footer__company-desc'>Button</p>
                        </li>
                    </ul>

                    <ul className='footer__company-list'>
                    <li className='footer__company-item title'>Industries</li>

                    <li className='footer__company-item flex items-center'>
                        <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p className='footer__company-desc'>Logisitcs</p>
                    </li>

                    <li className='footer__company-item flex items-center'>
                        <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p className='footer__company-desc'>Travel</p>
                    </li>

                    <li className='footer__company-item flex items-center'>
                        <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p className='footer__company-desc'>Fintech</p>
                    </li>

                    <li className='footer__company-item flex items-center'>
                        <svg className='footer__company-svg' xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.375 0.75L6.625 6L1.375 11.25" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p className='footer__company-desc'>Education</p>
                    </li>
                    </ul>
                </div>
            </div>

            <span className='footer__span'></span>

            <p className='footer__company-name'>2024 Maxcybercom LLC</p>
        </div>
    </footer>
  )
}

export default Footer