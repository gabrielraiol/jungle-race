import styles from "./Section2.module.scss";
import Monkey from "src/assets/imgSec2.png";
import Layer1 from "src/assets/sec2Layer1.png";
import Layer2 from "src/assets/sec2Layer2.png";

export default function Section2() {
    return (
        <section className={styles.sec2}>

            <div className={styles.layer1}>
                <img src={Layer1}/>
            </div>
            <div className={styles.layer2}>
                <img src={Layer2}/>
            </div>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img src={Monkey}/>
                </div>

                <div className={styles.content}>
                    <h3>ABOUT</h3>
                    <h2>JUNGLE RACE</h2>
                    <p>Jungle Race is a revolutionary P2E NFT racing game in which the objective is to drive through various race tracks based in a Jungle with various racing modes available. Join our game hub and select your favorite game to play.</p>
                    <div className={styles.buttonsContainer}>
                        <a className={styles.fullfill} href="#">Mint your kart!</a>
                        <a href="#">Join our Community!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}