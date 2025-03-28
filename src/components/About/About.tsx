import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Qu'est-ce que Podkids ?</h2>
        <p className={styles.description}>
          Podkids est une application de gestion de podcasts conçue spécialement pour les enfants. 
          Offrant un environnement sûr et adapté, elle permet aux jeunes auditeurs de découvrir 
          des contenus enrichissants tout en garantissant un contrôle parental optimal.
        </p>
        
        <div className={styles.whyChoose}>
          <h3>Pourquoi choisir Podkids ?</h3>
          <ul className={styles.reasons}>
            <li>
              <span className={styles.icon}>🔒</span>
              <div className={styles.reasonContent}>
                <h4>100% sécurisée</h4>
                <p>Aucune publicité ni contenu inadapté.</p>
              </div>
            </li>
            <li>
              <span className={styles.icon}>👶</span>
              <div className={styles.reasonContent}>
                <h4>Une interface pensée pour les enfants</h4>
                <p>Simple, intuitive et accessible.</p>
              </div>
            </li>
            <li>
              <span className={styles.icon}>👪</span>
              <div className={styles.reasonContent}>
                <h4>Un contrôle parental complet</h4>
                <p>Gérez les accès et filtrez les contenus selon l'âge et les centres d'intérêt de vos enfants.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
