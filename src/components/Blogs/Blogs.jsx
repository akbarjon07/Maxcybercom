import React from 'react';
import './blogs.css';
import Img from '../../assets/images/Government.jpeg'

const Blogs = () => {
  return (
    <section className='blogs-section'>
        <div className="container mx-auto">
            <div className='blogs-section__title-wrapper flex items-center justify-center'>
                <h2 className='blogs-section__title'>Blogs</h2>

                <span className='blogs-section__span'></span>

                <h2 className='blogs-section__title ml-[15px]'>News</h2>

                <span className='blogs-section__span'></span>

                <h2 className='blogs-section__title ml-[15px]'>Insights</h2>
            </div>

            <p className='blogs-section__desc'>About latest technologies, cases and interviews</p>

            <ul className='blogs-section__list'>
                <li className='blogs-section__item'>
                    <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                    <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                    <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                    <button className='blogs-section__item-btn flex'>
                        Read

                        <svg className='ml-[10px] bi bi-arrow-right-circle' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8C0F95" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </button>
                </li>

                <li className='blogs-section__item'>
                    <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                    <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                    <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                    <button className='blogs-section__item-btn flex'>
                        Read
                        <svg className='ml-[10px] bi bi-arrow-right-circle' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8C0F95" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </button>
                </li>

                <li className='blogs-section__item'>
                    <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                    <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                    <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                    <button className='blogs-section__item-btn flex'>
                        Read
                        <svg className='ml-[10px] bi bi-arrow-right-circle' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8C0F95" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Blogs