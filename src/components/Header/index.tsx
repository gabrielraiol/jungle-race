import sLogo from "src/assets/logo2.svg";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.headerDesktop}>
            <img src={sLogo}></img>
            <div className={styles.navigation}>
                <a href="#">NFTs</a>
                <a href="#">Utilities</a>
                <a href="#">Partners</a>
                <a href="#">Pitchdeck</a>
            </div>
            <div className={styles.buttons}>
                <div className={styles.container}>
                    <a href="#">Watch trailer!</a>
                </div>
                <div className={styles.container}>
                    <a className={styles.fullfill} href="#">Mint your kart!</a>
                </div>
            </div>
        </header>
    )
}