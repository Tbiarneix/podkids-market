"use client";

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/Logo.webp"
            alt="Podkids Logo"
            width={40}
            height={40}
          />
          <span>Podkids</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Podkids. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
