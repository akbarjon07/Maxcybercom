import React from 'react';
import './serviceSingle.css';
import Bg from '../../assets/images/programming.jpeg';
import Bg1 from '../../assets/images/mission-one.jpeg';
import Bg2 from '../../assets/images/mission-two.jpeg';
import Bg3 from '../../assets/images/mission-three.jpeg';
import Bg4 from '../../assets/images/mission-four.jpeg';

const ServiceSingle = () => {
  return (
    <main>
        <section className='service-single__hero'>
            <div className="container mx-auto service-single__hero-container">
                <p className='service-single__hero-title'>Programming & Development</p>

                <img className='service-single__hero-img' src={Bg} alt="img" width={1110} height={352}/>

                <p className='service-single__hero-desc'>
                    Website development has been our main activity since 2014.
                    <br />
                    <br />
                    We offer proven conditions for the development of landing pages, corporate sites, online stores, catalog sites, promotional sites, information portals, corporate portals, complex high load projects, Internet portals, personal accounts, mobile applications, mobile versions of the site.
                    <br />
                    <br />
                    We guarantee our clients the performance of any site or software product, provide technical support 24/7, work according to the T&M model, saving customers up to 30% of the budget.
                </p>
            </div>
        </section>

        <section className='service-single__origin'>
            <div className="container mx-auto service-single__origin-container">
                <h2 className='service-single__origin-title'>The Term Origin</h2>

                <p className='service-single__origin-desc'>
                    One of the possible origins of the expression is from the president of Kal Kan Pet Food. He said at a meeting with stakeholders that he could eat his dog food.
                    <br /><br />
                    While there were other options such as “icecreaming” (Microsoft), or “drinking your own champagne” (Pegasystems), nothing stuck. There were also such expressions as “the practice you preach”, or “you make your bed, you lie in it”. But dogfooding was new, crude, and something that stays in mind.
                    <br /><br />
                    In 1988, Paul Maritz, a Microsoft manager, sent a test manager an email titled “Eating our own Dogfood” with a request to increase the internal use of the company’s product. They even named a server “dogfood” for the staff to use.
                    <br /><br />
                    Since then, the expression has been used for the practice when a team uses the product they are working on.
                </p>

                <ul className='service-single__origin-list'>
                    <li className='service-single__origin-item'>
                        <img className='service-single__origin-img' src={Bg1} alt="img" width={239} height={280}/>
                    </li>

                    <li className='service-single__origin-item'>
                        <img className='service-single__origin-img' src={Bg2} alt="img" width={239} height={280}/>
                    </li>

                    <li className='service-single__origin-item'>
                        <img className='service-single__origin-img' src={Bg3} alt="img" width={239} height={280}/>
                    </li>

                    <li className='service-single__origin-item'>
                        <img className='service-single__origin-img' src={Bg4} alt="img" width={239} height={280}/>
                    </li>
                </ul>

                <h2 className='service-single__origin-title'>The Term Origin</h2>

                <p className='service-single__origin-desc'>
                    One of the possible origins of the expression is from the president of Kal Kan Pet Food. He said at a meeting with stakeholders that he could eat his dog food.
                    <br /><br />
                    While there were other options such as “icecreaming” (Microsoft), or “drinking your own champagne” (Pegasystems), nothing stuck. There were also such expressions as “the practice you preach”, or “you make your bed, you lie in it”. But dogfooding was new, crude, and something that stays in mind.
                    <br /><br />
                    In 1988, Paul Maritz, a Microsoft manager, sent a test manager an email titled “Eating our own Dogfood” with a request to increase the internal use of the company’s product. They even named a server “dogfood” for the staff to use.
                    <br /><br />
                    Since then, the expression has been used for the practice when a team uses the product they are working on.
                </p>
            </div>
        </section>
    </main>
  )
}

export default ServiceSingle