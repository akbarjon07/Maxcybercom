import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import './services.css';

const Services = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch('https://backend.max.kube.uz/api/v1/page/by-page-type-code?pageTypeCode=1');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
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
            <section className='service__hero-section'>
                <div className="container flex flex-col items-center justify-center">
                    <h1 className='service__hero-title'>Services</h1>

                    <p className='service__hero-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
                </div>
            </section>

            <section className='service__list-wrapper'>
              <div className="container">
                <ul className='field-section__list'>
                    {data.map((key) => {
                            return (
                            <li className='field-section__item'>
                                <Link className='field-section__item-link' to='/service'>
                                    <img src={key.image} alt="img" width={56} height={56}/>

                                    <h3 className='field-section__item-title'>{key.title}</h3>

                                    <p className='field-section__item-desc'>{key.description.slice(0, 100)}</p>
                                </Link>
                            </li>
                        )})}
                </ul>
              </div>
            </section>

            <section className='service__contact'>
                <div className="container flex flex-col items-center justify-center">
                    <h2 className='service__contact-title'>Have a project? lets talk about it.</h2>

                    <Link to='/contacts'>
                        <button className='service__contact-btn'>
                            Get in touch!
                        </button>
                    </Link>
                </div>
            </section>
        </>
       ) }
    </main>
  )
}

export default Services