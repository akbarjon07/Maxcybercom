import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import './jobApply.css';
import Bg from '../../assets/images/job-apply-bg.jpeg';

const JobApply = () => {

    const { t } = useTranslation();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const lang = localStorage.getItem('lang');

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(`https://backend.max.kube.uz/api/v1/section/by-page-id?pageId=${id}&lang=${lang}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };

        fetchData();
    }, [id, lang]);



  return (
    <main>
        {
            loading ? (
                <Loader/>
            ) : (
                <>
                    {
                        data.length ? data.map((key) => {
                            return (
                                <>
                                    <section className='job-apply__hero'>
                                        <div className="container job-apply__hero-container">
                                            <h1 className='job-apply__hero-title'>{key.title}</h1>

                                            <p className='job-apply__hero-desc'>{key.description}</p>

                                            <img className='job-apply__hero-img' src={key.images[0]} alt="img" width={1110} height={523}/>
                                        </div>
                                    </section>
                                </>
                            )
                        }) : 'Not Found'
                    }
                    {/* <section className='job-apply__description'>
                        <div className="container job-apply__description-container">
                            <h2 className='job-apply__description-title'>Who and where are we looking for:</h2>

                            <p className='job-apply__description-desc'>We are looking for a Community Manager with a lively mind and a creative approach to tasks, who is good at time management, has an analytical mindset, is not afraid to make hypotheses and test them, and is focused on achieving ambitious goals. The main task of the Community Manager is maintaining social networks, managing and developing the community around the brand and Mad Devs channels, communicating with subscribers. We are waiting for a person who will breathe even more life and vibe into our social networks and channels Mad Devs.
                            </p>

                            <h2 className='job-apply__description-title'>What will need to do:</h2>

                            <ul className='job-apply__description-list'>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                            </ul>

                            <h2 className='job-apply__description-title'>Our expectations:</h2>

                            <ul className='job-apply__description-list'>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                            </ul>

                            <h2 className='job-apply__description-title'>Conditions:</h2>

                            <ul className='job-apply__description-list'>
                                <li className='job-apply__description-item'>Build a strategy for maintaining and developing social networks</li>
                                <li className='job-apply__description-item'>Build content plans</li>
                                <li className='job-apply__description-item'>Prepare TOR and monitor the performance of tasks on the ranking of posts</li>
                            </ul>
                        </div>
                    </section>

                    <section className='role-section'>
                        <div className="container">
                            <div className='role-section__wrapper'>
                                <h2 className='role-section__wrapper-title'>Join our team and embark on an exciting career journey with us.</h2>

                                <p className='role-section__wrapper-desc'>To apply for this position please send your resume and cover letter to [email protected] We look forward to hearing from you and potentially welcoming you to our team.</p>
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
                    </section> */}
                </>
            )
        }
    </main>
  )
}

export default JobApply