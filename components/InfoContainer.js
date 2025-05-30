import styles from "../styles/InfoContainer.module.css";

export default function InfoContainer() {
  return (
    <div className={styles.infoContainer}>
      <a
        href="https://reservation.umai.io/et/widget/jja"
        rel="noopener noreferrer"
        className={styles.infoItem}
      >
        Book a table
      </a>
      <a href="tel:+37254540187" className={styles.infoItem}>
        +372 5454 0187
      </a>
      <a href="mailto:ahoi@juunijuuliaugust.ee" className={styles.infoItem}>
        ahoi@juunijuuliaugust.ee
      </a>
      <a
        href="https://maps.app.goo.gl/R5bec7E215DZ4QU2A"
        target="_blank"
        className={styles.infoItem}
      >
        Google Maps
      </a>
    </div>
  );
}
