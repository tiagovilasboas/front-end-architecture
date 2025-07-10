import fs from 'fs/promises';
import path from 'path';

interface Pattern {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

const getTemplate = (pattern: Pattern) => `---
layout: ../../layouts/BaseLayout.astro
title: '${pattern.name}'
slug: '${pattern.slug}'
description: '${pattern.description}'
icon: '${pattern.icon}'
---

# {frontmatter.title}

<p class="mt-4 text-lg text-muted-foreground">{frontmatter.description}</p>

## Why it exists

(Write the problem this pattern solves)

## When to avoid

(Write when you should not use this pattern)

## Code snippet

\`\`\`tsx
// Your code here
\`\`\`

## Mermaid diagram

\`\`\`mermaid
graph TD
    A[Start] --> B[End];
\`\`\`

## Live demo link

- **[Link to Demo](https://example.com)**

## TL;DR

- Point 1
- Point 2
- Point 3
`;

async function generateMdxFiles() {
  const patternsPath = path.join(process.cwd(), 'patterns.json');
  const patternsFile = await fs.readFile(patternsPath, 'utf-8');
  const patterns: Pattern[] = JSON.parse(patternsFile);

  const patternsDir = path.join(process.cwd(), 'src/pages/patterns');
  await fs.mkdir(patternsDir, { recursive: true });

  for (const pattern of patterns) {
    const filePath = path.join(patternsDir, `${pattern.slug}.mdx`);
    try {
      await fs.access(filePath);
      console.log(`✅ File already exists: ${pattern.slug}.mdx. Skipping.`);
    } catch {
      console.log(`⏳ File does not exist. Creating: ${pattern.slug}.mdx...`);
      const template = getTemplate(pattern);
      await fs.writeFile(filePath, template);
      console.log(`🚀 File created: ${pattern.slug}.mdx`);
    }
  }
}

generateMdxFiles().catch(error => {
  console.error("Error generating MDX files:", error);
  process.exit(1);
}); 