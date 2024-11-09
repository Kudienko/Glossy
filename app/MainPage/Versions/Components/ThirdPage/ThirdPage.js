import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Lottie from "lottie-react";
import logoRound from "../../../../../public/logo_round_nocenter.json";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  const items = [
    {
      id: 1,
      imageUrl: "/ThirdIphone1.png",
      cirlce: "/whiteCircle1.svg",
      text: "Определите уровень сами или с помощью нашего теста",
    },
    {
      id: 2,
      imageUrl: "/ThirdIphone2.png",
      cirlce: "/whiteCircle2.svg",
      text: "Проходите подготовительный урок к просмотру эпизода",
    },
    {
      id: 3,
      imageUrl: "/ThirdIphone3.png",
      cirlce: "/whiteCircle3.svg",
      text: "Смотрите эпизод и практикуйте выученные слова",
    },
    {
      id: 4,
      imageUrl: "/ThirdIphone4.png",
      cirlce: "/whiteCircle4.svg",
      text: "Обсуждайте с AI-учителем фильм, закрепляя результат, и переходите к следующему эпизоду",
    },
  ];

  return (
      <main className={styles.page} id="block3">
        <div className={styles.page__main_block}>
          <div className={styles.main_block_container}>
            <Swiper
                direction={"horizontal"}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className={styles.slider}
                spaceBetween={20}
            >
              {items.map((item) => (
                  <SwiperSlide key={item.id} className={styles.slide}>
                    <div className={styles.main_block_body}>
                      <div className={styles.block_left}>
                        {/*<Image*/}
                        {/*    src={item.cirlce}*/}
                        {/*    alt="whiteCircle"*/}
                        {/*    width={16}*/}
                        {/*    height={152}*/}
                        {/*/>*/}
                        <div className={styles.text}>{item.text}</div>
                      </div>
                      <div className={styles.block_right}>
                        <Image
                            src={item.imageUrl}
                            alt="phone"
                            className={
                              item.imageUrl === "/ThirdIphone3.png"
                                  ? styles.zphone
                                  : styles.iphone
                            }
                            width={
                              item.imageUrl === "/ThirdIphone3.png" ? 755 : 456
                            }
                            height={
                              item.imageUrl === "/ThirdIphone3.png" ? 456 : 775
                            }
                        />
                        <Lottie animationData={logoRound} />
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
  );
};

export default ThirdPage;
