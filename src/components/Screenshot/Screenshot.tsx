import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./Screenshot.module.css";
import screenshotData from "./screenshot.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Screenshot() {
  const containerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshotData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshotData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Gestion du clavier pour l'accessibilité
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  // Effet pour synchroniser le défilement avec currentIndex
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = Array.from(container.children) as HTMLElement[];
      
      if (items.length > 0 && items[currentIndex]) {
        const item = items[currentIndex];
        
        // Calcul de la position pour centrer l'élément actif
        const scrollLeft = item.offsetLeft - (container.clientWidth / 2) + (item.offsetWidth / 2);
        
        // Utiliser scrollTo avec behavior: 'smooth' pour une animation fluide
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  return (
    <section
      className={styles.screenshots}
      aria-labelledby="screenshots-title"
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="Carrousel de captures d'écran"
    >
      <h2 id="screenshots-title" className={styles.title}>
        Découvre Podkids en images
      </h2>
      <div className={styles.imageContainer}>
        <ul
          ref={containerRef}
          className={styles.list}
          role="list"
          aria-live="polite"
        >
          {screenshotData.map((screenshot, index) => (
            <li 
              key={screenshot.id} 
              tabIndex={0}
              className={index === currentIndex ? styles.active : ''}
            >
              <h3 className="visuallyHidden">{screenshot.title}</h3>
              <p className="visuallyHidden" dangerouslySetInnerHTML={{ __html: screenshot.description }}></p>
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                width={280}
                height={560}
                className={styles.screenshot}
              />
            </li>
          ))}
        </ul>
        <div className={styles.navigation}>
          <button
            onClick={prevSlide}
            className={`${styles.nav_button} ${styles.prev_button}`}
            aria-label="Voir les captures d'écran précédentes"
          >
            <ChevronLeft />
          </button>
          <div className={styles.sliderControls}>
            {Array.from({ length: screenshotData.length }).map((_, index) => (
              <div
                key={index}
                className={`${styles.sliderDot} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Aller à la capture d'écran ${index + 1}`}
                onKeyDown={(e) => e.key === 'Enter' && goToSlide(index)}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className={`${styles.nav_button} ${styles.next_button}`}
            aria-label="Voir les captures d'écran suivantes"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
