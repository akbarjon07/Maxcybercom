import React from 'react';
import "./contacts.css";
import Contact from '../../components/Contact/Contact';

const Contacts = () => {
  return (
    <main>
        <section className='contacts__hero-section'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className='contacts__hero-title'>Contact informations</h1>

                <p className='contacts__hero-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
            </div>
        </section>

        <Contact/>

        <section className='contacts__networks-section'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className='contacts__networks-title'>We are on social networks</h2>

                <p className='contacts__networks-desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec etiam pretium nibh molestie scelerisque urna justo</p>

                <ul className='contacts__networks-list'>
                    <li className='contacts__networks-item linkedin'>
                        <svg className='contacts__networks-item-svg mb-[16px]' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#007AB9"/>
                            <path d="M31.9499 21.6095V29.855H27.1694V22.1621C27.1694 20.2305 26.4792 18.9113 24.7483 18.9113C23.4274 18.9113 22.6427 19.7994 22.2961 20.6593C22.1703 20.9667 22.1378 21.3934 22.1378 21.8244V29.8547H17.3569C17.3569 29.8547 17.4211 16.8253 17.3569 15.4766H22.1382V17.5141C22.1286 17.5302 22.115 17.5459 22.1064 17.5612H22.1382V17.5141C22.7735 16.5366 23.9065 15.139 26.4467 15.139C29.5919 15.139 31.9499 17.194 31.9499 21.6095ZM12.3557 8.5459C10.7203 8.5459 9.65039 9.61938 9.65039 11.0298C9.65039 12.4102 10.6893 13.5147 12.2929 13.5147H12.3239C13.9914 13.5147 15.0281 12.4102 15.0281 11.0298C14.9964 9.61938 13.9914 8.5459 12.3557 8.5459ZM9.93454 29.855H14.7137V15.4766H9.93454V29.855Z" fill="#F1F2F2"/>
                        </svg>

                        <h5 className='contacts__networks-item-title'>Linkedin</h5>

                        <p className='contacts__networks-item-desc'>1234 followers</p>

                        <button className='contacts__networks-item-btn linkedin-btn'>Follow</button>
                    </li>

                    <li className='contacts__networks-item instagram'>
                        <svg className='contacts__networks-item-svg mb-[16px]' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="url(#paint0_linear_0_1)"/>
                            <path d="M24.2486 8.88867H15.7597C11.973 8.88867 8.89746 11.9642 8.89746 15.7509V24.2398C8.89746 28.0265 11.973 31.102 15.7597 31.102H24.2486C28.0352 31.102 31.1108 28.0265 31.1108 24.2398V15.7509C31.1108 11.9642 28.0352 8.88867 24.2486 8.88867ZM28.6308 24.2487C28.6308 26.6664 26.6664 28.6398 24.2397 28.6398H15.7508C13.333 28.6398 11.3597 26.6753 11.3597 24.2487V15.7598C11.3597 13.342 13.3241 11.3687 15.7508 11.3687H24.2397C26.6575 11.3687 28.6308 13.3331 28.6308 15.7598V24.2487Z" fill="white"/>
                            <path d="M19.9993 14.3203C16.8704 14.3203 14.3193 16.8714 14.3193 20.0003C14.3193 23.1292 16.8704 25.6803 19.9993 25.6803C23.1282 25.6803 25.6793 23.1292 25.6793 20.0003C25.6793 16.8714 23.1282 14.3203 19.9993 14.3203ZM19.9993 23.4492C18.0971 23.4492 16.5504 21.9025 16.5504 20.0003C16.5504 18.0981 18.0971 16.5514 19.9993 16.5514C21.9016 16.5514 23.4482 18.0981 23.4482 20.0003C23.4482 21.9025 21.9016 23.4492 19.9993 23.4492Z" fill="white"/>
                            <path d="M26.1121 14.9426C26.6354 14.8578 26.9909 14.3648 26.9061 13.8415C26.8212 13.3182 26.3282 12.9627 25.8049 13.0476C25.2816 13.1324 24.9262 13.6254 25.011 14.1487C25.0959 14.672 25.5888 15.0274 26.1121 14.9426Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_1" x1="4.77147" y1="35.2285" x2="33.1937" y2="6.80631" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FEE411"/>
                            <stop offset="0.0518459" stop-color="#FEDB16"/>
                            <stop offset="0.1381" stop-color="#FEC125"/>
                            <stop offset="0.2481" stop-color="#FE983D"/>
                            <stop offset="0.3762" stop-color="#FE5F5E"/>
                            <stop offset="0.5" stop-color="#FE2181"/>
                            <stop offset="1" stop-color="#9000DC"/>
                            </linearGradient>
                            </defs>
                        </svg>


                        <h5 className='contacts__networks-item-title'>Instagram</h5>

                        <p className='contacts__networks-item-desc'>87 234 followers</p>

                        <button className='contacts__networks-item-btn instagram-btn'>Follow</button>
                    </li>

                    <li className='contacts__networks-item telegram'>
                        <svg className='contacts__networks-item-svg mb-[16px]' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="url(#paint0_linear_8013_420)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05273 19.7889C14.8831 17.2487 18.771 15.574 20.7162 14.7649C26.2705 12.4548 27.4246 12.0535 28.1768 12.0402C28.3423 12.0373 28.7122 12.0783 28.9518 12.2728C29.3073 12.5612 29.3093 13.1873 29.2698 13.6017C28.9688 16.7642 27.6665 24.4386 27.0039 27.9806C26.7235 29.4794 26.1715 29.982 25.6371 30.0311C24.4757 30.138 23.5937 29.2635 22.4688 28.5262C20.7086 27.3723 19.7141 26.654 18.0055 25.5281C16.0309 24.2268 17.3109 23.5117 18.4362 22.3428C18.7308 22.037 23.848 17.3824 23.9471 16.9601C23.9595 16.9073 23.971 16.7104 23.8541 16.6065C23.7371 16.5026 23.5645 16.5381 23.44 16.5664C23.2634 16.6064 20.4514 18.4651 15.0039 22.1423C14.2057 22.6904 13.4827 22.9574 12.835 22.9435C12.1209 22.9281 10.7473 22.5397 9.72609 22.2078C8.47359 21.8006 7.47812 21.5853 7.56484 20.8939C7.60999 20.5337 8.10593 20.1654 9.05273 19.7889Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_8013_420" x1="20" y1="0" x2="20" y2="39.6875" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2AABEE"/>
                                <stop offset="1" stop-color="#229ED9"/>
                            </linearGradient>
                            </defs>
                      </svg>

                        <h5 className='contacts__networks-item-title'>Telegram</h5>

                        <p className='contacts__networks-item-desc'>1234 followers</p>

                        <button className='contacts__networks-item-btn telegram-btn'>Follow</button>
                    </li>

                    <li className='contacts__networks-item facebook'>
                        <svg className='contacts__networks-item-svg mb-[16px]' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#3B5998"/>
                            <path d="M25.0278 20.7828H21.459V33.857H16.052V20.7828H13.4805V16.188H16.052V13.2146C16.052 11.0883 17.0621 7.75879 21.5071 7.75879L25.5123 7.77555V12.2356H22.6063C22.1296 12.2356 21.4594 12.4738 21.4594 13.488V16.1922H25.5001L25.0278 20.7828Z" fill="white"/>
                        </svg>

                        <h5 className='contacts__networks-item-title'>Facebook</h5>

                        <p className='contacts__networks-item-desc'>1234 followers</p>

                        <button className='contacts__networks-item-btn facebook-btn'>Follow</button>
                    </li>
                </ul>
            </div>
        </section>

        <section className='contacts__networks-section'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className='contacts__networks-title'>Find us on map</h2>

                <p className='contacts__networks-desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec etiam pretium nibh molestie scelerisque urna justo</p>

                <iframe style={{borderRadius:5}} src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5d98a952217db3ea00c3060cc7e5ef37b12290d83198aff916187a2afa5a0fe&amp;source=constructor" width="100%" height="463" frameborder="0"></iframe>
            </div>
        </section>
    </main>
  )
}

export default Contacts