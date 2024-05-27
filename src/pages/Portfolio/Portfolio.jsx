import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './portfolio.css';
import Loader from '../../components/Loader/Loader';

const Portfolio = () => {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const lang = localStorage.getItem('lang');

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(`https://backend.max.kube.uz/api/v1/page/by-page-type-code?pageTypeCode=4&lang=${lang}`);
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
    }, [lang]);

  return (
    <main>
        {
            loading ? (
                <Loader/>
            ) : (
                <>
                    <section className='portfolio-hero'>
                        <div className="container flex flex-col items-center justify-center">
                            <h1 className='portfolio-hero__title'>{t("portfolio")}</h1>

                            <p className='portfolio-hero__desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
                        </div>
                    </section>

                    <section className='portfolio-work'>
                        <div className="container">
                            <ul className='portfolio-work__list'>
                                {
                                    data.map((key) => {
                                        return (
                                            <li className='portfolio-work__item' key={key.id}>
                                                <Link to={`/portfolio/${key.id}`}>
                                                    <img className='portfolio-work__item-img' src={key.image} alt="img" width={373} height={228}/>

                                                    <h3 className='portfolio-work__item-title'>{key.title}</h3>

                                                    <p className='portfolio-work__item-desc'>{key.description}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
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

export default Portfolio