import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Screenshots.module.css';

const Screenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      src: "/images/screenshot1.webp",
      alt: "Interface d'accueil Podkids"
    },
    {
      src: "/images/screenshot2.webp",
      alt: "Liste de podcasts Podkids"
    },
    {
      src: "/images/screenshot3.webp",
      alt: "Détail d'un podcast Podkids"
    },
    {
      src: "/images/screenshot4.webp",
      alt: "Paramètres parentaux Podkids"
    },
    {
      src: "/images/screenshot5.webp",
      alt: "Paramètres parentaux Podkids"
    }
  ];
  
  const totalSlides = Math.max(0, screenshots.length - 2);
  
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="screenshots" className={styles.screenshots}>
      <div className={styles.container}>
        <h2 className={styles.title}>Découvre Podkids en images</h2>
        
        <div className={styles.galleryContainer}>
          <div 
            className={styles.gallery} 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)` 
            }}
          >
            {screenshots.map((screenshot, index) => (
              <div key={index} className={styles.screenshotWrapper}>
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={280}
                  height={560}
                  className={styles.screenshot}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.sliderArrows}>
          <div 
            className={styles.sliderArrow} 
            onClick={prevSlide}
          >
            &#10094;
          </div>
          <div 
            className={styles.sliderArrow} 
            onClick={nextSlide}
          >
            &#10095;
          </div>
        </div>
        
        <div className={styles.sliderControls}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div 
              key={index} 
              className={`${styles.sliderDot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
