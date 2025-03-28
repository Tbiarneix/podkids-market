import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./Screenshot.module.css";
import screenshotData from "./screenshot.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Screenshot() {
  const containerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollButtons = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const handleManualScroll = useCallback(
    (direction: "left" | "right") => {
      if (containerRef.current) {
        const container = containerRef.current;
        const screenshotWidth = container.firstElementChild?.clientWidth || 0;
        container.scrollTo({
          left:
            container.scrollLeft +
            (direction === "left" ? -screenshotWidth : screenshotWidth),
          behavior: "smooth",
        });
        checkScrollButtons();
      }
    },
    [checkScrollButtons]
  );

  // Gestion du clavier pour l'accessibilité
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handleManualScroll("left");
      } else if (e.key === "ArrowRight") {
        handleManualScroll("right");
      }
    },
    [handleManualScroll]
  );
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
          {screenshotData.map((screenshot) => (
            <li key={screenshot.id} tabIndex={0}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={280}
                height={560}
                className={styles.screenshot}
              />
            </li>
          ))}
        </ul>
        <div className={styles.navigation}>
          <button
            onClick={() => handleManualScroll("left")}
            className={`${styles.nav_button} ${styles.prev_button}`}
            disabled={!canScrollLeft}
            aria-label="Voir les captures d'écran précédentes"
          >
            <ChevronLeft />
          </button>
          <div className={styles.sliderControls}>
          {Array.from({ length: screenshotData.length }).map((_, index) => (
            <div 
              key={index} 
              className={`${styles.sliderDot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
          <button
            onClick={() => handleManualScroll("right")}
            className={`${styles.nav_button} ${styles.next_button}`}
            disabled={!canScrollRight}
            aria-label="Voir les captures d'écran suivantes"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
