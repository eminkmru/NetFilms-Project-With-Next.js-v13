import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with Next JS by&nbsp;
      <Link href="https://instagram.com/kmremnn" target="_blank">
        Emin Kumru
      </Link>
    </footer>
  );
}

export default Footer;
