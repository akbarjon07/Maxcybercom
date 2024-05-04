import React from 'react';
import { Link } from 'react-router-dom';
import './career.css';
import Career1 from '../../assets/images/culture-1.jpeg';
import Career2 from '../../assets/images/culture-2.jpeg';
import Career3 from '../../assets/images/culture-3.jpeg';
import Career4 from '../../assets/images/culture-4.jpeg';
import Edu from '../../assets/images/Edu.jpeg';

const Career = () => {
  return (
    <main>
        <section className='career-hero'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className='career-hero__title'>Work with us</h1>

                <p className='career-hero__desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
            </div>
        </section>

        <section className='culture-section'>
          <div className="container mx-auto culture-section__container">
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
            <div className="container mx-auto position-section__container">
                <h2 className='position-section__title'>Open positions</h2>

                <ul className='position-section__list'>
                    <li className='position-section__item'>
                        <Link to='/job-apply'>
                            <img className='position-section__item-img' src={Edu} alt="img" width={355} height={209}/>

                            <h3 className='position-section__item-title'>Community Manager</h3>

                            <p className='position-section__item-desc'>We are looking for a Community Manager with a lively mind and a creative approach to tasks, who is good at time  management, has an analytical mindset, is not afraid to make hypotheses and test them, and is focused on achieving ambitious goals.
                            </p>

                            <button className='position-section__item-btn'>
                                Apply
                            </button>
                        </Link>
                    </li>

                    <li className='position-section__item'>
                        <Link to='/job-apply'>
                            <img className='position-section__item-img' src={Edu} alt="img" width={355} height={209}/>

                            <h3 className='position-section__item-title'>Community Manager</h3>

                            <p className='position-section__item-desc'>We are looking for a Community Manager with a lively mind and a creative approach to tasks, who is good at time  management, has an analytical mindset, is not afraid to make hypotheses and test them, and is focused on achieving ambitious goals.
                            </p>

                            <button className='position-section__item-btn'>
                                Apply
                            </button>
                        </Link>
                    </li>

                    <li className='position-section__item'>
                        <Link to='/job-apply'>
                            <img className='position-section__item-img' src={Edu} alt="img" width={355} height={209}/>

                            <h3 className='position-section__item-title'>Community Manager</h3>

                            <p className='position-section__item-desc'>We are looking for a Community Manager with a lively mind and a creative approach to tasks, who is good at time  management, has an analytical mindset, is not afraid to make hypotheses and test them, and is focused on achieving ambitious goals.
                            </p>

                            <button className='position-section__item-btn'>
                                Apply
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>

        <section className='role-section'>
            <div className="container mx-auto">
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
    </main>
    )
}

export default Career