// Date and post utilities

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getReadingTime(content: string, wordsPerMinute = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getUniqueTags(posts: { data: { tags: string[] } }[]): string[] {
  const allTags = posts.flatMap(post => post.data.tags);
  return [...new Set(allTags)].sort();
}

export function sortPostsByDate<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Only show drafts in dev
export function filterDrafts<T extends { data: { draft?: boolean } }>(posts: T[]): T[] {
  return import.meta.env.PROD
    ? posts.filter(post => !post.data.draft)
    : posts;
}
