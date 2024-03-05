import sLogo from "src/assets/logo2.svg";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={sLogo}></img>
            <div className={styles.navigation}>
                <a href="#">NFTs</a>
                <a href="#">Utilities</a>
                <a href="#">Partners</a>
                <a href="#">Pitchdeck</a>
            </div>
            <div className={styles.buttons}>
                <a href="#">Watch trailer!</a>
                <a href="#">Mint your kart!</a>
            </div>
        </header>
    )
}