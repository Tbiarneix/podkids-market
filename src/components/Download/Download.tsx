"use client";

import { useState } from "react";
import styles from "./Download.module.css";
import Image from "next/image";

export default function Download() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email soumis pour recevoir une alerte:", email);
    setEmail("");
  };

  return (
    <section id="download" className={styles.download}>
      <div className={styles.container}>
        <h2 className={styles.title}>Télécharge Podkids</h2>
        <p className={styles.description}>
          Offre à ton enfant une expérience d'écoute sécurisée et enrichissante
          !
        </p>

        <div className={styles.availabilityInfo}>
          <p>Bientôt disponible sur iOS et Android.</p>
          <p>Inscris-toi pour être informé du lancement !</p>
          <p>(Promis ce sera que pour ça)</p>
        </div>

        <div className={styles.newsletterContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                required
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <label 
                htmlFor="email" 
                className={`${styles.floatingLabel} ${(isFocused || email) ? styles.labelActive : ''}`}
              >
                Ton adresse email
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              Recevoir une alerte
            </button>
          </form>
        </div>

        <div className={styles.storeButtons}>
          <div className={styles.storeButton}>
            <span className={styles.storeIcon}>
              <Image src="/icons/apple.webp" alt="" width={50} height={50} />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>App Store</strong>
            </span>
          </div>
          <div className={styles.storeButton}>
            <span className={styles.storeIcon}>
              <Image src="/icons/android.webp" alt="" width={50} height={50} />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>Google Play</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
