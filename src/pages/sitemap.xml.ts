import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Página principal español -->
  <url>
    <loc>${site}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${site}" />
    <xhtml:link rel="alternate" hreflang="en" href="${site}en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${site}" />
  </url>
  
  <!-- Página principal inglés -->
  <url>
    <loc>${site}en/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${site}" />
    <xhtml:link rel="alternate" hreflang="en" href="${site}en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${site}" />
  </url>
  
  <!-- Registro español -->
  <url>
    <loc>${site}es/pre-registro/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Registro inglés -->
  <url>
    <loc>${site}en/pre-registration/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};