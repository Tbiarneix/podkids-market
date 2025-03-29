"use client";

import styles from './Download.module.css';
import Image from 'next/image';

export default function Download() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email soumis pour recevoir une alerte');
  };

  return (
    <section id="download" className={styles.download}>
      <div className={styles.container}>
        <h2 className={styles.title}>Télécharge Podkids</h2>
        <p className={styles.description}>
          Offre à ton enfant une expérience d'écoute sécurisée et enrichissante !
        </p>
        
        <div className={styles.availabilityInfo}>
          <p>Bientôt disponible sur iOS et Android.</p>
          <p>Inscris-toi pour être informé du lancement !</p>
          <p>(Promis ce sera que pour ça)</p>
        </div>
        
        <div className={styles.newsletterContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Ton adresse email"
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              Recevoir une alerte
            </button>
          </form>
        </div>
        
        <div className={styles.storeButtons}>
          <button className={styles.storeButton} disabled>
            <span className={styles.storeIcon}>
              <Image 
                src="/icons/apple.webp" 
                alt="App Store" 
                width={50} 
                height={50}
              />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>App Store</strong>
            </span>
          </button>
          <button className={styles.storeButton} disabled>
            <span className={styles.storeIcon}>
              <Image 
                src="/icons/android.webp" 
                alt="Google Play" 
                width={50} 
                height={50}
              />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>Google Play</strong>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
