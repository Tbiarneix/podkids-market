"use client";

import { useState } from "react";
import styles from "./Download.module.css";
import Image from "next/image";
import { toast } from "sonner";

export default function Download() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (honeypot) {
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success(
        "Super ! Tu fais maintenant partie de la liste d'attente.",
        {
          description:
            "On te tient au courant dès que l'application est disponible !",
          duration: 5000,
        }
      );
      
      setEmail("");
      return;
    }
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      toast.success(
        "Super ! Tu fais maintenant partie de la liste d'attente.",
        {
          description:
            "On te tient au courant dès que l'application est disponible !",
          duration: 5000,
        }
      );

      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Oups ! Une erreur est survenue.", {
        description:
          "Merci de réessayer plus tard ou de nous contacter directement.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className={styles.download}>
      <div className={styles.container}>
        <h2 className={styles.title}>Télécharge Podkids</h2>
        <p className={styles.description}>
          Offre à ton enfant une expérience d'écoute sécurisée et enrichissante&nbsp;!
        </p>

        <div className={styles.availabilityInfo}>
          <p>Bientôt disponible sur iOS et Android. Inscris-toi pour être informé du lancement.</p>
          <p>(Promis ce sera que pour ça)</p>
        </div>

        <div className={styles.newsletterContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                required
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <label
                htmlFor="email"
                className={`${styles.floatingLabel} ${isFocused || email ? styles.labelActive : ""}`}
              >
                Ton adresse email
              </label>
            </div>
            <div className={styles.honeypotField}>
              <input
                type="text"
                id="website"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
              />
              <label htmlFor="website">Laissez ce champ vide</label>
            </div>
            <button type="submit" className={styles.submitButton}>
              {isSubmitting ? "Inscription en cours..." : "Recevoir une alerte"}
            </button>
          </form>
        </div>

        <div className={styles.storeButtons}>
          <div className={styles.storeButton}>
            <span className={styles.storeIcon}>
              <Image src="/icons/apple.webp" alt="" width={50} height={50} />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>App Store</strong>
            </span>
          </div>
          <div className={styles.storeButton}>
            <span className={styles.storeIcon}>
              <Image src="/icons/android.webp" alt="" width={50} height={50} />
            </span>
            <span className={styles.storeText}>
              <small>Bientôt sur</small>
              <strong>Google Play</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
