import React from 'react'
import Slider from 'react-slick';
import style from "../styles/ItemSection.module.css";

export const ItemSection = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: false,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ItemData = [
        {
            id: 1,
            slickIndex: -3,
            itemTitle: "Hamburger4",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_1.png"
        },
        {
            id: 2,
            slickIndex: -2,
            itemTitle: "Hamburger5",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_2.png"
        },
        {
            id: 3,
            slickIndex: -1,
            itemTitle: "Hamburger6",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_3.png"
        },
        {
            id: 4,
            slickIndex: 0,
            itemTitle: "Hamburger7",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_1.png"
        },
        {
            id: 5,
            slickIndex: 1,
            itemTitle: "Hamburger8",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_2.png"
        },
        {
            id: 6,
            slickIndex: 2,
            itemTitle: "Hamburger9",
            itemSubTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            imageURL: "assets/img/menu_3.png"
        }
    ]

    return (
        <div>
            <section className="section" id="menu">
                <div className="section-header text-center">
                    <h5 className={`${style.sectionLabel} ${style.label}`}>Always Tasty Burger</h5>
                    <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                    <p className={`${style.sectionSubtitle} text-center`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>


                <div>
                    <Slider {...settings}>
                        {
                            ItemData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="text-center" style={{ width: "496px", paddingLeft: "15px", paddingRight: "15px" }} tabIndex={-1} data-slick-index={item.slickIndex} aria-hidden="true">
                                            <div className={style.menuSliderItemImage}>
                                                <img src={item.imageURL} alt="" className={style.menuSliderItemBurger} />
                                            </div>
                                            <div className="menu-slider-item-desc">
                                                <h4 className={style.menuSliderItemTitle}>{item.itemTitle}</h4>
                                                <p className={style.menuSliderItemSubtitle}>{item.itemSubTitle}</p>
                                                <a href="#contact" className={style.Button} tabIndex={-1}>Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* <div id="menu-slider" className="menu-slider slick-initialized slick-slider">

                    <div className="slick-list draggable" style={{ padding: "0px 50px" }}>
                        <div className="slick-track" style={{ opacity: "1", width: "7440px", transform: "translate3d(-1488px, 0px, 0px)" }}>
                           


                        </div>
                    </div>
                </div> */}
            </section>
        </div>

    )
}
