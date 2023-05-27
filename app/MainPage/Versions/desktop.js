import Image from 'next/image'
import styles from '../../MainPage/page.module.css'
import SignUpButton from './Components/signUpButton';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../fonts/HalvarBreit-Lt.woff2' });


export default function Desktop() {
  return (
    <main className={styles.main}>
      <div className={styles.contentGrid}>

        <div className={styles.imageBlock}>
          <Image
            className={styles.logo}
            src="/l_b_1.png"
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
      <SignUpButton />
    </main>
  )
}