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
            </div>
        </>
    );
};

export default MainContainer;
