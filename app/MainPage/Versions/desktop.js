import localFont from "next/font/local";
import MainContainer from "@/app/MainPage/Versions/Components/MainContainer/MainContainer";
import MyPage from "@/app/MainPage/Versions/Components/MyPage/MyPage";
import Example from "@/app/MainPage/Versions/Components/Example";
import React, {lazy, Suspense, useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import styles from "../page.module.css";
import Image from "next/image";
import SecondPage from "@/app/MainPage/Versions/Components/SecondPage/SecondPage";
import SignUpButton from "@/app/MainPage/Versions/Components/SignUpButton/SignUpButton";
import MyFooter from "@/app/MainPage/Versions/Components/MyFooter/MyFooter";
import SubmitApp from "@/app/MainPage/Versions/Components/SubmitApp/SubmitApp";
import Progress from "@/app/MainPage/Versions/Components/Progress/Progress";
import ThirdPage from "@/app/MainPage/Versions/Components/ThirdPage/ThirdPage";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel, Pagination} from "swiper/modules";
import Test from "./Test/Test";

const myFont = localFont({src: "../../fonts/HalvarBreit-Lt.woff2"});

const LazyComponent = lazy(() => import("./Components/MyPage/MyPage"));

export default function Desktop() {
    const [showComponent, setShowComponent] = useState(false);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        // Устанавливаем высоту только на клиенте
        setWindowHeight(window.innerHeight);
    }, []);

    return (
        <MainContainer>
            {windowHeight > 0 && ( // Рендерим Swiper только когда высота известна
                <Swiper
                    direction={"vertical"}
                    mousewheel={true}
                    keyboard={{enabled: true, onlyInViewport: false}}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Mousewheel]}
                    className={styles.slider}
                    mousewheelControl={true}
                    height={windowHeight}
                    spaceBetween={120}
                >
                    <SwiperSlide><MyPage/></SwiperSlide>
                    <SwiperSlide><SecondPage/></SwiperSlide>
                    <SwiperSlide><ThirdPage/></SwiperSlide>
                    <SwiperSlide><Progress/></SwiperSlide>
                    <SwiperSlide><SubmitApp/></SwiperSlide>
                </Swiper>
            )}
        </MainContainer>
    );
}

