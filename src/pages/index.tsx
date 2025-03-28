import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Download from '../components/Download/Download';
import Footer from '../components/Footer/Footer';
import Screenshot from '../components/Screenshot/Screenshot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Podkids - L'application de podcast sécurisée pour les enfants</title>
        <meta name="description" content="Podkids est une application de gestion de podcasts conçue spécialement pour les enfants. Offrant un environnement sûr et adapté, elle permet aux jeunes auditeurs de découvrir des contenus enrichissants tout en garantissant un contrôle parental optimal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      
      <main>
        <Header />
        <Hero />
        <About />
        <Features />
        <Screenshot />
        <Download />
        <Footer />
      </main>
    </>
  );
}
