import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NoiseOverlay from "../components/NoiseOverlay";
import InfoContainer from "../components/InfoContainer";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ weeks: 0, days: 0 });

  // ... existing useEffect code ...

  return (
    <div className={styles.container}>
      <InfoContainer />
      <main className={styles.main}>
        <Image
          src="/logo.svg"
          alt="Muhu Restoran Logo"
          width={300}
          height={100}
          priority
          className={styles.logo}
        />
      </main>
      <NoiseOverlay />
    </div>
  );
}
