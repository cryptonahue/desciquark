import { ui } from './ui';

// Función para obtener el idioma desde la URL
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es'; // Español es el idioma por defecto
}

// Función para obtener las traducciones según el idioma
export function useTranslations(lang: string) {
  return function t(key: string) {
    return getNestedValue(ui[lang as keyof typeof ui], key);
  }
}

// Función auxiliar para obtener valores anidados usando notación de puntos
function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj) || path; // Si no se encuentra la traducción, devuelve la clave
}
