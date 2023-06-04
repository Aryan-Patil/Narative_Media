import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Data from "../Data/data.json";

export default function Services() {
    return (
        <div id='Services' className='services'>
            <div className="heading">
                SERVICES
            </div>
            <div className="row">
                <div className="col services-animation-tab">
                    <Player className='services-animation'
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_hwcplx4x.json"
                    />
                </div>
                <div className="col">
                    <div className="row">
                        {Data.services.map(data => {
                            return (
                                <div key={data.id} className="col">
                                    <div className="services-card">
                                        <img className='services-img' src={data.img} alt="" />
                                        <h2>{data.heading}</h2>
                                    </div>
                                </div>
                            )})}

                    </div>
                </div>
            </div>
        </div>
    )
}
