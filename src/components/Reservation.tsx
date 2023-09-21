import React from 'react'
import style from "../styles/Reservation.module.css";

export const Reservation = () => {
    return (
        <div>
            <div className={style.reservation}>
                <div className={style.reservationLeft}>
                    <img src="/assets/img/burger.png" className='img-fluid' alt="" />
                    <img src="/assets/img/bottle.png" className='img-fluid' alt="" />
                </div>
                <div className={style.reservationCenter}>
                    <div className="section-header text-center">
                        <h5 className={style.sectionLabel}>Reservation</h5>
                        <h2 className={style.sectionTitle}>Book Your Table</h2>
                    </div>
                    <form className={style.reservationForm} method="post">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className={`${style.formGroup} ${style.form_pos}`}>
                                    <input type="text" name="name" required placeholder="Name" className={style.formControl} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={`${style.formGroup} ${style.form_pos}`}>
                                    <input type="email" name="email" required placeholder="Email" className={style.formControl} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={`${style.formGroup} ${style.form_pos}`}>
                                    <input type="text" name="date" required placeholder="Date" className={style.formControl} id="reserv_date" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={`${style.formGroup} ${style.form_pos}`}>
                                    <input type="text" name="time" required placeholder="Time" className={style.formControl} id="reserv_time" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={`${style.formGroup} ${style.form_pos}`}>
                                    <input type="number" name="people" required placeholder="People" className={style.formControl} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button type="submit" className={style.button}>Find a table</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={style.reservationRight}>
                    <img src="/assets/img/burger-food.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}
