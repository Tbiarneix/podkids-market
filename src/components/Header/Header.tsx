import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.logo}>
        <Image 
          src="/images/Logo.webp" 
          alt="LogoPodkids" 
          width={48} 
          height={48} 
        />
        <p>Podkids</p>
      </div>
      <nav className={styles.nav} aria-label="Navigation principale" role="navigation">
        <ul>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#screenshots">Captures d'écran</a></li>
          <li><a href="#download">Télécharger</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
