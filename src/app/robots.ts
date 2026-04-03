import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/staff-login', '/api/'],
      },
    ],
    sitemap: 'https://www.artisticprinting.com/sitemap.xml',
  }
}