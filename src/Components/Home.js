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
import {Autoplay, FreeMode, Pagination } from "swiper";

export default function Home() {
    return (
        <div className='Home'>
            <img className='home-bg-img' src={homebackground} alt="" />
            <div className="Header">
                <div className="header">
                    <a className='header-text' href="#">HOME</a>
                    <a className='header-text' href="#About">ABOUT US</a>
                    <a className='header-text' href="#Services">SERVICES</a>
                    <a className='header-text' href="#Contact">CONTACT</a>
                </div>
                <div className="logo-info">
                    <img src={logo} className='logo' alt="" />
                    <div className="">
                        <a href=""><GrInstagram className='social-logo' /></a>
                        <a href=""><GrFacebook className='social-logo' /></a>
                        <a href=""><GrLinkedin className='social-logo' /></a>
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
                        <a href="" className="book-btn">
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
                        modules={[ Autoplay,FreeMode, Pagination]}
                        className="mySwiper"
                    >{Data.trusted_by.map(data =>{
                        return(
                            <SwiperSlide key={data.id}>
                                <img src={data.img_url} alt="" />
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
            <img src="https://drive.google.com/file/d/1rok8Y8sldtl9FJceR8BjsAzmNN1PeWsC" alt="" />
        </div>
    )
}
