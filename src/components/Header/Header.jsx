import React from 'react';
import "./header.css";
import { useRef } from 'react';
import { DropDown } from "../../components/DropDown/DropDown";
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t } = useTranslation();

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

  return (
    <header className='header'>
        <div className='header__top'>
            <div className="container flex items-center justify-between">
                <div className='header__top-left flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.703125C13.5822 0.703125 17.2969 4.41776 17.2969 9C17.2969 13.5822 13.5822 17.2969 9 17.2969C4.41776 17.2969 0.703125 13.5822 0.703125 9C0.703125 4.41776 4.41776 0.703125 9 0.703125ZM12.0222 10.1664L13.2464 11.184C14.2019 12.2812 11.6042 15.7027 7.02217 11.1187L6.95264 11.0488L6.8831 10.9797C2.29912 6.39412 5.72139 3.79803 6.81787 4.7535L7.83349 5.97772C8.60138 6.74561 6.91311 8.10275 6.84939 8.15397C6.84825 8.15489 6.84763 8.15538 6.84756 8.15545C6.73935 8.26405 7.43584 9.13709 8.14951 9.85037C8.86318 10.5637 9.73584 11.2605 9.84443 11.1523C9.84452 11.1522 9.84531 11.1513 9.84678 11.1494C9.91072 11.0703 11.2585 9.40273 12.0222 10.1664Z" fill="white "/>
                    </svg>

                    <div className='flex items-center' style={{marginLeft: 12}}>
                        <a className='header__top-link text-decor' href="tel:+998 33-700-09-01">+998 33-700-09-01</a>

                        <span className='header__top-span'></span>

                        <p className='header__top-desc text-decor'>24/7</p>
                    </div>
                </div>

                <div className='header__top-right flex items-center'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect width="16" height="16" fill="white"/>
                            <path d="M5.96667 8.93333H4.38667C4.22563 8.32153 4.22563 7.67847 4.38667 7.06667H5.96667C5.92556 7.37614 5.9033 7.68783 5.9 8C5.9033 8.31217 5.92556 8.62386 5.96667 8.93333ZM4.77333 6.13333H6.13333C6.28886 5.55748 6.50799 5.00072 6.78667 4.47333C5.93623 4.7638 5.22058 5.35386 4.77333 6.13333ZM11.2267 6.13333C10.7759 5.35421 10.0584 4.76456 9.20667 4.47333C9.48919 4.99819 9.70636 5.55567 9.85333 6.13333M8 11.7133C8.39615 11.1504 8.69789 10.5267 8.89333 9.86667H7.10667C7.30211 10.5267 7.60385 11.1504 8 11.7133ZM8 4.28C7.60351 4.84514 7.30177 5.47112 7.10667 6.13333H8.89333C8.69823 5.47112 8.39649 4.84514 8 4.28ZM4.77333 9.86667C5.22339 10.6438 5.93803 11.233 6.78667 11.5267C6.50799 10.9993 6.28886 10.4425 6.13333 9.86667M14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333ZM12.6667 8C12.6667 7.07702 12.393 6.17477 11.8802 5.40734C11.3674 4.63991 10.6386 4.04177 9.78586 3.68856C8.93313 3.33535 7.99482 3.24294 7.08958 3.423C6.18433 3.60307 5.35281 4.04752 4.70017 4.70017C4.04752 5.35281 3.60307 6.18433 3.423 7.08958C3.24294 7.99482 3.33535 8.93313 3.68856 9.78586C4.04177 10.6386 4.63991 11.3674 5.40734 11.8802C6.17477 12.393 7.07702 12.6667 8 12.6667C9.23768 12.6667 10.4247 12.175 11.2998 11.2998C12.175 10.4247 12.6667 9.23768 12.6667 8ZM10.1 8C10.0967 8.31217 10.0744 8.62386 10.0333 8.93333H11.6133C11.7744 8.32153 11.7744 7.67847 11.6133 7.06667H10.0333C10.0744 7.37614 10.0967 7.68783 10.1 8ZM9.20667 11.5267C10.0575 11.2338 10.7745 10.6446 11.2267 9.86667H9.85333C9.70636 10.4443 9.48919 11.0018 9.20667 11.5267ZM6.90667 7.06667C6.80716 7.68491 6.80716 8.31509 6.90667 8.93333H9.09333C9.13898 8.62425 9.16348 8.31242 9.16667 8C9.16367 7.68757 9.13917 7.37573 9.09333 7.06667H6.90667Z" fill="#051022"/>
                        </svg>

                        <DropDown/>
                    </div>

                    <ul className='header__top-right-media flex items-center ml-[16px]'>
                        <li className='header__list-item'>
                            <a href="https://www.instagram.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
                                    <path d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z" stroke="white"/>
                                </svg>
                            </a>
                        </li>

                        <li className='header__list-item'>
                            <a href="https://www.facebook.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
                                    <path d="M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5ZM7.5 14.5V6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H10M5 8.5H10" stroke="white"/>
                                </svg>
                            </a>
                        </li>

                        <li className='header__list-item'>
                            <a href="https://t.me/maxcyber_com" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
                                    <path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z" stroke="white" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="header__bottom">
            <div className='container header__bottom-container'>
                <Link className='flex items-center' to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3.20996" y="3.16992" width="4.40224" height="4.40224" fill="#1048A9"/>
                        <rect x="3.20996" y="16.377" width="4.40224" height="4.40224" fill="#1048A9"/>
                        <rect x="16.417" y="3.16992" width="4.40224" height="4.40224" fill="#1048A9"/>
                        <rect x="16.417" y="16.377" width="4.40224" height="4.40224" fill="#1048A9"/>
                        <rect x="12.0146" y="0.0517578" width="4.40224" height="4.40224" transform="rotate(45 12.0146 0.0517578)" fill="#1048A9"/>
                        <rect x="20.8135" y="8.85645" width="4.40224" height="4.40224" transform="rotate(45 20.8135 8.85645)" fill="#1048A9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2848 23.5435C22.263 23.6902 22.8674 23.5144 23.1909 23.1909C23.5144 22.8674 23.6902 22.263 23.5435 21.2848C23.4005 20.3315 22.9661 19.1449 22.2619 17.8001C21.7849 16.8892 21.1888 15.9145 20.4863 14.9013L19.9018 14.1697L20.8001 14.5875C23.6224 18.6448 24.7793 22.1213 23.4503 23.4503C21.4734 25.4273 14.7443 21.9034 8.42044 15.5796C2.09661 9.25572 -1.42726 2.52661 0.549679 0.549679C1.8096 -0.710239 4.99967 0.264062 8.78489 2.77347L9.10255 3.00361L9.49233 3.73732L8.47011 3.08825C7.68175 2.56781 6.92084 2.11564 6.19988 1.73809C4.85512 1.03387 3.66852 0.599529 2.71518 0.456516C1.73703 0.309777 1.13259 0.485575 0.809084 0.809084C0.485575 1.13259 0.309777 1.73703 0.456515 2.71518C0.59953 3.66852 1.03387 4.85512 1.73809 6.19989C3.14387 8.88435 5.58437 12.1229 8.73076 15.2692C11.8771 18.4156 15.1157 20.8561 17.8001 22.2619C19.1449 22.9661 20.3315 23.4005 21.2848 23.5435Z" fill="#1048A9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20015 1.73808C5.63196 1.44053 5.092 1.19116 4.58594 0.991593V0.533203C6.51468 1.25662 8.8853 2.68853 11.3727 4.65868V5.21934C9.54469 3.74639 7.77685 2.56376 6.20015 1.73808ZM18.2395 11.9686C19.9656 14.0295 21.3376 16.0346 22.2622 17.8001C22.9664 19.1449 23.4007 20.3315 23.5438 21.2848C23.6905 22.263 23.5147 22.8674 23.1912 23.1909C22.8677 23.5144 22.2632 23.6902 21.2851 23.5435C20.3318 23.4005 19.1451 22.9661 17.8004 22.2619C17.0794 21.8844 16.3185 21.4322 15.5302 20.9117L14.5079 20.2627L14.8977 20.9964L15.2154 21.2265C19.0006 23.7359 22.1907 24.7102 23.4506 23.4503C25.0828 21.8181 22.9653 16.9464 18.6181 11.738V11.9686H18.2395Z" fill="#1048A9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6934 21.2077C13.5555 20.4315 12.3708 19.5235 11.1734 18.502L8.90137 20.774L12.0142 23.8869L14.6934 21.2077Z" fill="#1048A9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48094 12.8052C4.45977 11.6069 3.5524 10.4215 2.77726 9.2832L0.0917969 11.9687L3.20465 15.0815L5.48094 12.8052Z" fill="#1048A9"/>
                    </svg>

                    <p className="header__bottom-logo-desc">MAXCYBERCOM</p>
                </Link>

                <nav ref={navRef} onClick={showNavbar} className='header__bottom-nav'>
                    <ul className='header__bottom-list'>
                        <li className='header__bottom-list-item flex items-center top'>
                            <NavLink to='about' className={({isActive}) => isActive ? "header__bottom-link-active header__bottom-link" : "header__bottom-link"}>
                            {t('who we are')}
                            </NavLink>
                        </li>

                        <li className='header__bottom-list-item flex items-center'>
                            <NavLink to='services' className={({isActive}) => isActive ? "header__bottom-link-active header__bottom-link" : "header__bottom-link"}>
                                {t('services')}
                            </NavLink>
                        </li>

                        <li className='header__bottom-list-item flex items-center'>
                            <NavLink to='portfolio' className={({isActive}) => isActive ? "header__bottom-link-active header__bottom-link" : "header__bottom-link"}>
                                {t('portfolio')}
                            </NavLink>
                        </li>

                        <li className='header__bottom-list-item flex items-center'>
                            <NavLink to='blogs' className={({isActive}) => isActive ? "header__bottom-link-active header__bottom-link" : "header__bottom-link"}>
                                {t('blogs')}
                            </NavLink>
                        </li>

                        <li className='header__bottom-list-item flex items-center'>
                            <NavLink to='career' className={({isActive}) => isActive ? "header__bottom-link-active header__bottom-link" : "header__bottom-link"}>
                                {t('careers')}
                            </NavLink>
                        </li>

                        <li>
                            <div className='header__bottom-btn header__bottom-btn-close postion'>
                                <div className='flex items-center justify-between'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3.20996" y="3.16992" width="4.40224" height="4.40224" fill="#1048A9"/>
                                        <rect x="3.20996" y="16.377" width="4.40224" height="4.40224" fill="#1048A9"/>
                                        <rect x="16.417" y="3.16992" width="4.40224" height="4.40224" fill="#1048A9"/>
                                        <rect x="16.417" y="16.377" width="4.40224" height="4.40224" fill="#1048A9"/>
                                        <rect x="12.0146" y="0.0517578" width="4.40224" height="4.40224" transform="rotate(45 12.0146 0.0517578)" fill="#1048A9"/>
                                        <rect x="20.8135" y="8.85645" width="4.40224" height="4.40224" transform="rotate(45 20.8135 8.85645)" fill="#1048A9"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2848 23.5435C22.263 23.6902 22.8674 23.5144 23.1909 23.1909C23.5144 22.8674 23.6902 22.263 23.5435 21.2848C23.4005 20.3315 22.9661 19.1449 22.2619 17.8001C21.7849 16.8892 21.1888 15.9145 20.4863 14.9013L19.9018 14.1697L20.8001 14.5875C23.6224 18.6448 24.7793 22.1213 23.4503 23.4503C21.4734 25.4273 14.7443 21.9034 8.42044 15.5796C2.09661 9.25572 -1.42726 2.52661 0.549679 0.549679C1.8096 -0.710239 4.99967 0.264062 8.78489 2.77347L9.10255 3.00361L9.49233 3.73732L8.47011 3.08825C7.68175 2.56781 6.92084 2.11564 6.19988 1.73809C4.85512 1.03387 3.66852 0.599529 2.71518 0.456516C1.73703 0.309777 1.13259 0.485575 0.809084 0.809084C0.485575 1.13259 0.309777 1.73703 0.456515 2.71518C0.59953 3.66852 1.03387 4.85512 1.73809 6.19989C3.14387 8.88435 5.58437 12.1229 8.73076 15.2692C11.8771 18.4156 15.1157 20.8561 17.8001 22.2619C19.1449 22.9661 20.3315 23.4005 21.2848 23.5435Z" fill="#1048A9"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20015 1.73808C5.63196 1.44053 5.092 1.19116 4.58594 0.991593V0.533203C6.51468 1.25662 8.8853 2.68853 11.3727 4.65868V5.21934C9.54469 3.74639 7.77685 2.56376 6.20015 1.73808ZM18.2395 11.9686C19.9656 14.0295 21.3376 16.0346 22.2622 17.8001C22.9664 19.1449 23.4007 20.3315 23.5438 21.2848C23.6905 22.263 23.5147 22.8674 23.1912 23.1909C22.8677 23.5144 22.2632 23.6902 21.2851 23.5435C20.3318 23.4005 19.1451 22.9661 17.8004 22.2619C17.0794 21.8844 16.3185 21.4322 15.5302 20.9117L14.5079 20.2627L14.8977 20.9964L15.2154 21.2265C19.0006 23.7359 22.1907 24.7102 23.4506 23.4503C25.0828 21.8181 22.9653 16.9464 18.6181 11.738V11.9686H18.2395Z" fill="#1048A9"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6934 21.2072C13.5555 20.4311 12.3708 19.523 11.1734 18.5015L8.90137 20.7735L12.0142 23.8864L14.6934 21.2072Z" fill="#1048A9"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.48094 12.8057C4.45977 11.6074 3.5524 10.4219 2.77726 9.28369L0.0917969 11.9692L3.20465 15.082L5.48094 12.8057Z" fill="#1048A9"/>
                                    </svg>

                                    <button className='ml-[200px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z" fill="#051022"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="#051022"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div onClick={showNavbar} className='header__bottom-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="black"/>
                        <path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="black"/>
                        <path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header