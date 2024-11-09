import React from 'react';
import styles from './MyPage.module.css'
import Image from "next/image";
import Lottie from "lottie-react";
import mouse from "../../../../../public/mouse_bounce.json"
import logoRound from "../../../../../public/logo_round_nocenter.json"


const MyPage = () => {
    return (
        <main className={styles.page} id="block1">
            <div className={styles.page__main_block}>
                <div className={styles.main_block_container}>
                    <div className={styles.main_block_body}>
                        <div className={styles.block_left}>
                            <div className={styles.block_left_top}>
                                <div className={styles.text1}>
                                    Наслаждайтесь любимыми <br/>сериалами, изучая английский с
                                </div>
                                <Image
                                    src="/glossy.png"
                                    className={styles.logo_text}
                                    alt='Logo'
                                    width={592}
                                    height={110}
                                />
                            </div>
                            <div className={styles.block_left_bottom}>
                                <div className={styles.text2}>
                                    Мы научим понимать устную речь, говорить<br/> и читать без перевода с помощью
                                    кино <br/> и сериалов
                                </div>
                                <div className={styles.button}>
                                    <div className={styles.black__button}>
                                        <p className={styles.text__black_button}>
                                            Попробовать бесплатно
                                        </p>
                                        <div className={styles.circle}>
                                            <Image
                                                className={styles.arrow}
                                                src="arrow.svg"
                                                alt="Попробовать бесплатно"
                                                width={22.04}
                                                height={22.04}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block_right}>
                            <Image src="/iPhone.png" alt="phone" className={styles.iphone} width={456} height={767}/>
                            <Lottie animationData={logoRound}/>
                        </div>
                    </div>
                    <div className={styles.footer_container}>
                        <div className={styles.scroll}>
                            <Lottie animationData={mouse}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyPage;
