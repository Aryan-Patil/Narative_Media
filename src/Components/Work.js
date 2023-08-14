import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import videoData from '../Data/data.json'; // Adjust the path accordingly

function Work() {
  const videos = videoData.work_sample;

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      const activeIndex = swiperInstance.activeIndex;

      if (activeIndex !== activeVideoIndex) {
        const prevVideoElement = swiperInstance.slides[activeVideoIndex]?.querySelector('video');
        if (prevVideoElement) {
          prevVideoElement.pause();
        }
      }

      setActiveVideoIndex(activeIndex);
    };

    swiperInstance.on('slideChange', handleSlideChange);

    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, [activeVideoIndex]);

  const handleVideoClick = (index) => {
    const swiperInstance = swiperRef.current.swiper;

    if (index !== activeVideoIndex) {
      const prevVideoElement = swiperInstance.slides[activeVideoIndex]?.querySelector('video');
      if (prevVideoElement) {
        prevVideoElement.pause();
      }
    }

    setActiveVideoIndex(index);
    const videoElement = swiperInstance.slides[index]?.querySelector('video');
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleVideoEnded = () => {
    const swiperInstance = swiperRef.current.swiper;

    // Pause the current video
    const currentVideoElement = swiperInstance.slides[activeVideoIndex]?.querySelector('video');
    if (currentVideoElement) {
      currentVideoElement.pause();
    }

    // Move to the next slide
    swiperInstance.slideNext();
  };

  return (
    <div className="Work">
      <div className="container">
        <h1 className="heading">Our Work</h1>
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} onClick={() => handleVideoClick(index)}>
              <video className={video.type === 1 ? 'wide' : video.type === 2 ? 'wide' : ''} controls onEnded={handleVideoEnded}>
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
            </div>
            <div className="swiper-button-next slider-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Work;
