import React from 'react'
import homebackground from '../Images/Home_background.png';
import logo from '../Images/logo.png'
import { GrInstagram, GrFacebook, GrLinkedin } from 'react-icons/gr';
import { Player } from '@lottiefiles/react-lottie-player';
import Data from '../Data/data.json';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Header from './Header';
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function Home() {
    return (
        <div className='Home'>
            <img className='home-bg-img' src={homebackground} alt="" />
            <div className="Header">
                <Header />
                <div className="logo-info">
                    <img src={logo} className='logo' alt="" />
                    <div className="">
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrInstagram className='social-logo' /></a>
                        <a href="https://www.linkedin.com/company/narative-media/" target="_blank"><GrLinkedin className='social-logo' /></a>
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrFacebook className='social-logo' /></a>
                        
                    </div>
                </div>
            </div>
            <div className="home-content">
                <Player className='homepage-animation'
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_ik4jyixs.json"
                />
                <div className="home-content-info">
                    <span className='dec'>SOCIAL MEADIA MANAGEMENT</span>
                    <div className="hc-main">
                        <span>WE CREATE NARRATIVE THROUGH CONTENT</span>
                    </div>
                    <div className="btn-infor">
                        <a href="https://calendly.com/narative_media/30min" target="_blank" className="book-btn">
                            <span className="book-btn-txt">BOOK A MEETING</span>
                        </a>
                        <a href="#Contact" className="book-btn">
                            <span className="book-btn-txt">CONTACT US</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="trusted-by">
                <div className="trusted-head">
                    TRUSTED BY
                </div>
                <div className="trusted-by-body">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        freeMode={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, FreeMode, Pagination]}
                        className="mySwiper"
                    >{Data.trusted_by.map(data => {
                        return (
                            <SwiperSlide key={data.id}>
                                <div className="trusted-card">
                                    <div className="">
                                        <img className={data.img_or_logo} src={data.img_url} alt="" />
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
