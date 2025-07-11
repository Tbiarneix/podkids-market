"use client";

import Link from "next/link";
import styles from "./telechargement.module.css";

export default function Telechargement() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Téléchargement</h1>
        
        <p className={styles.description}>
          Merci de votre intérêt pour Podkids.
        </p>
        <p className={styles.description}>Vous pouvez télécharger la version alpha de l'application en cliquant sur le bouton ci-dessous. Vous allez être redirigé vers un lien google drive pour télécharger une version apk. Ce type de fichier ne fonctionne qu'avec des téléphones Android.</p>
        <p className={styles.description}>Pour installer l'application, vous devez autoriser l'installation d'application de sources externes. Vous trouverez plus d'informations sur cet <a href="https://www.frandroid.com/comment-faire/tutoriaux/184151_comment-installer-un-fichier-apk-sur-son-terminal-android" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Article Frandroid : Comment installer un fichier APK sur un smartphone ou une tablette Android? - Nouvel onglet"> article Frandroid</a>.</p>
        
        <div className={styles.buttonContainer}>
          <Link 
            className={styles.downloadButton}
            target="_blank"
            href="https://drive.google.com/file/d/1beBtt4p7DtgN6NU6IZC1EFYRxTYTVlYn/view?usp=sharing"
          >
            Télécharger le fichier
          </Link>
        </div>
      </div>
    </main>
  );
}
