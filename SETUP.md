# Portfolio Setup Guide

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **MDX** for content

## Dependencies

### Production Dependencies

```json
{
  "@mdx-js/loader": "^3.1.1",
  "@mdx-js/mdx": "^3.1.1",
  "@mdx-js/react": "^3.1.1",
  "@next/mdx": "^16.0.10",
  "clsx": "^2.1.1",
  "date-fns": "^4.1.0",
  "gray-matter": "^4.0.3",
  "js-yaml": "^4.1.1",
  "next": "16.0.10",
  "next-mdx-remote": "^5.0.0",
  "react": "19.2.1",
  "react-dom": "19.2.1",
  "reading-time": "^1.5.0",
  "remark-gfm": "^4.0.1",
  "remark-reading-time": "^2.0.2",
  "tailwind-merge": "^3.4.0"
}
```

### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.0.10",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## Scaffold Commands

### Initial Setup

```bash
# Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes

# Navigate to project
cd portfolio

# Install MDX and content dependencies
npm install @next/mdx @mdx-js/loader @mdx-js/react remark-gfm remark-reading-time gray-matter reading-time date-fns js-yaml

# Install utility dependencies
npm install clsx tailwind-merge @mdx-js/mdx

# Install MDX remote for rendering
npm install next-mdx-remote
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
portfolio/
├── app/
│   ├── articles/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── books/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── rss.xml/
│   │   └── route.ts
│   ├── search-index.json/
│   │   └── route.ts
│   ├── speaking/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── mdx-components.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── MDXContent.tsx
│   ├── Nav.tsx
│   ├── Search.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── content/
│   ├── articles/
│   ├── blog/
│   ├── books/
│   ├── projects.json
│   └── speaking/
├── lib/
│   ├── content.ts
│   ├── projects.ts
│   ├── search.ts
│   └── utils.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── SETUP.md
```

## Features

### ✅ Implemented Features

1. **Content Management**
   - MDX support for blog, articles, books, and speaking
   - Frontmatter parsing with gray-matter
   - Content stored in `/content` directory

2. **Tags System**
   - Tag filtering for all content types
   - Tag pages at `/blog/tag/[tag]`, `/articles/tag/[tag]`, etc.
   - Tag display on content cards

3. **Reading Time**
   - Automatically calculated using `reading-time` library
   - Displayed on all content pages

4. **SEO**
   - Dynamic metadata generation
   - Open Graph tags
   - Sitemap generation (`/sitemap.xml`)
   - Robots.txt (`/robots.txt`)

5. **RSS Feed**
   - Available at `/rss.xml`
   - Includes all content types

6. **Dark Mode**
   - System preference detection
   - Manual toggle
   - Persistent theme selection

7. **Search**
   - Build-time JSON index at `/search-index.json`
   - Client-side search component
   - Searches titles, descriptions, and tags

8. **Projects Page**
   - JSON-based project storage
   - Featured projects support
   - Tag filtering

## Content Structure

### MDX Files

All content files should be placed in their respective directories:
- `/content/blog/*.mdx`
- `/content/articles/*.mdx`
- `/content/books/*.mdx`
- `/content/speaking/*.mdx`

### Frontmatter Format

```yaml
---
title: "Your Title"
description: "A brief description"
date: "2024-01-15"
tags: ["tag1", "tag2"]
author: "Your Name" # Optional
---
```

### Projects JSON

Projects are stored in `/content/projects.json`:

```json
[
  {
    "title": "Project Name",
    "description": "Project description",
    "url": "https://example.com",
    "github": "https://github.com/username/repo",
    "tags": ["Next.js", "TypeScript"],
    "featured": true
  }
]
```

## Environment Variables

Optional environment variable for production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Used for:
- RSS feed generation
- Sitemap URLs
- Robots.txt

## Customization

### Styling

- Tailwind CSS is configured in `app/globals.css`
- Dark mode classes use `dark:` prefix
- Prose styles for MDX content are in `globals.css`

### Components

- `ThemeProvider`: Manages dark mode state
- `ThemeToggle`: Dark mode toggle button
- `Nav`: Navigation component
- `Search`: Search component (requires search index)
- `MDXContent`: Renders MDX content

### Utilities

- `lib/content.ts`: Content reading and processing
- `lib/projects.ts`: Project data management
- `lib/search.ts`: Search index generation
- `lib/utils.ts`: Utility functions (date formatting, className merging)

## Next Steps

1. Update `app/layout.tsx` with your personal information
2. Replace sample content in `/content` directories
3. Update `content/projects.json` with your projects
4. Set `NEXT_PUBLIC_SITE_URL` in production
5. Customize colors and styling in `globals.css`
6. Deploy to Vercel, Netlify, or your preferred hosting

## License

All libraries used are open-source. Check individual package licenses for details.
