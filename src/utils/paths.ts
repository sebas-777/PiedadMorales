/**
 * Helper to resolve static asset URLs (images, videos, audios) from the public directory.
 * Ensures the path correctly includes Astro's base URL for GitHub Pages deployment.
 * 
 * Works seamlessly in:
 * - Local dev (base = '/'): asset('/images/foto.jpeg') -> '/images/foto.jpeg'
 * - GitHub Pages (base = '/PiedadMorales'): asset('/images/foto.jpeg') -> '/PiedadMorales/images/foto.jpeg'
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${base}/${cleanPath}`;
}
