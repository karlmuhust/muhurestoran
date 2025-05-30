import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NoiseOverlay from "../components/NoiseOverlay";
import InfoContainer from "../components/InfoContainer";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className={styles.container}>
      <InfoContainer />

      <main className={styles.main}>
        <Logo />
      </main>

      <NoiseOverlay />
    </div>
  );
}
