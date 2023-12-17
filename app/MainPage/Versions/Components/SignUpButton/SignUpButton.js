import Image from 'next/image'
import styles from './SignUpButton.module.css'
import React from "react";

export default function SignUpButton() {
    return (
            <div className={styles.button__container}>
                <div className={styles.button__gradient}>
                    <div className={styles.button__black}>
                        <div className={styles.text__button}>ПОПРОБОВАТЬ БЕСПЛАТНО</div>
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
    );
}