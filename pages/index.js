import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ weeks: 0, days: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2024-06-01");
      const now = new Date();

      const totalDays = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(totalDays / 7) * -1;
      const days = (totalDays % 7) * -1;

      setTimeLeft({ weeks, days });
    };

    calculateTimeLeft(); // Initial calculation

    // Update every day
    const timer = setInterval(calculateTimeLeft, 86400000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.countdown}>
          <div className={styles.timeBlock}>
            <span className={styles.number}>{timeLeft.weeks}</span>
            <span className={styles.label}>weeks</span>
          </div>
          <div className={styles.timeBlock}>
            <span className={styles.number}>{timeLeft.days}</span>
            <span className={styles.label}>days</span>
          </div>
        </div>
      </main>
    </div>
  );
}
