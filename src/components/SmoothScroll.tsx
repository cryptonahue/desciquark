import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Lazy load Lenis only when needed
    const loadLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      
      // Crear instancia de Lenis
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      // Función para actualizar el scroll
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup al desmontar
      return () => {
        lenis.destroy();
      };
    };

    loadLenis().catch(error => {
      console.warn('Failed to load smooth scroll:', error);
    });
  }, []);

  return null;
}