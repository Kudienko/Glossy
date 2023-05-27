import Image from 'next/image';
import styles from '../../MainPage/page.module.css';
import SignUpButton from './Components/signUpButton';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../fonts/HalvarBreit-Lt.woff2' });

export default function Mobile() {
  return (
    <main className={styles.mainMobile}>
        <Image
            className={styles.logo}
            src="/r_b_1_mobile.png"
            alt="Available soon"
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
          <Image
            className={styles.logoMobile}
            src="/l_b_1.png"
            alt="Glossy Logo"
            layout='fill'
            objectFit='contain'
            priority
          />
          <div className={myFont.className}>
            <p>Поможем изучать иностранные языки при помощи уникальных упражнений, сгенерированных из медиа контента.</p>
          </div>

          <Image
            className={styles.logo}
            src="/first-block.png"
            alt="Blocks"
            layout='fill'
            objectFit='contain'
            priority
          />
           <Image
            className={styles.logo}
            src="/second-block.png"
            alt="Blocks"
            layout='fill'
            objectFit='contain'
            priority
          />
            <Image
            className={styles.logo}
            src="/third-block.png"
            alt="Blocks"
            layout='fill'
            objectFit='contain'
            priority
          />
          <div className={styles.mobileEmpty}></div>
    <SignUpButton />
    </main>
  )
}