import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './career.css';
import Career1 from '../../assets/images/culture-1.jpeg';
import Career2 from '../../assets/images/culture-2.jpeg';
import Career3 from '../../assets/images/culture-3.jpeg';
import Career4 from '../../assets/images/culture-4.jpeg';
import Loader from '../../components/Loader/Loader';

const Career = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch('https://backend.max.kube.uz/api/v1/page/by-page-type-code?pageTypeCode=6');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.data);
            setLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
          }
        };

        fetchData();
    }, []);


  return (
    <main>
        {
            loading ? (
                <Loader/>
            ) : (
                <>
                    <section className='career-hero'>
                        <div className="container flex flex-col items-center justify-center">
                            <h1 className='career-hero__title'>Work with us</h1>

                            <p className='career-hero__desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
                        </div>
                    </section>

                    <section className='culture-section'>
                        <div className="container culture-section__container">
                            <div className='culture-section__top-wrapper'>
                            <h2 className='culture-section__top-title'>Our culture</h2>

                            <p className='culture-section__top-desc'>At MAXCYBERCOM, our culture is the foundation of who we are and how we operate. We foster a positive and inclusive work environment that values collaboration, innovation, and mutual respect. Our company culture is built on the following principles:</p>
                            </div>

                            <ul className='culture-section__top-list'>
                                <li className='culture-section__top-item'>
                                    1. Collaboration and Teamwork: We believe that great things are achieved through collaboration. We encourage open communication, knowledge sharing, and teamwork across all levels of the organization. We foster an environment where diverse perspectives are valued and contribute to our collective success.
                                </li>

                                <li className='culture-section__top-item'>
                                    2. Innovation and Creativity: We embrace innovation and encourage our team members to think creatively. We empower individuals to explore new ideas, take calculated risks, and challenge the status quo. We believe that innovation is the key to staying ahead in a rapidly evolving industry.
                                </li>

                                <li className='culture-section__top-item'>
                                    3. Continuous Learning and Growth: We are committed to the professional and personal growth of our team members. We provide opportunities for learning, skill development, and career advancement. We encourage continuous improvement and support individuals in reaching their full potential.
                                </li>

                                <li className='culture-section__top-item'>
                                    4. Integrity and Ethical Conduct: We uphold the highest standards of integrity, honesty, and ethical conduct. We believe in doing the right thing, even when faced with difficult choices. We foster a culture of transparency, trust, and accountability in all our interactions.
                                </li>
                            </ul>

                            <ul className='culture-section__bottom-list'>
                                <li className='culture-section__bottom-item'>
                                    <img src={Career1} alt="img" width={261} height={280}/>
                                </li>

                                <li className='culture-section__bottom-item'>
                                    <img src={Career2} alt="img" width={261} height={280}/>
                                </li>

                                <li className='culture-section__bottom-item'>
                                    <img src={Career3} alt="img" width={261} height={280}/>
                                </li>

                                <li className='culture-section__bottom-item'>
                                    <img src={Career4} alt="img" width={261} height={280}/>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className='position-section'>
                        <div className="container position-section__container">
                            <h2 className='position-section__title'>Open positions</h2>

                            <ul className='position-section__list'>
                                {
                                    data ? data.map((key)=> {
                                        return (
                                            <li className='position-section__item'>
                                                <Link to='/job-apply'>
                                                    <img className='position-section__item-img' src={key.image} alt="img" width={355} height={209}/>

                                                    <h3 className='position-section__item-title'>{key.title}</h3>

                                                    <p className='position-section__item-desc'>{key.description}</p>

                                                    <button className='position-section__item-btn flex items-center'>
                                                        Apply

                                                        <svg className='ml-[5px]' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                            <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </li>
                                        )
                                    }) : 'Not Found'
                                }
                            </ul>
                        </div>
                    </section>

                    <section className='role-section'>
                        <div className="container">
                            <div className='role-section__wrapper'>
                                <h2 className='role-section__wrapper-title'>Can’t see your next role?</h2>

                                <p className='role-section__wrapper-desc'>If you don’t see a suitable vacancy, but you are sure we're meant to be together, drop us a line.</p>
                            </div>

                            <div className='role-section__form-wrapper'>
                                <h3 className='role-section__form-title'>Tell us about yourself</h3>

                                <p className='role-section__form-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>

                                <form className='role-section__form'>
                                    <input className='role-section__form-input' type="text" placeholder='Full name' required/>

                                    <div className='role-section__input-wrapper'>
                                        <input className='role-section__form-input' type="number" placeholder='Phone number' required/>

                                        <input className='role-section__form-input input-margin' type="email" placeholder='Your email'/>
                                    </div>

                                    <div>
                                        <h4 className='role-section__input-label'>File containing resume</h4>

                                        <input className='role-section__form-input' type="file" placeholder='Choose a file'/>
                                    </div>

                                    <button className='role-section__form-btn'>Apply</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    </main>
    )
}

export default Career