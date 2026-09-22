import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Advantage } from '../components/Advantage';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Products } from '../components/Products';
import { Showcase } from '../components/Showcase';
import {
  CTABand,
  Footer,
  Testimonials,
} from '../components/Testimonials';

export function Home() {
  const [toast, setToast] = useState<string | null>(null);
  const location = useLocation();

  const onToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2600);
  };

  useEffect(() => {
    if (location.hash === '#courses') {
      const el = document.getElementById('courses');
      if (el) {
        window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }, [location.hash, location.search]);

  return (
    <>
      <Hero />
      <Marquee />
      <Showcase />
      <Advantage />
      <Products onToast={onToast} />
      <Testimonials />
      <CTABand />
      <Footer />
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
