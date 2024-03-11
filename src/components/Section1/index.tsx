import Logo from "src/assets/logo1.svg";
import Kart from "src/assets/imgSec1.png"
import styles from "./Section1.module.scss";
import Header from "../Header";

export default function Section1() {
    return (
        <section className={styles.sec1}>
            < Header />
            <div className={styles.main}>
                <div className={styles.firstContainer}>
                    <img src={Logo}></img>
                    <h2>Race with your kart in the jungle, battle other drivers and earn as you play!</h2>
                    <div className={styles.buttonsContainer}>
                        <a className={styles.fullfill} href="#">START ▸</a>
                        <a href="#">Mint your kart!</a>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <img src={Kart}></img>
                </div>
            </div>
        </section>
    )
}