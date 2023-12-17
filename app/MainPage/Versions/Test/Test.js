// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import styles from "./Test.module.css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from 'swiper/modules';

const Test = () => {
  const items = [
    {
      id: 1,
      slide: "Slide 1",
      imageUrl: "/ThirdIphone1.png",
      text: "Определите уровень сами или с помощью нашего теста",
    },
    {
      id: 2,
      slide: "Slide 2",
      imageUrl: "/ThirdIphone2.png",
      text: "Проходите подготовительный урок к просмотру эпизода",
    },
    {
      id: 3,
      slide: "Slide 3",
      imageUrl: "/ThirdIphone3.png",
      text: "Смотрите эпизод и практикуйте выученные слова",
    },
    {
      id: 4,
      slide: "Slide 4",
      imageUrl: "/ThirdIphone4.png",
      text: "Обсуждайтес AI-учителем фильм, закрепляя результат, и переходите к следующему эпизоду",
    },
  ];
  const SLIDES_PER_VIEW = 1;
  return (
    <main className={styles.page}>
      <div className={styles.page__main_block}>
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
        >
          <div className={styles.main_block_container}>
            {items.map((item) => (
              <SwiperSlide key={item.id} className={styles.slide}>
                {item.slide} <br />
                <Image
                  src={item.imageUrl}
                  alt="phone"
                  width={500}
                  height={600}
                />
                <br />
                <p>{item.text}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </main>
  );
};

export default Test;
