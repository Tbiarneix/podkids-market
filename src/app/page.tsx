import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Download from '../components/Download/Download';
import Footer from '../components/Footer/Footer';
import Screenshot from '../components/Screenshot/Screenshot';
import Skiplinks from '../components/Skiplinks/Skiplinks';

export default function Home() {
  return (
    <main>
      <Skiplinks />
      <Header />
      <Hero />
      <About />
      <Features />
      <Screenshot />
      <Download />
      <Footer />
    </main>
  );
}
