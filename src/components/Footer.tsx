import React from 'react'
import style from "../styles/Footer.module.css";

export const Footer = () => {
    return (
        <div>
            <footer id="contact" className={style.footer}>
                <div className={style.footerTop}>
                    <div className={style.footerLogo}>
                        <img src="/assets/img/logo-footer.png" alt="" />
                        <span>Burger House</span>
                    </div>
                </div>
                <div className={style.footerMiddle}>
                    <p className={style.footerDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
                    <div className={style.footerContact}>
                        <div className={style.footerContactItem}>
                            <img src="/assets/img/location.svg" alt="" className={style.footerContactIcon} />
                            <a className={style.footerContactText} data-fancybox="" data-src="#address-popup" href="javascript:;">Büyükdere Cad., 22A, Istanbul, Turkey</a>
                        </div>
                        <div className={style.footerContactItem}>
                            <img src="/assets/img/email.svg" alt="" className={style.footerContactIcon} />
                            <a href="mailto:info@companyname.com" className={style.footerContactText}>info@companyname.com</a>
                        </div>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <p className={style.footerCopyright}>© Company Name 2021. All rights reserved.</p>
                    <div className={style.footerSocial}>
                        <a href="" className={style.instagram}><i className="fab fa-instagram"></i></a>
                        <a href="" className={style.facebook} ><i className="fab fa-facebook-f"></i></a>
                        <a href="" className={style.twitter}> <i className="fab fa-twitter"></i></a>
                        <a href="" className={style.whatsapp} ><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
