import Head from "next/head";
import Image from "next/image";
import styles from './MainContainer.module.css'
import Link from "next/link";
import localFont from "next/font/local";
import SignUpButton from '../SignUpButton/SignUpButton'
import MyHeader from '../MyHeader/MyHeader'
import MyFooter from "@/app/MainPage/Versions/Components/MyFooter/MyFooter";


const MainContainer = ({children}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <MyHeader/>
                <div>
                    {children}
                </div>
                {/*<SignUpButton/>*/}
                {/*<MyFooter/>*/}
            </div>
        </>
    );
};

export default MainContainer;

{/*<main className={myFont.className}>*/
}
{/*    <div className={styles.headerLine}>*/
}
{/*        <Image*/
}
{/*            className={styles.logo}*/
}
{/*            src="/Logo-picture.svg"*/
}
{/*            alt="Glossy Logo"*/
}
{/*            width={48}*/
}
{/*            height={45}*/
}
{/*        />*/
}
{/*        <div className={styles.border}>*/
}
{/*                <div className={styles.nav}>*/
}
{/*                    <Link className={styles.navItem} href="#">Раздел 1</Link>*/
}
{/*                    <Link className={styles.navItem} href="#">Раздел 2</Link>*/
}
{/*                    <Link className={styles.navItem} href="#">Раздел 3</Link>*/
}
{/*                    <Link className={styles.navItem} href="#">Оставить заявку</Link>*/
}
{/*                </div>*/
}
{/*                <Image*/
}
{/*                    className={styles.soon}*/
}
{/*                    src="/available.png"*/
}
{/*                    alt="Glossy Logo"*/
}
{/*                    width={360}*/
}
{/*                    height={32}*/
}
{/*                />*/
}
{/*            </div>*/
}
{/*    </div>*/
}
{/*</main>*/
}