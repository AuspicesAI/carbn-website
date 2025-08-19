#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function createBlogPost() {
  console.log('Creating a new blog post...\n');

  const title = await question('Blog post title: ');
  const author = await question('Author name (default: Saud Smadi): ') || 'Saud Smadi';
  const excerpt = await question('Brief excerpt/description: ');
  const tagsInput = await question('Tags (comma-separated): ');
  const readTime = await question('Estimated read time (e.g., "5 min read"): ');

  const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);
  const slug = slugify(title);
  const date = formatDate(new Date());

  const frontMatter = `---
title: "${title}"
date: "${date}"
author: "${author}"
excerpt: "${excerpt}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
readTime: "${readTime}"
---

# ${title}

Write your blog post content here using Markdown syntax.

## Example Section

You can use:
- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)

### Code blocks
\`\`\`javascript
console.log("Hello, world!");
\`\`\`

### Lists
1. Numbered lists
2. Are supported
3. Too

- Bullet points
- Also work
- Great!

## Conclusion

Don't forget to write a conclusion!
`;

  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);

  // Create directory if it doesn't exist
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`\nA blog post with slug "${slug}" already exists!`);
    rl.close();
    return;
  }

  // Write the file
  fs.writeFileSync(filePath, frontMatter);

  console.log(`\nBlog post created successfully!`);
  console.log(`File: ${filePath}`);
  console.log(`URL: /blog/${slug}`);
  console.log(`\nEdit the markdown file to write your blog post content.`);

  rl.close();
}

createBlogPost().catch(console.error);
