import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Remplacez l'URL par l'URL définitive de votre portfolio en ligne
  const baseUrl = 'https://votredomaine-portfolio.fr';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si vous avez d'autres pages, vous pouvez les ajouter ici, par exemple :
    // {
    //   url: `${baseUrl}/projects/1`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
