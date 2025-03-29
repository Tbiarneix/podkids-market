"use client";

import styles from "./Skiplinks.module.css";

export default function Skiplinks() {
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1025) {
      e.preventDefault();
      const nav = document.getElementById('main-menu');
      if (nav) {
        const firstFocusable = nav.querySelector<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable instanceof HTMLElement) {
          firstFocusable.focus();
        }
      }
    }
    if (window.innerWidth <= 1025) {
      e.preventDefault();
      const menuButton = document.querySelector('button[aria-controls="main-menu"]');
      if (menuButton instanceof HTMLElement) {
        menuButton.focus();
      }
    }
  };

  return (
    <nav className={styles.skiplinks} aria-label="Accès rapide">
      <ul className={styles.list}>
        <li>
          <a href="#main-menu" onClick={handleNavigationClick}>Aller au menu de navigation</a>
        </li>
        <li>
          <a href="#main-content">Aller au contenu</a>
        </li>
      </ul>
    </nav>
  );
};