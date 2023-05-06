import Image from 'next/image'
import styles from './page.module.css'
import localFont from 'next/font/local';

const myFont = localFont({ src: '../public/HalvarBreit-Lt.woff2' });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentGrid}>

        <div className={styles.imageBlock}>
          <Image
            className={styles.logo}
            src="/l_b_1.svg"
            alt="Glossy Logo"
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>
        <div className={styles.rightContentBlock}>
          <Image
            className={styles.logo}
            src="/r_b_1.svg"
            alt="Glossy Logo"
            layout='fill'
            objectFit='contain'
            priority
          />

          <Image
            className={styles.logo}
            src="/r_b_2.svg"
            alt="Glossy Logo"
            layout='fill'
            objectFit='contain'
          />
          <div className={myFont.className}>
            <p>Поможем изучать иностранные языки при помощи уникальных упражнений, сгенерированных из медиа контента.</p>
          </div>

          <Image
            className={styles.logo}
            src="/r_b_3.svg"
            alt="Glossy Logo"
            layout='fill'
            objectFit='contain'
            priority
          />

        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://t.me/glossy_edu_bot"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={myFont.className}>
            <h2>SIGN UP FOR BETA TESTING <span>&gt;</span><span>&gt;</span></h2>
          </div>
          <div className={styles.goButton}>
          <Image
            className={styles.arrowImage}
            src="/arrow.svg"
            alt="Glossy Logo"
            width={24}
            height={24}
          />
          </div>
        </a>
      </div>
    </main>
  )
}
