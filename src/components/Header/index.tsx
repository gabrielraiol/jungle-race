import sLogo from "src/assets/logo2.svg";
import styles from "./Header.module.scss";
import { useState } from 'react';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <img src={sLogo}></img>
            <nav className={styles.navigation}>
                <a href="#">NFTs</a>
                <a href="#">Utilities</a>
                <a href="#">Partners</a>
                <a href="#">Pitchdeck</a>
            </nav>
            <div className={styles.buttons}>
                <div className={styles.container}>
                    <a href="#">Watch trailer!</a>
                </div>
                <div className={styles.container}>
                    <a className={styles.fullfill} href="#">Mint your kart!</a>
                </div>
            </div>
            <div className={styles.headerMobile}>
                <button className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`} onClick={handleMenuToggle}>
                    <span className={styles.bar} id="bar1"></span>
                    <span className={styles.bar} id="bar2"></span>
                    <span className={styles.bar} id="bar3"></span>
                </button>
                <nav className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
                    <a href="#">NFTs</a>
                    <a href="#">Utilities</a>
                    <a href="#">Partners</a>
                    <a href="#">Pitchdeck</a>
                </nav>
            </div>
        </header>
    )
}