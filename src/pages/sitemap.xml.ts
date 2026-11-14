import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const SITE_LASTMOD = '2026-11-14';

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/berichte', priority: '0.9', changefreq: 'weekly' },
  { path: '/veranstaltungen', priority: '0.9', changefreq: 'weekly' },
  { path: '/training', priority: '0.8', changefreq: 'monthly' },
  { path: '/mitglied-werden', priority: '0.9', changefreq: 'monthly' },
  { path: '/verein', priority: '0.8', changefreq: 'monthly' },
  { path: '/rsv-kids', priority: '0.8', changefreq: 'monthly' },
  { path: '/wandergruppe', priority: '0.8', changefreq: 'monthly' },
  { path: '/fahrer', priority: '0.8', changefreq: 'monthly' },
  { path: '/sponsoren', priority: '0.7', changefreq: 'monthly' },
  { path: '/bilder', priority: '0.7', changefreq: 'monthly' },
  { path: '/kontakt', priority: '0.8', changefreq: 'monthly' },
  { path: '/verwaltung', priority: '0.6', changefreq: 'monthly' },
  { path: '/archiv', priority: '0.6', changefreq: 'monthly' },
  { path: '/links', priority: '0.5', changefreq: 'monthly' },
  { path: '/impressum', priority: '0.3', changefreq: 'yearly' }
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://www.rsv-ellmendingen.de').replace(/\/$/, '');
  const berichte = await getCollection('berichte', ({ data }) => data.showInOverview);
  const veranstaltungen = await getCollection('veranstaltungen');

  const entries: SitemapEntry[] = [
    ...staticPages.map((p) => ({
      loc: `${baseUrl}${p.path}/`,
      lastmod: SITE_LASTMOD,
      changefreq: p.changefreq,
      priority: p.priority
    })),
    ...berichte.map((b) => ({
      loc: `${baseUrl}/blog/${b.slug}/`,
      lastmod: b.data.date || SITE_LASTMOD,
      changefreq: 'monthly',
      priority: '0.7'
    })),
    ...veranstaltungen.map((v) => ({
      loc: `${baseUrl}${v.data.detailUrl}/`,
      lastmod: SITE_LASTMOD,
      changefreq: 'weekly',
      priority: '0.8'
    }))
  ];

  const uniqueMap = new Map<string, SitemapEntry>();
  for (const entry of entries) {
    if (!uniqueMap.has(entry.loc)) {
      uniqueMap.set(entry.loc, entry);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...uniqueMap.values()]
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
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

