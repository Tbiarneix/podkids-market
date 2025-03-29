import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="main-content" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Podkids</h1>
        <h2 className={styles.subtitle}>L'application de podcast sécurisée pour les enfants</h2>
        <p className={styles.description}>
          Une application simple, accessible et sans pub !
        </p>
        <div className={styles.cta}>
          <a href="#download" className={styles.ctaButton}>
            Télécharger
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.illustrationContainer}>
          <Image 
            src="/images/Hero-Illustration.webp"
            alt=""
            width={500}
            height={400}
            className={styles.heroIllustration}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
