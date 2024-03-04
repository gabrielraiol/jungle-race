import Logo from "src/assets/logo1.svg";
import Kart from "src/assets/img1.svg"
import sLogo from "src/assets/logo2.svg";
import styles from "./Section1.module.scss";

export default function Section1() {
    return (
        <section className={styles.body}>
            <header>
                <img src={sLogo}></img>
                <div>
                    <a href="#">NFTs</a>
                    <a href="#">Utilities</a>
                    <a href="#">Partners</a>
                    <a href="#">Pitchdeck</a>
                </div>
                <div>
                    <a href="#">Watch trailer!</a>
                    <a href="#">Mint your kart!</a>
                </div>
            </header>
            <div>
                <div>
                    <img src={Logo}></img>
                    <h2>Race with your kart in the jungle, battle other drivers and earn as you play!</h2>
                    <a href="#">START</a>
                    <a href="#">Mint your kart!</a>
                </div>
                <div>
                    <img src={Kart}></img>
                </div>
            </div>
        </section>
    )
}