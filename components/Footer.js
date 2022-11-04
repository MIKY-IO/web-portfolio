import styles from "../styles/Footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="dark:text-white ">
        Copyright &copy; MIKY-IO | Portfolio {new Date().getUTCFullYear()}
      </p>
    </footer>
  );
}
