import styles from "./Section3.module.scss";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from "src/assets/slide3_1.svg";
import Slide2 from "src/assets/slide3_2.svg";
import Slide3 from "src/assets/slide3_3.svg";

export default function Section3() {

    return(
        <section className={styles.sec3}>
            <h2 className={styles.text}>
                <span className={styles.yellow}>RACE</span> TO EARN
            </h2>

            <div className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={3}
                    centeredSlides
                    loop
                    autoplay={{ delay: 2500 }}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 100,
                        },
                    }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        slideShadows: false,
                    }}
                >

                    <SwiperSlide><img src={Slide1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img src={Slide2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img src={Slide3} alt="Slide 3" /></SwiperSlide>

                </Swiper>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
    </section>
    )
}