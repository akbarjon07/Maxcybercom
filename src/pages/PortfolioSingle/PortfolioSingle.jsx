import React, { useEffect, useState } from 'react';
import './portfolioSingle.css';
import Bg from '../../assets/images/port-bg.jpg';
import Bg2 from '../../assets/images/port-bg2.jpg';

const PortfolioSingle = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://backend.max.kube.uz/api/v1/section/by-page-id?pageId=1&lang=uz');
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //         setData(jsonData.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };

    //     fetchData();
    // }, []);


  return (
    <main>
        <section className='works-section__hero'>
            <div className="container mx-auto works-section__hero-сontainer">
                <div className='works-section__hero-wrapper'>
                    <h1 className='works-section__hero-title'>Tanwir - umrah & hajj</h1>

                    <p className='works-section__hero-desc'>TANWIR provides hotel and aviation services to pilgrims during the seasons of Hajj and Umrah, with high quality conditions and affordable prices.</p>
                </div>

                <img className='works-section__hero-img' src={Bg} alt="img" width={628} height={353}/>
            </div>
        </section>

        <section className='works-section__function'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className='works-section__function-title'>Key functionalities:</h2>

                <ul className='works-section__function-list'>
                    <li className='works-section__function-item'>
                        Web and mobile platform for the sale of Umrah pilgrimage packages and services
                    </li>
                    <li className='works-section__function-item'>
                        Online filing service for the purchase of packages for B2C clients (Under development)
                    </li>
                    <li className='works-section__function-item'>
                        Online filing service for the purchase of packages for B2C clients (Under development)
                    </li>
                    <li className='works-section__function-item'>
                        Sales tool for employees and subagents (Beta version)
                    </li>
                </ul>

                <img className='works-section__function-img' src={Bg2} alt="img" width={828} height={640}/>
            </div>
        </section>

        <section className='works-section__technologies'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className='works-section__function-title'>Development technologies:</h2>

                <ul className='works-section__technologies-list'>
                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>

                    <li className='works-section__technologies-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="73" viewBox="0 0 64 73" fill="none">
                            <path d="M52.7102 35.3791V37.8958H55.2375V35.3791H52.7102Z" fill="#051022"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6552 21.8978C63.6552 20.7077 63.4025 19.6347 62.8776 18.7372C62.3722 17.8397 61.614 17.0984 60.6031 16.5131C56.404 14.0841 52.2 11.6551 47.996 9.22615C43.792 6.79718 39.5881 4.36822 35.3889 1.93924C33.1144 0.632061 30.9371 0.671097 28.682 1.99775C26.9389 3.02499 21.5506 6.13583 16.0862 9.29058C11.0683 12.1875 5.98625 15.1215 3.60391 16.5131C1.54318 17.7032 0.551758 19.5371 0.551758 21.9173V51.2601C0.551758 52.4307 0.804466 53.4647 1.29048 54.3622C1.79598 55.2792 2.57359 56.0595 3.60391 56.6643C5.5425 57.7923 9.24888 59.9306 13.2547 62.2417L13.2574 62.2433C19.5748 65.8881 26.636 69.962 28.682 71.1797C30.9371 72.5061 33.1338 72.5646 35.3889 71.2382C40.5962 68.214 45.8109 65.2047 51.0239 62.1966L51.0286 62.1938C54.2215 60.3513 57.4137 58.5092 60.6031 56.6643C61.6529 56.0595 62.4111 55.2986 62.9165 54.3622C63.4025 53.4647 63.6552 52.4307 63.6552 51.2601V21.8978ZM41.1821 41.7003C39.3936 44.8804 35.9916 47.046 32.084 47.046C28.1959 47.046 24.8134 44.9194 23.0248 41.7588C22.15 40.2176 21.6445 38.4617 21.6445 36.5692C21.6445 30.7748 26.3102 26.0924 32.084 26.0924C35.9332 26.0924 39.2964 28.1995 41.1044 31.3211L50.2219 26.0534C46.5866 19.7713 39.8213 15.5377 32.0646 15.5377C20.4781 15.5377 11.1079 24.9609 11.1079 36.5692C11.1079 40.3736 12.1187 43.9635 13.8879 47.046C17.5037 53.3477 24.3079 57.6008 32.084 57.6008C39.8797 57.6008 46.6838 53.3282 50.2997 46.9875L41.1821 41.7003ZM52.7102 31.5942H50.6301V33.2915H48.9584V35.3791H50.6301V37.8958H48.9584V39.9834H50.6301V41.6808H52.7102V39.9834H55.2375V41.6808H57.3176V39.9834H59.0091V37.8958H57.3176V35.3791H59.0091V33.2915H57.3176V31.5942H55.2375V33.2915H52.7102V31.5942Z" fill="#051022"/>
                        </svg>

                        <p className='works-section__technologies-desc'>CSHARP</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
  )
}

export default PortfolioSingle