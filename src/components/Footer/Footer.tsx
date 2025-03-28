import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image 
              src="/images/Logo.webp" 
              alt="Podkids Logo" 
              width={40} 
              height={40}
            />
            <span>Podkids</span>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4>Navigation</h4>
              <ul>
                <li><a href="#features">Fonctionnalités</a></li>
                <li><a href="#screenshots">Captures d'écran</a></li>
                <li><a href="#download">Télécharger</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Légal</h4>
              <ul>
                <li><a href="#">Confidentialité</a></li>
                <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="#">Mentions légales</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@podkids.app">contact@podkids.app</a></li>
                <li><a href="#">Assistance</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Podkids. Tous droits réservés.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <span className={styles.socialIcon}>🇫</span>
            </a>
            <a href="#" aria-label="Twitter">
              <span className={styles.socialIcon}>🇽</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span className={styles.socialIcon}>📷</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
