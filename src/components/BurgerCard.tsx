import Image from 'next/image';
import React from 'react'
import style from "../styles/BurgerCard.module.css";

export const BurgerCard = () => {
    return (
        <div className={style.bannerGrid}>
            <div className={style.bannerGridRow}>
                <div className={style.bannerGridColumn}>
                    <a href="" title="" className={style.bannerGridBig}>
                        <div className={style.bannerGridText}>
                            <h4 className={style.bannerGridSubject}>Try it today</h4>
                            <h3 className={style.bannerGridTitle}>Most popular banner</h3>
                        </div>
                        <Image fill={true} src="/assets/img/b1.png" alt="" className={style.bannerGridImage} />
                    </a>
                </div>
                <div className={style.bannerGridColumn}>
                    <a href="" title="" className={style.bannerGridSmall}>
                        <div className={style.bannerGridText}>
                            <h4 className={style.bannerGridSubject}>Try it today</h4>
                            <h3 className={style.bannerGridTitle}>More fun more taste</h3>
                        </div>
                        <Image fill={true} src="/assets/img/s1.png" alt="" className={style.bannerGridImage} />
                    </a>
                    <a href="" title="" className={style.bannerGridSmall}>
                        <div className={style.bannerGridText}>
                            <h4 className={style.bannerGridSubject}>Try it today</h4>
                            <h3 className={style.bannerGridTitle}>Fresh &amp; Chili</h3>
                        </div>
                        <Image fill={true} src="/assets/img/s2.png" alt="" className={style.bannerGridImage} />
                    </a>
                </div>
            </div>
        </div>
    )
}
