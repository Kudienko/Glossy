import React from "react";
import styles from "./ThirdPage.module.css";
import Image from "next/image";
import Lottie from "lottie-react";
import logoRound from "../../../../../public/logo_round_nocenter.json";
import SignUpButton from "../SignUpButton/SignUpButton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

const ThirdPage = () => {
  const items = [
    {
      id: 1,
      slide: "Slide 1",
      imageUrl: "/ThirdIphone1.png",
      cirlce: "/whiteCircle1.svg",
      text: "Определите уровень сами или с помощью нашего теста",
    },
    {
      id: 2,
      slide: "Slide 2",
      imageUrl: "/ThirdIphone2.png",
      cirlce: "/whiteCircle2.svg",
      text: "Проходите подготовительный урок к просмотру эпизода",
    },
    {
      id: 3,
      slide: "Slide 3",
      imageUrl: "/ThirdIphone3.png",
      cirlce: "/whiteCircle3.svg",
      text: "Смотрите эпизод и практикуйте \n выученные слова",
    },
    {
      id: 4,
      slide: "Slide 4",
      imageUrl: "/ThirdIphone4.png",
      cirlce: "/whiteCircle4.svg",
      text: "Обсуждайтес AI-учителем фильм, закрепляя результат, и переходите к следующему эпизоду",
    },
  ];
  return (
    <main className={styles.page}>
      <div className={styles.page__main_block}>
        <div className={styles.main_block_container}>
          <Swiper
            direction={"vertical"}
            mousewheel={true}
            keyboard={{ enabled: true, onlyInViewport: false }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            className={styles.slider}
            mousewheelControl={true}
            height={window.innerHeight}
            spaceBetween={120}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                <div className={styles.main_block_body} key={item.id}>
                  <div className={styles.block_left}>
                    <Image
                      src={item.cirlce}
                      alt="whiteCircle"
                      width={16}
                      height={152}
                    />
                    <div className={styles.text}>{item.text}</div>
                  </div>

                  <div className={styles.block_right}>
                      {/* <Lottie animationData={Video} /> */}
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
        <SignUpButton />
      </div>
    </main>
  );
};

export default ThirdPage;
