import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticPages = [
  '',
  '/verein',
  '/sponsoren',
  '/wandergruppe',
  '/verwaltung',
  '/kontakt',
  '/mitglied-werden',
  '/impressum',
  '/fahrer',
  '/rsv-kids',
  '/training',
  '/veranstaltungen',
  '/berichte',
  '/bilder',
  '/links',
  '/archiv'
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://www.rsv-ellmendingen.de').replace(/\/$/, '');
  const berichte = await getCollection('berichte');
  const veranstaltungen = await getCollection('veranstaltungen');

  const urls = [
    ...staticPages.map((p) => `${baseUrl}${p}/`),
    ...berichte.map((b) => `${baseUrl}/blog/${b.slug}/`),
    ...veranstaltungen.map((v) => `${baseUrl}${v.data.detailUrl}/`)
  ];

  const uniqueUrls = [...new Set(urls)];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};

