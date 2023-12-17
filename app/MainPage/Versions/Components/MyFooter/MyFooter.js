import Marquee from "react-fast-marquee";
import styles from './MyFooter.module.css'

const MyFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__container__top}>
                    <div className={styles.line}>
                        <div className={styles.textLine}>
                            <Marquee>
                                Glossy • Glossy • Glossy • Glossy • Glossy • Glossy • Glossy • Glossy • Glossy • Glossy •
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__container__bottom}>
                    <div className={styles.support}>
                        support@glossy.social
                    </div>
                    <div className={styles.year}>
                        2023
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;