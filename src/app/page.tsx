import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/james-noack.jpg"
          alt="King James Noack"
          width={1000}
          height={1132}
          priority
        />
      </main>
    </div>
  );
}
