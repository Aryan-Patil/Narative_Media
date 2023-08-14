import React from 'react'
import logo from '../Images/logo.png'
import { GrInstagram, GrFacebook, GrLinkedin, GrMapLocation } from 'react-icons/gr';
import { SiMinutemailer } from "react-icons/si";
import useWindowResize from '../useWindowResize';
export default function Footer() {
    const { width } = useWindowResize();
    return (
        <div className='footer'>{width >= 810 ?
            <div class="row">
                <div class="col-sm-6 col-md-4 col-6 col">
                    <img className='footer-logo' src={logo} alt="" />
                    <div className="basic-info">We are a startup that provides Content as a Service, catering to brands and influencers seeking to expand their social media presence.Our core offering is the creation of custom content that helps drive engagement and growth for our clients on various social media platforms.</div>
                </div>
                <div className="footer-header-info col-sm-6 col-md-4 col-6 col">
                    <div><a href="#">HOME</a></div>
                    <div><a href="#About">ABOUT US</a></div>
                    <div><a href="#Services">SERVICES</a></div>
                    <div><a href="#Contact">CONTACT</a></div>
                </div>
                <div className="col-sm-6 col-md-4 col-6 col">
                    <div className="mail-detail">
                        <SiMinutemailer className='mail-logo' />
                        <a className='footer-about-details' href="mailto:visualvibeteam@gmail.com">narativemedia@gmail.com</a>
                    </div>
                    <div className="location-detail">
                        <GrMapLocation className='location-logo' />
                        <span className='footer-about-details'> Mumbai, Maharashtra, IN</span>
                    </div>
                    <div className="social-media-details">
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrInstagram className="social-media-logo" /></a>
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrFacebook className="social-media-logo" /></a>
                        <a href="https://www.linkedin.com/company/narative-media/" target="_blank"><GrLinkedin className="social-media-logo" /></a>
                    </div>
                </div>
            </div>
            :

            <div class="row">
                <div class=" col">
                    <img className='footer-logo' src={logo} alt="" />
                    <div className="social-media-details-">
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrInstagram className="social-media-logo" /></a>
                        <a href="https://instagram.com/narative.media?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><GrFacebook className="social-media-logo" /></a>
                        <a href="https://www.linkedin.com/company/narative-media/" target="_blank"><GrLinkedin className="social-media-logo" /></a>
                    </div>
                </div>
                <div class="footer-2 col">
                    <div className="mail-detail">
                        <SiMinutemailer className='mail-logo' />
                        <a className='footer-about-details' href="mailto:visualvibeteam@gmail.com" >narativemedia@gmail.com</a>
                    </div>
                    <div className="location-detail">
                        <GrMapLocation className='location-logo' />
                        <span className='footer-about-details'> Mumbai, Maharashtra, IN</span>
                    </div>
                </div>
            </div>}
            <div className='copyright'>© Copyright NARATIVE MEDIA | All Rights Reserved   2023  |  Created By Aryan Patil   |   <a href="https://aryanpatil.me" target="_blank">aryanpatil.me</a></div>
        </div>
    )
}
