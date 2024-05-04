import React from 'react';
import './blog.css';
import { Link, Outlet } from 'react-router-dom';
import Img from '../../assets/images/Government.jpeg'

const Blogs = () => {
  return (
    <main>
        <section className='blog__hero-section'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className='blog__hero-title'>Blogs</h1>

                <p className='blog__hero-desc'>He’s so similar to me. In person, we’re just weird and silly and stupid together.</p>
            </div>
        </section>

        <section className='blog__list-section'>
          <div className="container mx-auto">
            <ul className='blog-section__list'>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
                <li className='blog-section__item'>
                    <Link to='/blog'>
                        <img className='blogs-section__item-img' src={Img} alt="Img" width={355} height={261}/>

                        <h4 className='blogs-section__item-title'>Mastering Cloud Costs</h4>

                        <p className='blogs-section__item-desc'>It’s well understood that cloud costs are, for the most part, based upon consumption and are not normally amortized as capital expenses — as IT costs were for many decades prior...</p>

                        <button className='blogs-section__item-btn flex'>
                            Read
                            <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_8013_2607)">
                                    <path d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z" fill="#8C0F95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" fill="#8C0F95"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_8013_2607">
                                    <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </li>
            </ul>
          </div>
        </section>
    </main>
  )
}

export default Blogs