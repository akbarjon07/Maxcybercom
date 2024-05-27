import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import "./field.css";

const Field = () => {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const lang = localStorage.getItem('lang');

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(`https://backend.max.kube.uz/api/v1/page/by-page-type-code?pageTypeCode=1&lang=${lang}`);
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
    <section className='field-section'>
        <div className="container mx-auto field-section__container">
            <div className='field-section__top flex flex-col items-center justify-center'>
                <h2 className='field-section__top-title'>{t('what we do')}</h2>

                <p className='field-section__top-desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec etiam pretium nibh molestie scelerisque urna justo</p>
            </div>

                {
                    loading ? (
                        <Loader/>
                    ) : (
                    <ul className='field-section__list'>
                      {
                        data.length ? data.map((key) => {
                            return (
                            <li className='field-section__item' key={key.id}>
                                <Link className='field-section__item-link' to={`/services/${key.id}`}>
                                    <img src={key.image} alt="img" width={56} height={56}/>

                                    <h3 className='field-section__item-title'>{key.title}</h3>

                                    <p className='field-section__item-desc truncate'>{key.description}</p>
                                </Link>
                            </li>
                        )}) : <p className='text-center'>Not Found</p>
                      }
                    </ul>
                    )
                }
        </div>
    </section>
  )
}

export default Field