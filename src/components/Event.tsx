import React from 'react'
import Slider from 'react-slick';
import style from "../styles/Event.module.css";

export const Event = () => {

    var settings = {
        className: "",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <div style={{ marginTop: "156px", marginBottom: "100px" }}>
            {/* <div className={style.events}>
                <div className="events-wrapper slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                        <div className="slick-track" style={{ opacity: "1", width: "2928px" }}>

<div className="events-wrapper slick-initialized slick-slider slick-dotted">
                    <Slider {...settings}>

                        <div className={`${style.eventsItem} slick-slide slick-current slick-active`} data-slick-index="0" aria-hidden="false" style={{ width: "976px", position: "relative", left: "0px", top: "0px", zIndex: "999", opacity: "1" }} tabIndex={0} role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always Tasty Burger</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>


                        <div className={`${style.eventsItem} slick-slide`} data-slick-index="1" aria-hidden="true" style={{ width: "976px", position: "relative", left: "-976px", top: "0px", zIndex: "998", opacity: "0" }} tabIndex={-1} role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always Tasty</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>


                        <div className={`${style.eventsItem} slick-slide`} data-slick-index="2" aria-hidden="true" style={{ width: "976px", position: "relative", left: "-1952px", top: "0px", zIndex: "998", opacity: "0" }} tabIndex={-1} role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>

                    </Slider>
                </div>
                          

                        </div>
                    </div>

                    <ul className="slick-dots" style={{ display: "block" }} role="tablist">
                        <li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabIndex={0} aria-selected="true">1</button></li>
                        <li role="presentation">
                            <button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabIndex={-1}>2</button></li>
                        <li role="presentation"><button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabIndex={-1}>3</button>
                        </li>
                    </ul>


                </div>
            </div> */}

            <div className={style.events}>
                <div className="events-wrapper slick-initialized slick-slider slick-dotted">
                    <Slider {...settings}>

                        <div className={`${style.eventsItem} slick-slide slick-current slick-active`} data-slick-index="0" aria-hidden="false" style={{ width: "976px", position: "relative", left: "0px", top: "0px", zIndex: "999", opacity: "1" }} tabIndex={0} role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always Tasty Burger</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            {/* eslint-disable-next-line padded-blocks */}
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>


                        <div className={`${style.eventsItem} slick-slide`} data-slick-index="1" aria-hidden="true" style={{ width: "976px", position: "relative", left: "-976px", top: "0px", zIndex: "998", opacity: "0" }} tabIndex={-1} role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always Tasty</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            {/* eslint-disable-next-line padded-blocks */}
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>


                        <div className={`${style.eventsItem} slick-slide`} data-slick-index="2" aria-hidden="true" style={{ width: "976px", position: "relative", left: "-1952px", top: "0px", zIndex: "998", opacity: "0" }} tabIndex={-1} role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                            <div className={style.sectionHeader}>
                                <h5 className={style.sectionLabel}>Always</h5>
                                <h2 className={style.sectionTitle}>Choose &amp; Enjoy</h2>
                                <p className={style.sectionSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            {/* eslint-disable-next-line padded-blocks */}
                            <img src="/assets/img/event_1.jpeg" alt="" className={style.eventsItemImage} />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
