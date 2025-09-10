import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPAnimations() {
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (animationsInitialized.current) return;
    animationsInitialized.current = true;

    // Animación fade-in para elementos con clase .fade-in
    gsap.fromTo('.fade-in', 
      { 
        opacity: 0, 
        y: 50 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animación slide-in desde la izquierda
    gsap.fromTo('.slide-in-left', 
      { 
        opacity: 0, 
        x: -100 
      }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.slide-in-left',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animación slide-in desde la derecha
    gsap.fromTo('.slide-in-right', 
      { 
        opacity: 0, 
        x: 100 
      }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.slide-in-right',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animación de scale para cards
    gsap.fromTo('.scale-in', 
      { 
        opacity: 0, 
        scale: 0.8 
      }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.scale-in',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animación para el hero section
    gsap.timeline()
      .fromTo('.hero-title', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
        '-=0.5'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
        '-=0.3'
      );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}