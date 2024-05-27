import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import './serviceSingle.css';
import Bg from '../../assets/images/programming.jpeg';
import Bg1 from '../../assets/images/mission-one.jpeg';
import Bg2 from '../../assets/images/mission-two.jpeg';
import Bg3 from '../../assets/images/mission-three.jpeg';
import Bg4 from '../../assets/images/mission-four.jpeg';

const ServiceSingle = () => {

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
                    <section className='service-single__hero'>
                        <div className="container service-single__hero-container">
                            {
                                data.map((key) => {
                                    return (
                                        <>
                                            <p className='service-single__hero-title'>{key.title}</p>

                                            <img className='service-single__hero-img' src={key.images[0]} alt="img" width={1110} height={352}/>

                                            <p className='service-single__hero-desc'>{key.description}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* <section className='service-single__origin'>
                        <div className="container service-single__origin-container">
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
                    </section> */}
                </>
            )
        }

    </main>
  )
}

export default ServiceSingle