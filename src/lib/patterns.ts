import { getCollection } from 'astro:content';

export async function getFeaturedPatterns() {
  const patterns = await getCollection('patterns', (pattern) => {
    return pattern.data.featured === true;
  });
  return patterns;
}

export async function getAllPatterns() {
  const patterns = await getCollection('patterns');
  return patterns;
} 