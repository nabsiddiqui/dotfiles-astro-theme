import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate, filterDrafts } from '../lib/utils';
import { siteConfig } from '../config';

export async function GET(context) {
  const allPosts = await getCollection('blog');
  const posts = sortPostsByDate(filterDrafts(allPosts));

  return rss({
    title: `${siteConfig.title} Blog`,
    description: siteConfig.description,
    site: context.site || siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
