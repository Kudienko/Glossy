import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Work in progress&nbsp;
        </p>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Glossy Logo"
          width={220}
          height={41}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://t.me/glossy_edu_bot"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Beta <span>-&gt;</span>
          </h2>
          <p>Sign-up for beta testing</p>
        </a>
      </div>
    </main>
  )
}
