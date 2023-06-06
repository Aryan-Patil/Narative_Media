import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Contact() {
    const form = useRef();

    function loader(){
        document.querySelector('.msg_sent').classList.add('fade-in');
      }
      function loader2(){
        document.querySelector('.msg_sent').classList.add('fade-out');
      }
      function fadein(){
        setInterval(loader,1000);
        setInterval(loader2, 5000);
      }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w8i4cht', 'template_71dmufc', form.current, '-2FRTwK8Q9u_MZmJJ')
            .then((result) => {
                console.log(result.text);
                console.log("submitted");
                fadein();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="Contact" className='Contact-Us'>
            <div className="msg_sent">
                <span>Message was sent</span>
            </div>
            <div className="heading contact-head">CONTACT US</div>
            <div className="row">
                <div className="col contact-us-animation-tab">
                    <Player className='contact-us-animation'
                        autoplay
                        loop
                        src="https://assets6.lottiefiles.com/packages/lf20_6iywfzg9.json"
                    />
                </div>

                    <form className='contact-form col' ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col">
                                <div className="name contact-form-input">
                                    <input type="text" placeholder='Name' name="user_name" required />
                                </div>
                            </div>
                            <div className="col">
                                <div className="email contact-form-input">
                                    <input type="email" placeholder='Email' name="user_email" required />
                                </div>
                            </div>

                        </div>
                        <div className="mobile-no contact-form-input">
                            <input type="number" placeholder='Contact no.' min={1000000000} max={9999999999} name="user_contact" required />
                        </div>
                        <div className="contact-message">
                        <textarea placeholder='Message' name="message" />
                        </div>
                        <div className="submit-button-d">
                        <input className='submit-button' type="submit" value="Contact Us" />
                        </div>
                        
                    </form>
                </div>
            </div>

    )
}
