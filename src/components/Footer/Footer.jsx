import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container mx-auto footer__container">
            <div className='footer__wrapper'>
                <div className='footer__logo-wrapper'>
                    <svg width="106" height="14" viewBox="0 0 106 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <path d="M22.83 11V4H24.17L27.15 8.94H26.44L29.37 4H30.7L30.72 11H29.2L29.19 6.33H29.47L27.13 10.26H26.4L24.01 6.33H24.35V11H22.83ZM31.4608 11L34.5808 4H36.1808L39.3108 11H37.6108L35.0508 4.82H35.6908L33.1208 11H31.4608ZM33.0208 9.5L33.4508 8.27H37.0508L37.4908 9.5H33.0208ZM38.8659 11L41.8759 6.85V8.03L38.9959 4H40.8359L42.8259 6.81L42.0559 6.82L44.0159 4H45.7759L42.9159 7.96V6.8L45.9459 11H44.0759L42.0159 8.03H42.7559L40.7259 11H38.8659ZM49.9007 11.12C49.3607 11.12 48.8574 11.0333 48.3907 10.86C47.9307 10.68 47.5307 10.4267 47.1907 10.1C46.8507 9.77333 46.584 9.39 46.3907 8.95C46.204 8.51 46.1107 8.02667 46.1107 7.5C46.1107 6.97333 46.204 6.49 46.3907 6.05C46.584 5.61 46.8507 5.22667 47.1907 4.9C47.5374 4.57333 47.9407 4.32333 48.4007 4.15C48.8607 3.97 49.364 3.88 49.9107 3.88C50.5174 3.88 51.064 3.98667 51.5507 4.2C52.044 4.40667 52.4574 4.71333 52.7907 5.12L51.7507 6.08C51.5107 5.80667 51.244 5.60333 50.9507 5.47C50.6574 5.33 50.3374 5.26 49.9907 5.26C49.664 5.26 49.364 5.31333 49.0907 5.42C48.8174 5.52667 48.5807 5.68 48.3807 5.88C48.1807 6.08 48.024 6.31667 47.9107 6.59C47.804 6.86333 47.7507 7.16667 47.7507 7.5C47.7507 7.83333 47.804 8.13667 47.9107 8.41C48.024 8.68333 48.1807 8.92 48.3807 9.12C48.5807 9.32 48.8174 9.47333 49.0907 9.58C49.364 9.68667 49.664 9.74 49.9907 9.74C50.3374 9.74 50.6574 9.67333 50.9507 9.54C51.244 9.4 51.5107 9.19 51.7507 8.91L52.7907 9.87C52.4574 10.2767 52.044 10.5867 51.5507 10.8C51.064 11.0133 50.514 11.12 49.9007 11.12ZM55.5661 11V8.14L55.9361 9.12L52.8561 4H54.5761L56.9361 7.93H55.9461L58.3161 4H59.9061L56.8261 9.12L57.1861 8.14V11H55.5661ZM60.5253 11V4H63.9453C64.8253 4 65.4853 4.16667 65.9253 4.5C66.372 4.83333 66.5953 5.27333 66.5953 5.82C66.5953 6.18667 66.5053 6.50667 66.3253 6.78C66.1453 7.04667 65.8986 7.25333 65.5853 7.4C65.272 7.54667 64.912 7.62 64.5053 7.62L64.6953 7.21C65.1353 7.21 65.5253 7.28333 65.8653 7.43C66.2053 7.57 66.4686 7.78 66.6553 8.06C66.8486 8.34 66.9453 8.68333 66.9453 9.09C66.9453 9.69 66.7086 10.16 66.2353 10.5C65.762 10.8333 65.0653 11 64.1453 11H60.5253ZM62.1353 9.78H64.0253C64.4453 9.78 64.762 9.71333 64.9753 9.58C65.1953 9.44 65.3053 9.22 65.3053 8.92C65.3053 8.62667 65.1953 8.41 64.9753 8.27C64.762 8.12333 64.4453 8.05 64.0253 8.05H62.0153V6.87H63.7453C64.1386 6.87 64.4386 6.80333 64.6453 6.67C64.8586 6.53 64.9653 6.32 64.9653 6.04C64.9653 5.76667 64.8586 5.56333 64.6453 5.43C64.4386 5.29 64.1386 5.22 63.7453 5.22H62.1353V9.78ZM69.6618 6.82H73.0318V8.08H69.6618V6.82ZM69.7818 9.7H73.5918V11H68.1718V4H73.4618V5.3H69.7818V9.7ZM74.8808 11V4H77.9108C78.5374 4 79.0774 4.10333 79.5308 4.31C79.9841 4.51 80.3341 4.8 80.5808 5.18C80.8274 5.56 80.9508 6.01333 80.9508 6.54C80.9508 7.06 80.8274 7.51 80.5808 7.89C80.3341 8.26333 79.9841 8.55 79.5308 8.75C79.0774 8.95 78.5374 9.05 77.9108 9.05H75.7808L76.5008 8.34V11H74.8808ZM79.3308 11L77.5808 8.46H79.3108L81.0808 11H79.3308ZM76.5008 8.52L75.7808 7.76H77.8208C78.3208 7.76 78.6941 7.65333 78.9408 7.44C79.1874 7.22 79.3108 6.92 79.3108 6.54C79.3108 6.15333 79.1874 5.85333 78.9408 5.64C78.6941 5.42667 78.3208 5.32 77.8208 5.32H75.7808L76.5008 4.55V8.52ZM85.5843 11.12C85.0443 11.12 84.541 11.0333 84.0743 10.86C83.6143 10.68 83.2143 10.4267 82.8743 10.1C82.5343 9.77333 82.2676 9.39 82.0743 8.95C81.8876 8.51 81.7943 8.02667 81.7943 7.5C81.7943 6.97333 81.8876 6.49 82.0743 6.05C82.2676 5.61 82.5343 5.22667 82.8743 4.9C83.221 4.57333 83.6243 4.32333 84.0843 4.15C84.5443 3.97 85.0476 3.88 85.5943 3.88C86.201 3.88 86.7476 3.98667 87.2343 4.2C87.7276 4.40667 88.141 4.71333 88.4743 5.12L87.4343 6.08C87.1943 5.80667 86.9276 5.60333 86.6343 5.47C86.341 5.33 86.021 5.26 85.6743 5.26C85.3476 5.26 85.0476 5.31333 84.7743 5.42C84.501 5.52667 84.2643 5.68 84.0643 5.88C83.8643 6.08 83.7076 6.31667 83.5943 6.59C83.4876 6.86333 83.4343 7.16667 83.4343 7.5C83.4343 7.83333 83.4876 8.13667 83.5943 8.41C83.7076 8.68333 83.8643 8.92 84.0643 9.12C84.2643 9.32 84.501 9.47333 84.7743 9.58C85.0476 9.68667 85.3476 9.74 85.6743 9.74C86.021 9.74 86.341 9.67333 86.6343 9.54C86.9276 9.4 87.1943 9.19 87.4343 8.91L88.4743 9.87C88.141 10.2767 87.7276 10.5867 87.2343 10.8C86.7476 11.0133 86.1976 11.12 85.5843 11.12ZM92.8218 11.12C92.2685 11.12 91.7551 11.03 91.2818 10.85C90.8151 10.67 90.4085 10.4167 90.0618 10.09C89.7218 9.76333 89.4551 9.38 89.2618 8.94C89.0751 8.5 88.9818 8.02 88.9818 7.5C88.9818 6.98 89.0751 6.5 89.2618 6.06C89.4551 5.62 89.7251 5.23667 90.0718 4.91C90.4185 4.58333 90.8251 4.33 91.2918 4.15C91.7585 3.97 92.2651 3.88 92.8118 3.88C93.3651 3.88 93.8718 3.97 94.3318 4.15C94.7985 4.33 95.2018 4.58333 95.5418 4.91C95.8885 5.23667 96.1585 5.62 96.3518 6.06C96.5451 6.49333 96.6418 6.97333 96.6418 7.5C96.6418 8.02 96.5451 8.50333 96.3518 8.95C96.1585 9.39 95.8885 9.77333 95.5418 10.1C95.2018 10.42 94.7985 10.67 94.3318 10.85C93.8718 11.03 93.3685 11.12 92.8218 11.12ZM92.8118 9.74C93.1251 9.74 93.4118 9.68667 93.6718 9.58C93.9385 9.47333 94.1718 9.32 94.3718 9.12C94.5718 8.92 94.7251 8.68333 94.8318 8.41C94.9451 8.13667 95.0018 7.83333 95.0018 7.5C95.0018 7.16667 94.9451 6.86333 94.8318 6.59C94.7251 6.31667 94.5718 6.08 94.3718 5.88C94.1785 5.68 93.9485 5.52667 93.6818 5.42C93.4151 5.31333 93.1251 5.26 92.8118 5.26C92.4985 5.26 92.2085 5.31333 91.9418 5.42C91.6818 5.52667 91.4518 5.68 91.2518 5.88C91.0518 6.08 90.8951 6.31667 90.7818 6.59C90.6751 6.86333 90.6218 7.16667 90.6218 7.5C90.6218 7.82667 90.6751 8.13 90.7818 8.41C90.8951 8.68333 91.0485 8.92 91.2418 9.12C91.4418 9.32 91.6751 9.47333 91.9418 9.58C92.2085 9.68667 92.4985 9.74 92.8118 9.74ZM97.8593 11V4H99.1993L102.179 8.94H101.469L104.399 4H105.729L105.749 11H104.229L104.219 6.33H104.499L102.159 10.26H101.429L99.0393 6.33H99.3793V11H97.8593Z" fill="#1048A9"/>
                    </svg>

                    <p className='footer__logo-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p>

                    <ul className='footer__logo-list'>
                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5998 5.59981H19.1998M7.19981 0.799805H16.7998C20.3344 0.799805 23.1998 3.66518 23.1998 7.19981V16.7998C23.1998 20.3344 20.3344 23.1998 16.7998 23.1998H7.1998C3.66518 23.1998 0.799805 20.3344 0.799805 16.7998V7.1998C0.799805 3.66518 3.66518 0.799805 7.19981 0.799805ZM11.9998 16.7998C9.34884 16.7998 7.19981 14.6508 7.19981 11.9998C7.19981 9.34884 9.34884 7.19981 11.9998 7.19981C14.6508 7.19981 16.7998 9.34884 16.7998 11.9998C16.7998 14.6508 14.6508 16.7998 11.9998 16.7998Z" stroke="#376FFF"/>
                                </svg>
                            </a>
                        </li>

                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.7996 23.1998C6.61402 23.1998 1.59961 18.1854 1.59961 11.9998C1.59961 5.81422 6.61402 0.799805 12.7996 0.799805C18.9852 0.799805 23.9996 5.81422 23.9996 11.9998C23.9996 18.1854 18.9852 23.1998 12.7996 23.1998ZM12.7996 23.1998V10.3998C12.7996 8.63249 14.2323 7.19981 15.9996 7.19981H16.7996M8.79961 13.5998H16.7996" stroke="#376FFF"/>
                                </svg>
                            </a>
                        </li>

                        <li className='footer__logo-item'>
                            <a className='footer__logo-link' href="#">
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