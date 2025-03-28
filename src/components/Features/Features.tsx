import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Les fonctionnalités principales</h2>
        
        <div className={styles.featureGroup}>
          <h3 className={styles.groupTitle}>
            <span className={styles.icon}>👨‍👩‍👧‍👦</span>
            Côté parents
          </h3>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h4>Gestion des profils</h4>
              <p>Créez des profils individuels pour chaque enfant avec ajout d'un mot de passe.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Filtres avancés</h4>
              <p>Filtrez le contenu par âge et thématique pour une expérience adaptée.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Ajout manuel</h4>
              <p>Ajoutez manuellement des podcasts pour enrichir l'expérience d'écoute.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Export / Import</h4>
              <p>Exportez ou importez une configuration préexistante pour un contrôle simplifié.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.featureGroup}>
          <h3 className={styles.groupTitle}>
            <span className={styles.icon}>👧👦</span>
            Côté enfants
          </h3>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h4>Liste de favoris</h4>
              <p>Retrouvez facilement vos podcasts préférés grâce à la liste de favoris.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Tri par thématique</h4>
              <p>Explorez les contenus selon vos envies et intérêts.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Options de tri avancées</h4>
              <p>Triez les épisodes du plus ancien au plus récent ou inversement.</p>
            </div>
            <div className={styles.featureCard}>
              <h4>Filtre d'écoute</h4>
              <p>Affichez uniquement les épisodes déjà écoutés ou non.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
