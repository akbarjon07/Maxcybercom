import React from 'react';
import { useState, useEffect } from 'react';
import './blog.css';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const Blogs = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch('https://backend.max.kube.uz/api/v1/page/by-page-type-code?pageTypeCode=3');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.data);
            setLoading(false);
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
            <section className='blog__hero-section'>
              <div className="container flex flex-col items-center justify-center">
                  <h1 className='blog__hero-title'>Blogs</h1>

                  <p className='blog__hero-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
              </div>
            </section>

            <section className='blog__list-section'>
              <div className="container">
                <ul className='blog-section__list'>
                    {
                        data ? data.map((key => {
                            return (
                            <li className='blog-section__item'>
                                <Link to='/blog'>
                                    <img className='blogs-section__item-img' src={key.image} alt="Img" width={355} height={261}/>

                                    <h4 className='blogs-section__item-title'>{key.title}</h4>

                                    <p className='blogs-section__item-desc'>{key.description}</p>

                                    <button className='blogs-section__item-btn flex items-center'>
                                        Read

                                        <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                          <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                        </svg>
                                    </button>
                                </Link>
                            </li>
                        )})) : 'Not Found'
                    }
                </ul>
              </div>
            </section>
          </>
        )
       }
    </main>
  )
}

export default Blogs