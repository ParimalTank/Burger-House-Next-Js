import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import style from "../styles/Slider.module.css"

export const ProductSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrow: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1112,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={style.sliderMain}>
            <Slider {...settings} className={style.slider}>
                <div className={style.sliderContent}>
                    <div className={style.banner}>
                        <span className={style.text1}><b>IT IS A GOOD TIME FOR THE GREAT TEAST OF BURGER</b></span>
                        <span className={style.text2}>BURGER</span>
                        <span className={style.text2}>WEEK</span>
                    </div>
                    <div>
                        <div className={style.bannerslidermedia}>
                            <img src="/assets/img/1.png" alt="" className={`${style.bannerImage} img-fluid aos-init aos-animate`} data-aos="zoom-in" />
                            <div className={`${style.bannerBadge} aos-init aos-animate`} data-aos="fade-right">
                                <div className={style.bannerPrice}>20% <span>Off</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sliderContent}>
                    <div className={style.banner}>
                        <span className={style.text1}>IT IS A GOOD TIME FOR THE GREAT TEAST OF BURGER</span>
                        <span className={style.text2}>BURGER</span>
                        <span className={style.text2}>WEEK</span>
                    </div>
                    <div>
                        <div className={style.bannerslidermedia}>
                            <img src="/assets/img/1.png" alt="" className={`${style.bannerImage} img-fluid aos-init aos-animate`} data-aos="zoom-in" />
                            <div className={`${style.bannerBadge} aos-init aos-animate`} data-aos="fade-right">
                                <div className={style.bannerPrice}>20% <span>Off</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sliderContent}>
                    <div className={style.banner}>
                        <span className={style.text1}>IT IS A GOOD TIME FOR THE GREAT TEAST OF BURGER</span>
                        <span className={style.text2}>BURGER</span>
                        <span className={style.text2}>WEEK</span>
                    </div>
                    <div>
                        <div className={style.bannerslidermedia}>
                            <img src="/assets/img/1.png" alt="" className={`${style.bannerImage} img-fluid aos-init aos-animate`} data-aos="zoom-in" />
                            <div className={`${style.bannerBadge} aos-init aos-animate`} data-aos="fade-right">
                                <div className={style.bannerPrice}>20% <span>Off</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
