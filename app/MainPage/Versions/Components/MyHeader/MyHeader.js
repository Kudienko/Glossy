import React from 'react';
import styles from "./MyHeader.module.css";
import Image from "next/image";
import Link from "next/link";

const MyHeader = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Image
                    className={styles.header__logo}
                    src="/Logo-picture.svg"
                    alt="Glossy Logo"
                    width={48}
                    height={45}
                />
                <nav className={styles.header__menu}>
                    <ul className={styles.header__menu__list}>
                        <li className={styles.header__menu__item}>
                            <Link href="#" className={styles.header__menu__link}>Раздел 1</Link>
                        </li>
                        <li className={styles.header__menu__item}>
                            <Link href="#" className={styles.header__menu__link}>Раздел 2</Link>
                        </li>
                        <li className={styles.header__menu__item}>
                            <Link href="#" className={styles.header__menu__link}>Раздел 3</Link>
                        </li>
                        <li className={styles.header__menu__item}>
                            <Link href="#" className={styles.header__menu__link}>Оставить заявку</Link>
                        </li>
                    </ul>
                    <Image
                        className={styles.soonImage}
                        src="/soon.png"
                        alt="Available soon"
                        width={360}
                        height={32}
                    />
                </nav>

            </div>
        </header>
    );
};

export default MyHeader;