import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Remplacez l'URL par votre nom de domaine réel
  const baseUrl = 'https://votredomaine-portfolio.fr';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
