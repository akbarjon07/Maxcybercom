import React from 'react';
import "./aboutUs.css";
import Mission1 from '../../assets/images/mission-one.jpeg';
import Mission2 from '../../assets/images/mission-two.jpeg';
import Mission3 from '../../assets/images/mission-three.jpeg';
import Mission4 from '../../assets/images/mission-four.jpeg';

const AboutUs = () => {
  return (
    <main>
        <section className='about__hero-section'>
            <div className="container flex flex-col items-center justify-center">
                <h1 className='about__hero-title'>About us</h1>

                <p className='about__hero-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
            </div>
        </section>

        <section className='about-company-section'>
          <div className="container about-company-section__container">
            <div className='about-company-section__top-wrapper'>
              <h2 className='about-company-section__top-title'>About company</h2>

              <p className='about-company-section__top-desc'>MAXCYBERCOM team is a software engineering company driven by the idea of digital transformation and innovation that improve business processes. Our core engineering capabilities have been successfully implemented in various industries. We are here to provide real business value to our partners and customers through IT innovation.</p>
            </div>

            <div className='about-company-section__bottom-wrapper'>
              <h3 className='about-company-section__bottom-title'>The key area of expertise of the team:</h3>

              <div className='about-company-section__left-wrapper'>
                <ul className='about-company-section__bottom-list'>
                    <li className='about-company-section__bottom-item'>Core and Enterprise Systems</li>
                    <li className='about-company-section__bottom-item'>Platform and Product Development</li>
                    <li className='about-company-section__bottom-item'>API & Integration & Modernization</li>
                    <li className='about-company-section__bottom-item'>MACH (Modern Composable Architecture) </li>
                    <li className='about-company-section__bottom-item'>DevOps in Fintech , Edtech, Travel Tech</li>
                    <li className='about-company-section__bottom-item'>DevOps in GIS (geographic information systems)</li>
                    <li className='about-company-section__bottom-item'>DevOps of Mobile Applications</li>
                    <li className='about-company-section__bottom-item'>Integration of AI</li>
                    <li className='about-company-section__bottom-item'>Quality Engineering</li>
                    <li className='about-company-section__bottom-item'>Technical support and maintenance</li>
                  </ul>

                <div className='about-company-section__bottom-qoute'>We are proud of our competencies and capabilities, and we aim to provide innovative solutions that enable our clients to stay ahead of their competitors and succeed in the ever-changing technological landscape.</div>

                <span className='about-company-section__bottom-span'></span>
              </div>
            </div>
          </div>
        </section>

        <section className='mission-section'>
          <div className="container mx-auto mission-section__container">
            <h2 className='mission-section__title'>Our mission</h2>

            <p className='mission-section__desc text-justify'>Our mission is to empower businesses with cutting-edge technology solutions that drive growth and transform the digital landscape. We strive to be the catalyst for innovation, delivering exceptional software development, web design, and mobile app solutions that propel our clients to new heights of success.
            We are committed to providing unparalleled expertise, unwavering dedication, and customized IT solutions that meet the unique needs of each client. Our team of tech enthusiasts, creative thinkers, and problem solvers work collaboratively to deliver innovative and scalable solutions that drive business efficiency and competitiveness.
            Through our relentless pursuit of excellence, we aim to redefine industry standards and exceed client expectations. We are passionate about leveraging the latest advancements in technology to empower businesses, enabling them to thrive in an ever-evolving digital landscape.
            With a focus on long-term partnerships and exceptional customer service, we aim to build lasting relationships based on trust, transparency, and mutual growth. Our mission is not only to meet our clients' expectations but to exceed them, delivering solutions that empower their digital transformation and drive sustainable success.
            Together, let's unlock the power of technology, navigate digital challenges, and unlock new opportunities for growth. Join us on this transformative journey as we shape the future of businesses through innovative and strategic IT solutions.
            </p>

            <ul className='mission-section__list'>
              <li className='mission-section__item'>
                <img className='mission-section__img' src={Mission1} alt="img" width={239} height={280}/>
              </li>
              <li className='mission-section__item'>
                <img className='mission-section__img' src={Mission2} alt="img" width={239} height={280}/>
              </li>
              <li className='mission-section__item'>
                <img className='mission-section__img' src={Mission3} alt="img" width={239} height={280}/>
              </li>
              <li className='mission-section__item'>
                <img className='mission-section__img' src={Mission4} alt="img" width={239} height={280}/>
              </li>
            </ul>
          </div>
        </section>

        <section className='comment-section'>
          <div className="container">
            <div className='comment-section__main-wrapper'>
              <div className='comment-section__client-number'>
                <p className='comment-section__client-desc'><span>200+</span><br />Clients Already Served</p>
              </div>

              <div className='comment-section__comment-wrapper'>
                <div className='flex items-center justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0H29C33.4183 0 37 3.58172 37 8V29C37 33.4183 33.4183 37 29 37H8C3.58172 37 0 33.4183 0 29V8ZM9 18.8218C9 17.9769 9.05556 16.9208 9.16667 15.6535C9.33333 14.3861 9.66667 13.3564 10.1667 12.5644C10.6667 11.7723 11.3056 11.1122 12.0833 10.5842C12.9167 10.0033 13.8056 9.47525 14.75 9L16.9167 11.3762C16.25 11.6403 15.5833 11.9835 14.9167 12.4059C14.25 12.8284 13.75 13.2772 13.4167 13.7525C13.0278 14.3333 12.8056 14.967 12.75 15.6535C12.6944 16.2871 12.6667 16.9472 12.6667 17.6337H17V25H9V18.8218ZM21.1667 15.6535C21.0556 16.9208 21 17.9769 21 18.8218V25H29V17.6337H24.6667C24.6667 16.9472 24.6944 16.2871 24.75 15.6535C24.8056 14.967 25.0278 14.3333 25.4167 13.7525C25.75 13.2772 26.25 12.8284 26.9167 12.4059C27.5833 11.9835 28.25 11.6403 28.9167 11.3762L26.75 9C25.8056 9.47525 24.9167 10.0033 24.0833 10.5842C23.3056 11.1122 22.6667 11.7723 22.1667 12.5644C21.6667 13.3564 21.3333 14.3861 21.1667 15.6535Z" fill="#8C0F95"/>
                  </svg>
                </div>

                <p className='comment-section__comment-text'>Lorem ipsum dolor sit amet consectetur. In ut ante in sed metus ac mattis. Sed aliquet  Lorem ipsum dolor sit amet consectetur. In ut ante in sed metus ac mattis. Sed aliquet  Lorem ipsum dolor sit aLorem ipsum dolor sit amet consectetur. In ut ante in sed me
                </p>

                <div className='comment-section__name-wrapper flex items-center justify-between'>
                  <div>
                    <p className='comment-section__name-text'>Ismoilbek Mamurov</p>

                    <p className='comment-section__job-text'>It company manager</p>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37 29C37 33.4183 33.4183 37 29 37L8 37C3.58172 37 3.13124e-07 33.4183 6.99382e-07 29L2.53526e-06 8C2.92152e-06 3.58172 3.58173 -2.92152e-06 8 -2.53526e-06L29 -6.99382e-07C33.4183 -3.13124e-07 37 3.58172 37 8L37 29ZM28 18.1782C28 19.0231 27.9444 20.0792 27.8333 21.3465C27.6667 22.6139 27.3333 23.6436 26.8333 24.4356C26.3333 25.2277 25.6944 25.8878 24.9167 26.4158C24.0833 26.9967 23.1944 27.5248 22.25 28L20.0833 25.6238C20.75 25.3597 21.4167 25.0165 22.0833 24.5941C22.75 24.1716 23.25 23.7228 23.5833 23.2475C23.9722 22.6667 24.1944 22.033 24.25 21.3465C24.3056 20.7129 24.3333 20.0528 24.3333 19.3663L20 19.3663L20 12L28 12L28 18.1782ZM15.8333 21.3465C15.9444 20.0792 16 19.0231 16 18.1782L16 12L8 12L8 19.3663L12.3333 19.3663C12.3333 20.0528 12.3056 20.7129 12.25 21.3465C12.1944 22.033 11.9722 22.6667 11.5833 23.2475C11.25 23.7228 10.75 24.1716 10.0833 24.5941C9.41667 25.0165 8.75 25.3597 8.08333 25.6238L10.25 28C11.1944 27.5248 12.0833 26.9967 12.9167 26.4158C13.6944 25.8878 14.3333 25.2277 14.8333 24.4356C15.3333 23.6436 15.6667 22.6139 15.8333 21.3465Z" fill="#8C0F95"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='team-section'>
          <div className="container mx-auto">
            <h2 className='team-section__title'>Team</h2>

            <div className='team-section__main-wrapper'>
              <div className='team-section__wrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <g clip-path="url(#clip0_151_1683)">
                    <path d="M48.125 39.3802V35.875C48.1236 34.7151 47.6622 33.6031 46.8421 32.7829C46.0219 31.9628 44.9099 31.5014 43.75 31.5H36.3843C37.1941 30.006 37.8474 28.4322 38.3338 26.8039L41.6588 24.143C42.1756 23.7304 42.5534 23.1692 42.7412 22.5351C42.9291 21.901 42.9179 21.2245 42.7092 20.597C42.5005 19.9694 42.1043 19.421 41.5741 19.0257C41.0439 18.6304 40.4053 18.4073 39.7443 18.3864L41.6938 13.0261C42.1912 11.6582 42.3516 10.1905 42.1613 8.74735C41.971 7.30424 41.4356 5.92827 40.6006 4.736C39.7656 3.54374 38.6555 2.57032 37.3644 1.89821C36.0732 1.22611 34.6391 0.875124 33.1835 0.875001H25.7547C20.1961 0.873615 14.7492 2.43577 10.0363 5.383C9.89465 5.47072 9.78102 5.59703 9.70873 5.7471C9.63643 5.89716 9.60848 6.06474 9.62814 6.23015C9.64781 6.39556 9.71428 6.55191 9.81974 6.68085C9.9252 6.80978 10.0653 6.90593 10.2235 6.958L12.3331 7.658C12.6235 7.75486 12.891 7.91002 13.1192 8.11397C13.3475 8.31792 13.5317 8.56634 13.6605 8.84402C13.7893 9.12169 13.86 9.42275 13.8682 9.72872C13.8765 10.0347 13.8222 10.3391 13.7086 10.6234C13.499 11.1474 13.4027 11.7098 13.426 12.2737C13.4494 12.8376 13.5919 13.3902 13.8442 13.895L16.1 18.4021C15.4547 18.4535 14.8397 18.6977 14.335 19.1031C13.8302 19.5084 13.459 20.0562 13.2696 20.6752C13.0801 21.2942 13.0812 21.9559 13.2726 22.5743C13.464 23.1927 13.837 23.7393 14.343 24.143L17.668 26.8039C18.1537 28.4322 18.8065 30.0059 19.6157 31.5H12.25C11.0901 31.5014 9.97811 31.9628 9.15794 32.7829C8.33777 33.6031 7.87639 34.7151 7.875 35.875V39.3802C5.80409 40.2454 4.03489 41.703 2.78952 43.5701C1.54415 45.4372 0.878103 47.6307 0.875 49.875V54.25C0.875 54.4821 0.967187 54.7046 1.13128 54.8687C1.29538 55.0328 1.51794 55.125 1.75 55.125H54.25C54.4821 55.125 54.7046 55.0328 54.8687 54.8687C55.0328 54.7046 55.125 54.4821 55.125 54.25V49.875C55.1219 47.6307 54.4559 45.4372 53.2105 43.5701C51.9651 41.703 50.1959 40.2454 48.125 39.3802ZM35 18.375H29.75C29.5179 18.375 29.2954 18.4672 29.1313 18.6313C28.9672 18.7954 28.875 19.0179 28.875 19.25V20.125H27.125V19.25C27.125 19.0179 27.0328 18.7954 26.8687 18.6313C26.7046 18.4672 26.4821 18.375 26.25 18.375H18.375V17.0931L23.8368 13.4523C25.012 12.6671 26.3941 12.2486 27.8075 12.25C29.8297 12.2476 31.7912 11.5594 33.3716 10.2979L34.8014 9.15425L36.302 11.4065C37.166 12.6993 37.6265 14.2196 37.625 15.7745V18.375H35ZM34.125 20.125V22.75C34.125 22.9821 34.0328 23.2046 33.8687 23.3687C33.7046 23.5328 33.4821 23.625 33.25 23.625H31.5C31.2679 23.625 31.0454 23.5328 30.8813 23.3687C30.7172 23.2046 30.625 22.9821 30.625 22.75V20.125H34.125ZM25.375 20.125V22.75C25.375 22.9821 25.2828 23.2046 25.1187 23.3687C24.9546 23.5328 24.7321 23.625 24.5 23.625H22.75C22.5179 23.625 22.2954 23.5328 22.1313 23.3687C21.9672 23.2046 21.875 22.9821 21.875 22.75V20.125H25.375ZM41.125 21.6125C41.1255 21.8357 41.0755 22.0562 40.9788 22.2574C40.8822 22.4586 40.7413 22.6354 40.5667 22.7745L38.9804 24.0433C39.2116 22.7494 39.3389 21.4391 39.361 20.125H39.6375C39.8328 20.125 40.0263 20.1635 40.2067 20.2382C40.3872 20.313 40.5512 20.4226 40.6893 20.5607C40.8274 20.6988 40.937 20.8628 41.0118 21.0433C41.0865 21.2237 41.125 21.4172 41.125 21.6125ZM15.3326 11.2735C15.5348 10.7679 15.6315 10.2264 15.6169 9.68214C15.6023 9.13786 15.4766 8.60231 15.2476 8.10833C15.0186 7.61436 14.6911 7.17238 14.2852 6.80951C13.8792 6.44664 13.4035 6.17053 12.887 5.99813L12.6193 5.91063C16.6612 3.75268 21.1728 2.62419 25.7547 2.625H33.1835C34.3575 2.62522 35.5141 2.90834 36.5555 3.45037C37.5968 3.99241 38.4922 4.7774 39.1659 5.73888C39.8395 6.70036 40.2715 7.81001 40.4254 8.97387C40.5792 10.1377 40.4503 11.3215 40.0496 12.425L39.2892 14.5163C39.0992 13.0552 38.5752 11.6576 37.758 10.4318L35.728 7.38588C35.6606 7.28499 35.573 7.19921 35.4708 7.13399C35.3685 7.06876 35.2538 7.02552 35.1339 7.007C35.014 6.9889 34.8918 6.99565 34.7747 7.0268C34.6576 7.05796 34.5481 7.11287 34.4531 7.18813L32.2787 8.932C31.0084 9.94499 29.4323 10.4977 27.8075 10.5C26.0484 10.4984 24.3283 11.0192 22.8655 11.9963L17.0144 15.897C16.9601 15.9338 16.9102 15.9767 16.8656 16.0248L15.4096 13.1119C15.2677 12.8283 15.1875 12.5178 15.1742 12.2009C15.161 11.8841 15.215 11.568 15.3326 11.2735ZM15.4341 22.7763C15.1926 22.584 15.0169 22.3213 14.9314 22.0247C14.8458 21.7281 14.8547 21.4123 14.9567 21.1209C15.0587 20.8295 15.2488 20.5772 15.5007 20.3987C15.7526 20.2203 16.0538 20.1246 16.3625 20.125H16.6372C16.6593 21.4397 16.7865 22.7506 17.0179 24.045L15.4341 22.7763ZM18.389 20.125H20.125V22.75C20.125 23.4462 20.4016 24.1139 20.8938 24.6062C21.3861 25.0984 22.0538 25.375 22.75 25.375H24.5C25.1962 25.375 25.8639 25.0984 26.3562 24.6062C26.8484 24.1139 27.125 23.4462 27.125 22.75V21.875H28.875V22.75C28.875 23.4462 29.1516 24.1139 29.6438 24.6062C30.1361 25.0984 30.8038 25.375 31.5 25.375H33.25C33.9462 25.375 34.6139 25.0984 35.1062 24.6062C35.5984 24.1139 35.875 23.4462 35.875 22.75V20.125H37.611C37.5431 24.1355 36.4234 28.058 34.3639 31.5H21.6361C19.5766 28.058 18.4569 24.1355 18.389 20.125ZM12.25 33.25H43.75C44.4462 33.25 45.1139 33.5266 45.6062 34.0188C46.0984 34.5111 46.375 35.1788 46.375 35.875V53.375H9.625V35.875C9.625 35.1788 9.90156 34.5111 10.3938 34.0188C10.8861 33.5266 11.5538 33.25 12.25 33.25ZM2.625 49.875C2.62738 48.102 3.11871 46.364 4.04496 44.8523C4.97121 43.3405 6.29648 42.1134 7.875 41.3061V53.375H2.625V49.875ZM53.375 53.375H48.125V41.3061C49.7035 42.1135 51.0287 43.3406 51.9549 44.8523C52.8811 46.3641 53.3725 48.102 53.375 49.875V53.375Z" fill="#8C0F95"/>
                    <path d="M28 50.75C28.6922 50.75 29.3689 50.5447 29.9445 50.1601C30.5201 49.7756 30.9687 49.2289 31.2336 48.5894C31.4985 47.9499 31.5678 47.2461 31.4327 46.5672C31.2977 45.8883 30.9644 45.2646 30.4749 44.7751C29.9854 44.2856 29.3617 43.9523 28.6828 43.8173C28.0039 43.6822 27.3001 43.7515 26.6606 44.0164C26.0211 44.2813 25.4744 44.7299 25.0899 45.3055C24.7053 45.8811 24.5 46.5578 24.5 47.25C24.5 48.1783 24.8687 49.0685 25.5251 49.7249C26.1815 50.3813 27.0717 50.75 28 50.75ZM28 45.5C28.3461 45.5 28.6845 45.6026 28.9722 45.7949C29.26 45.9872 29.4843 46.2605 29.6168 46.5803C29.7492 46.9001 29.7839 47.2519 29.7164 47.5914C29.6489 47.9309 29.4822 48.2427 29.2374 48.4874C28.9927 48.7322 28.6809 48.8989 28.3414 48.9664C28.0019 49.0339 27.6501 48.9992 27.3303 48.8668C27.0105 48.7343 26.7372 48.51 26.5449 48.2223C26.3526 47.9345 26.25 47.5961 26.25 47.25C26.25 46.7859 26.4344 46.3408 26.7626 46.0126C27.0908 45.6844 27.5359 45.5 28 45.5Z" fill="#8C0F95"/>
                    <path d="M22.1312 42.6191L23.3684 41.3818L20.4871 38.5005L23.3684 35.6191L22.1312 34.3818L18.6312 37.8818C18.4672 38.0459 18.375 38.2684 18.375 38.5005C18.375 38.7325 18.4672 38.955 18.6312 39.1191L22.1312 42.6191Z" fill="#8C0F95"/>
                    <path d="M33.8691 42.6181L37.3691 39.1181C37.5331 38.954 37.6253 38.7315 37.6253 38.4995C37.6253 38.2675 37.5331 38.0449 37.3691 37.8809L33.8691 34.3809L32.6318 35.6181L35.5132 38.4995L32.6318 41.3809L33.8691 42.6181Z" fill="#8C0F95"/>
                    <path d="M29.9252 34.4747L24.6738 41.4736L26.0736 42.5239L31.325 35.5249L29.9252 34.4747Z" fill="#8C0F95"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_151_1683">
                      <rect width="56" height="56" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                <h3 className='team-section__card-title'>Composition of the technical skills team:</h3>

                <ul className='team-section__card-list'>
                    <li className='team-section__card-item'>5 project managers / IT architect</li>
                    <li className='team-section__card-item'>4 project managers</li>
                    <li className='team-section__card-item'>10 full stack developers</li>
                    <li className='team-section__card-item'>4 full stack/devops</li>
                    <li className='team-section__card-item'>9 backend developers</li>
                    <li className='team-section__card-item'>7 frontend developers</li>
                    <li className='team-section__card-item'>4 mobile app developers(android/iOS)</li>
                    <li className='team-section__card-item'>4 designers</li>
                </ul>
              </div>

              <div className='team-section__wrapper top'>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <path d="M37.6487 30.2705L32.8819 28.1519C32.5452 28.0023 32.3277 27.6675 32.3277 27.2991V25.9901C33.929 24.7142 34.9582 22.7495 34.9582 20.5478V18.7052C35.4857 18.4137 35.835 17.8504 35.835 17.2195V17.0407C35.835 13.2042 32.7137 10.083 28.8773 10.083H27.1238C23.2873 10.083 20.1661 13.2042 20.1661 17.0407V18.6633C20.1661 19.2178 20.4048 19.7202 20.8207 20.0416C20.8913 20.0961 20.9655 20.144 21.0428 20.1854V20.5477C21.0428 22.7494 22.072 24.7141 23.6731 25.9899V27.299C23.6731 27.6674 23.4556 28.0022 23.1189 28.1518L18.3521 30.2704C16.791 30.9642 15.7822 32.5164 15.7822 34.2247V45.0971C15.7822 45.5501 16.1495 45.9174 16.6025 45.9174C17.0556 45.9174 17.4229 45.5501 17.4229 45.0971V34.2249C17.4229 34.1298 17.4296 34.0359 17.4395 33.9427L19.636 36.1391C19.9777 36.481 20.1661 36.9355 20.1661 37.419V45.0972C20.1661 45.5502 20.5334 45.9175 20.9864 45.9175C21.4394 45.9175 21.8067 45.5502 21.8067 45.0972V37.419C21.8067 36.4973 21.4479 35.6309 20.7961 34.9791L18.1775 32.3604C18.4135 32.1157 18.6965 31.9128 19.0185 31.7696L23.7049 29.6868L27.1803 33.1622V45.0971C27.1803 45.5501 27.5476 45.9174 28.0006 45.9174C28.4537 45.9174 28.821 45.5501 28.821 45.0971V33.1623L32.2964 29.6869L36.9826 31.7696C37.3046 31.9128 37.5877 32.1157 37.8236 32.3606L35.2051 34.9791C34.5533 35.6309 34.1944 36.4973 34.1944 37.419V45.0972C34.1944 45.5502 34.5617 45.9175 35.0148 45.9175C35.4678 45.9175 35.8351 45.5502 35.8351 45.0972V37.419C35.8351 36.9356 36.0233 36.481 36.3652 36.1391L38.5616 33.9428C38.5714 34.036 38.5782 34.1297 38.5782 34.2247V45.0971C38.5782 45.5501 38.9455 45.9174 39.3985 45.9174C39.8516 45.9174 40.2188 45.5501 40.2188 45.0971V34.2249C40.2185 32.5165 39.2098 30.9643 37.6487 30.2705ZM28.0003 31.6624L24.9508 28.6128C25.1827 28.2227 25.3136 27.7713 25.3136 27.2991V26.9653C26.1408 27.3129 27.0485 27.5055 28.0004 27.5055C28.9523 27.5055 29.8599 27.313 30.687 26.9654V27.2991C30.687 27.7714 30.8179 28.2227 31.0499 28.6129L28.0003 31.6624ZM28.0004 25.8648C25.0686 25.8649 22.6834 23.4796 22.6834 20.5478V20.1789C23.1952 19.976 23.6949 19.6531 24.1732 19.2118C24.506 18.9046 24.5269 18.3856 24.2195 18.0526C23.9123 17.7198 23.3934 17.6989 23.0604 18.0061C22.6501 18.3849 22.2402 18.6296 21.8423 18.7335C21.8326 18.736 21.8255 18.7371 21.8205 18.7375C21.8146 18.7261 21.8066 18.702 21.8066 18.6634V17.0408C21.8066 14.109 24.1919 11.7237 27.1237 11.7237H28.8772C31.8091 11.7237 34.1942 14.109 34.1942 17.0408V17.2196C34.1942 17.2462 34.1783 17.2693 34.1573 17.2734C29.2451 18.2436 26.7813 16.4152 25.9501 15.5839C25.6297 15.2636 25.1103 15.2636 24.79 15.5839C24.4697 15.9043 24.4697 16.4237 24.79 16.744C27.3374 19.2913 31.0545 19.3372 33.3175 19.0653V20.5477C33.3175 23.4795 30.9322 25.8648 28.0004 25.8648Z" fill="#8C0F95"/>
                  <path d="M14.7921 25.8086V24.0547C14.7921 21.9147 13.68 20.0308 12.0043 18.9467C12.1077 18.6147 12.1618 18.267 12.1618 17.9174C12.1618 16.0147 10.6139 14.4668 8.71119 14.4668C6.8085 14.4668 5.26062 16.0148 5.26062 17.9174C5.26062 18.2714 5.31421 18.6157 5.4179 18.9469C3.74227 20.0309 2.63025 21.9148 2.63025 24.0547V25.8082C2.63025 27.8806 3.67293 29.713 5.26051 30.8114V32.6153C5.26051 32.9711 5.06287 33.2909 4.7447 33.4501L1.90739 34.8687C0.730845 35.4571 0 36.6397 0 37.9551V45.0972C0 45.5503 0.367282 45.9175 0.820314 45.9175C1.27335 45.9175 1.64063 45.5503 1.64063 45.0972V38.3099L2.97697 39.6463C3.31877 39.9882 3.50712 40.4426 3.50712 40.9262V45.0972C3.50712 45.5503 3.8744 45.9175 4.32743 45.9175C4.78046 45.9175 5.14774 45.5503 5.14774 45.0972V40.9262C5.14774 40.0045 4.78877 39.138 4.13712 38.4863L2.27719 36.6263C2.26822 36.6174 2.2586 36.6096 2.24941 36.6012C2.36611 36.4981 2.49704 36.4084 2.64119 36.3363L5.4785 34.9177C5.62385 34.8449 5.75915 34.7591 5.88526 34.6637L7.89087 36.6694V45.0973C7.89087 45.5504 8.25816 45.9176 8.71119 45.9176C9.16422 45.9176 9.5315 45.5504 9.5315 45.0973V36.6693L11.5372 34.6636C11.6634 34.7591 11.7986 34.8449 11.944 34.9176L12.7264 35.3088C12.8441 35.3677 12.9693 35.3956 13.0927 35.3956C13.3935 35.3956 13.6833 35.2294 13.827 34.9421C14.0297 34.5368 13.8654 34.0441 13.4602 33.8415L12.6778 33.4503C12.3595 33.2911 12.1619 32.9713 12.1619 32.6156V30.8117C13.7494 29.7134 14.7921 27.8808 14.7921 25.8086ZM8.71119 16.1074C9.70924 16.1074 10.5211 16.9194 10.5211 17.9174C10.5211 18.0273 10.5113 18.135 10.4925 18.2406C9.92875 18.0675 9.3308 17.9738 8.71119 17.9738C8.09245 17.9738 7.49526 18.0672 6.93242 18.2398C6.9135 18.1343 6.90125 18.0271 6.90125 17.9174C6.90125 16.9193 7.71314 16.1074 8.71119 16.1074ZM8.71119 19.6145C11.1596 19.6145 13.1515 21.6065 13.1515 24.0548V24.3521C9.73625 25.3978 7.70089 22.7998 7.61394 22.6859C7.4712 22.4957 7.253 22.3767 7.01587 22.3599C6.77875 22.3432 6.54578 22.43 6.37767 22.5981C5.59465 23.3811 4.82771 23.7588 4.27384 23.9411C4.33454 21.5451 6.301 19.6145 8.71119 19.6145ZM8.71119 35.1693L6.81561 33.2738C6.87095 33.0622 6.90125 32.8417 6.90125 32.6154V31.6141C7.47317 31.7928 8.08119 31.8892 8.71119 31.8892C9.34119 31.8892 9.94921 31.7928 10.5211 31.6141V32.6154C10.5211 32.8417 10.5514 33.0623 10.6068 33.2738L8.71119 35.1693ZM8.71119 30.2485C6.26282 30.2485 4.27088 28.2566 4.27088 25.8082V25.6383C4.92506 25.488 5.895 25.1388 6.90683 24.325C7.26481 24.6628 7.77647 25.0771 8.42802 25.4324C9.19867 25.8528 10.263 26.2416 11.563 26.2416C12.0571 26.2416 12.5857 26.1842 13.1445 26.0523C13.0173 28.3876 11.0776 30.2485 8.71119 30.2485Z" fill="#8C0F95"/>
                  <path d="M54.0923 33.1146L49.5015 30.8191C49.1834 30.66 48.9857 30.3402 48.9857 29.9845V28.8219C50.0603 27.8679 50.7392 26.4775 50.7392 24.9309V23.9972C50.7581 23.9972 50.7767 23.9977 50.7957 23.9977C51.2487 23.9977 51.616 23.6304 51.616 23.1774V21.4239C51.616 18.5543 49.2814 16.2197 46.4118 16.2197H44.6583C41.7887 16.2197 39.4541 18.5543 39.4541 21.4239V23.1774C39.4541 23.6304 39.8214 23.9977 40.2744 23.9977C40.2812 23.9977 40.3009 23.9975 40.3309 23.9963V24.9309C40.3309 26.4776 41.0099 27.868 42.0845 28.822V29.9846C42.0845 30.3404 41.8868 30.6602 41.5685 30.8192C41.1633 31.0218 40.999 31.5145 41.2017 31.9198C41.3454 32.2072 41.6352 32.3735 41.936 32.3735C42.0593 32.3735 42.1844 32.3456 42.3022 32.2867C42.4476 32.214 42.5829 32.1281 42.709 32.0328L44.7147 34.0385V45.0966C44.7147 45.5497 45.082 45.917 45.535 45.917C45.9881 45.917 46.3553 45.5497 46.3553 45.0966V34.0383L48.361 32.0325C48.4872 32.128 48.6224 32.2139 48.7677 32.2865L53.21 34.5077L51.8626 35.8551C51.2109 36.5069 50.852 37.3733 50.852 38.295V45.0964C50.852 45.5495 51.2193 45.9167 51.6723 45.9167C52.1253 45.9167 52.4926 45.5495 52.4926 45.0964V38.295C52.4926 37.8116 52.6808 37.357 53.0228 37.0151L54.2991 35.7388C54.3378 35.8872 54.359 36.042 54.359 36.2008V45.0964C54.359 45.5495 54.7263 45.9167 55.1793 45.9167C55.6323 45.9167 55.9996 45.5495 55.9996 45.0964V36.2008C55.9997 34.8855 55.2689 33.7029 54.0923 33.1146ZM41.0946 22.1883V21.4238H41.0947C41.0947 19.4589 42.6934 17.8602 44.6583 17.8602H46.4118C48.3767 17.8602 49.9753 19.4589 49.9753 21.4238V22.335C46.4094 22.1426 44.2574 20.755 44.2365 20.7413C44.0977 20.6488 43.9394 20.6035 43.7817 20.6035C43.57 20.6035 43.36 20.6853 43.2014 20.8438C42.4165 21.6287 41.6475 22.0064 41.0946 22.1883ZM45.535 32.5384L43.6395 30.6428C43.6948 30.4313 43.7251 30.2108 43.7251 29.9845V29.8098C44.289 30.0197 44.8988 30.135 45.535 30.135C46.1713 30.135 46.781 30.0197 47.345 29.8098V29.9845C47.345 30.2108 47.3752 30.4313 47.4306 30.6428L45.535 32.5384ZM45.535 28.4945C43.5701 28.4945 41.9715 26.8959 41.9715 24.9309V23.6085C42.546 23.3789 43.2154 23.0139 43.8966 22.4336C44.758 22.8818 46.5603 23.6565 49.0986 23.9124V24.9309C49.0986 26.8958 47.5 28.4945 45.535 28.4945Z" fill="#8C0F95"/>
                </svg>

                <h3 className='team-section__card-title'>A total of 20 employees of which:</h3>

                <ul className='team-section__card-list just-list'>
                    <li className='team-section__card-item'>Architects - 5</li>
                    <li className='team-section__card-item'>Seniors - 5</li>
                    <li className='team-section__card-item'>Middles - 5</li>
                    <li className='team-section__card-item'>Juniors - 5</li>
                </ul>

                <p className='team-section__card-desc'>Also, there is a pool of competent specialists to involve in projects as needed.</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default AboutUs