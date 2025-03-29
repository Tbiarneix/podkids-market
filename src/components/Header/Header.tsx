"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  // Empêcher le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Gestion du trapfocus
  useEffect(() => {
    if (!menuOpen || !navRef.current) return;

    // Sélectionner tous les éléments focusables dans le menu
    const focusableElements = navRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    // Stocker le premier et le dernier élément focusable
    firstFocusableElementRef.current = burgerButtonRef.current as HTMLElement;
    lastFocusableElementRef.current = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Mettre le focus sur le premier élément
    firstFocusableElementRef.current?.focus();

    // Gestionnaire d'événement pour le trapfocus
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      // Si Shift + Tab est pressé et que le focus est sur le premier élément
      if (e.shiftKey && document.activeElement === firstFocusableElementRef.current) {
        e.preventDefault();
        lastFocusableElementRef.current?.focus();
      }
      
      // Si Tab est pressé et que le focus est sur le dernier élément
      if (!e.shiftKey && document.activeElement === lastFocusableElementRef.current) {
        e.preventDefault();
        firstFocusableElementRef.current?.focus();
      }
    };

    // Ajouter l'écouteur d'événement
    document.addEventListener('keydown', handleTabKey);

    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [menuOpen]);

  // Gestionnaire pour fermer le menu avec la touche Escape
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        burgerButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      
      <button 
        ref={burgerButtonRef}
        className={`${styles.burgerButton} ${menuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-controls="main-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
      )}

      <nav 
        ref={navRef}
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} 
        aria-label="Navigation principale" 
        role="navigation"
        id="main-menu"
      >
        <ul>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Fonctionnalités</a></li>
          <li><a href="#screenshots" onClick={() => setMenuOpen(false)}>Captures d'écran</a></li>
          <li><a href="#download" onClick={() => setMenuOpen(false)}>Télécharger</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
