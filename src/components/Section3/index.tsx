import styles from "./Section3.module.scss";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import Slide1 from "src/assets/slide3_1.svg";
import Slide2 from "src/assets/slide3_2.svg";
import Slide3 from "src/assets/slide3_3.svg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Section3() {

    return(
        <section className={styles.sec3}>
            <h2 className={styles.text}>
                <span className={styles.yellow}>RACE</span> TO EARN
            </h2>

            <div className={styles.swiperContainer}>
                <Swiper
                    autoplay={{ delay: 2500 }}
                    loop
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                >
                    <SwiperSlide><img src={Slide1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img src={Slide2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img src={Slide3} alt="Slide 3" /></SwiperSlide>
                </Swiper>
            </div>
    </section>
    )
}