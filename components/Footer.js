import styles from "../styles/Footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; MIKY-IO | Portfolio {new Date().getUTCFullYear()}</p>
    </footer>
  );
}
