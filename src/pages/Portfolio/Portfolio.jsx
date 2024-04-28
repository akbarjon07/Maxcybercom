import React from 'react';
import './portfolio.css';
import Tanwir from '../../assets/images/tanweer.jpeg';

const Portfolio = () => {
  return (
    <main>
        <section className='portfolio-hero'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className='portfolio-hero__title'>Our Works</h1>

                <p className='portfolio-hero__desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
            </div>
        </section>

        <section className='portfolio-work'>
            <div className="container mx-auto">
                <ul className='portfolio-work__list'>
                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>

                    <li className='portfolio-work__item'>
                        <img className='portfolio-work__item-img' src={Tanwir} alt="img" width={373} height={228}/>

                        <h3 className='portfolio-work__item-title'>Tanwir web project</h3>

                        <p className='portfolio-work__item-desc'>Category: Travel</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Portfolio