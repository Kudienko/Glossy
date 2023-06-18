import Image from 'next/image'
import styles from '../../page.module.css'
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../../fonts/HalvarBreit-Lt.woff2' });


export default function SignUpButton() {
  return (
    <div className={styles.grid}>
    <a
      href="https://t.me/glossyapp"
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
  );
}