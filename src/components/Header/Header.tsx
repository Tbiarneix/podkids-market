import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src="/images/Logo.webp" 
          alt="Podkids Logo" 
          width={48} 
          height={48} 
        />
        <h1>Podkids</h1>
      </div>
      <nav className={styles.nav}>
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
