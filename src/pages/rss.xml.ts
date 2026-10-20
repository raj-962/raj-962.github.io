import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
export async function GET(context: APIContext) {
  const notes = (await getCollection('notes', (n) => !n.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: 'Raja Shekar · Notes',
    description: 'Writing on chip design, photography and chess.',
    site: context.site!,
    items: notes.map((n) => ({ title: n.data.title, pubDate: n.data.date, description: n.data.summary, link: `/notes/${n.id}/` })),
  });
}
