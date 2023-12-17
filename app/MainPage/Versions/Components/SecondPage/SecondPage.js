import React, {Component} from 'react';
import SignUpButton from "@/app/MainPage/Versions/Components/SignUpButton/SignUpButton";
import Lottie from "lottie-react";
import logoRound from "../../../../../public/logo_round.json"
import styles from "./Second.module.css"

class SecondPage extends Component {
    render() {
        return (
            <main className={styles.page}>
                <div className={styles.page__main_block}>
                    <div className={styles.main_block_container}>
                        <div className={styles.main_block_body}>
                            <div className={styles.block_left}>
                                <div className={styles.block_top}>
                                    <div className={styles.border_white}>
                                        <img src="/1punkt.svg" alt="personal plan" className={styles.icon}/>
                                        <div className={styles.text1}>
                                            Персональный план обучения <br/>
                                            или полная свобода
                                        </div>
                                    </div>
                                    <div className={styles.text2}>
                                        Подберем фильмы и сериалы под твои <br/>
                                        интересы, уровень языка и цели. Или <br/>
                                        выбирай любой фильм сам
                                    </div>
                                </div>
                                <div className={styles.block_bot}>
                                    <div className={styles.border_white}>
                                        <img src="/2punkt.svg" alt="personal plan" className={styles.icon}/>
                                        <div className={styles.text1}>
                                            Адаптивные субтитры <br/> для комфортного просмотра
                                        </div>
                                    </div>
                                    <div className={styles.text2}>
                                        Умный алгоритм сам переведет слова <br/>
                                        из субтитров, которые вы еще не знаете
                                    </div>
                                </div>
                            </div>
                            <div className={styles.block_right}>
                                <div className={styles.block_top}>
                                    <div className={styles.border_white}>
                                        <img src="/3punkt.svg" alt="personal plan" className={styles.icon}/>
                                        <div className={styles.text1}>
                                            Целые фильмы и сериалы
                                        </div>
                                    </div>
                                    <div className={styles.text2}>
                                        Наслаждайтесь сюжетом всего фильма <br/> c полным погружением в язык
                                    </div>
                                </div>
                                <div className={styles.block_bot}>
                                    <div className={styles.border_white}>
                                        <img src="/4punkt.svg" alt="personal plan" className={styles.icon}/>
                                        <div className={styles.text1}>
                                            Следите за прогрессом
                                        </div>
                                    </div>
                                    <div className={styles.text2}>
                                        Выполняй упражнения по просмотренному <br/> фильму и следите за достижением <br/> вашей цели
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fon}> <Lottie animationData={logoRound}/> </div>
                        </div>
                    </div>
                </div>
                <SignUpButton/>
            </main>

        );
    }
}

export default SecondPage;