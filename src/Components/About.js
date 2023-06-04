import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
export default function About() {
  return (
    <div id='About' className='about'>
        <div className="heading about-head">ABOUT US</div>
        <div className="row">
            <div className="about-content col">
                <div>We are a startup that provides Content as a Service, catering to brands and influencers seeking to expand their social media presence.Our core offering is the creation of custom content that helps drive engagement and growth for our clients on various social media platforms.
            </div>
            <a className='book-a-meet' target="_blank" href="https://calendly.com/narative_media/30min">Book A Meeting</a>
            </div>
            <div className="col about-animation-tab">
            <Player className='about-animation'
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_VAcXFj87ku.json"
                    />
            
            </div>
        </div>
    </div>
  )
}
