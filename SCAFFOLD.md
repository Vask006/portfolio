# Portfolio Scaffold - Complete Guide

## Exact Scaffold Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes

# 2. Navigate to project
cd portfolio

# 3. Install MDX and content dependencies
npm install @next/mdx @mdx-js/loader @mdx-js/react remark-gfm remark-reading-time gray-matter reading-time date-fns js-yaml

# 4. Install utility dependencies
npm install clsx tailwind-merge @mdx-js/mdx

# 5. Install MDX remote and markdown rendering
npm install next-mdx-remote react-markdown

# 6. Install TypeScript types
npm install --save-dev @types/js-yaml
```

## Complete Dependency List

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
  "react-markdown": "^9.0.1",
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
  "@types/js-yaml": "^4.0.9",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.0.10",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## File Tree Structure

```
portfolio/
├── app/
│   ├── articles/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual article page
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx      # Articles by tag
│   │   └── page.tsx              # Articles listing
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual blog post
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx      # Blog posts by tag
│   │   └── page.tsx              # Blog listing
│   ├── books/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual book entry
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx      # Books by tag
│   │   └── page.tsx              # Books listing
│   ├── projects/
│   │   └── page.tsx              # Projects showcase
│   ├── rss.xml/
│   │   └── route.ts              # RSS feed endpoint
│   ├── search-index.json/
│   │   └── route.ts              # Search index endpoint
│   ├── speaking/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual speaking engagement
│   │   ├── tag/
│   │   │   └── [tag]/
│   │   │       └── page.tsx      # Speaking by tag
│   │   └── page.tsx              # Speaking listing
│   ├── globals.css               # Global styles with dark mode
│   ├── layout.tsx                # Root layout with theme provider
│   ├── mdx-components.tsx        # MDX component configuration
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Robots.txt generator
│   └── sitemap.ts                # Sitemap generator
├── components/
│   ├── MDXContent.tsx            # MDX content renderer
│   ├── Nav.tsx                   # Navigation component
│   ├── Search.tsx                # Search component
│   ├── ThemeProvider.tsx         # Dark mode context provider
│   └── ThemeToggle.tsx           # Dark mode toggle button
├── content/
│   ├── articles/
│   │   └── getting-started.mdx    # Sample article
│   ├── blog/
│   │   └── welcome-to-my-blog.mdx # Sample blog post
│   ├── books/
│   │   └── recommended-reading.mdx # Sample book entry
│   ├── projects.json             # Projects data
│   └── speaking/
│       └── conference-2024.mdx   # Sample speaking engagement
├── lib/
│   ├── content.ts                # Content reading utilities
│   ├── projects.ts               # Projects data utilities
│   ├── search.ts                 # Search index builder
│   └── utils.ts                  # Utility functions
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project README
├── SETUP.md                      # Detailed setup guide
└── SCAFFOLD.md                   # This file
```

## Key Features Implementation

### 1. Content Management
- **Location**: `/content/{blog|articles|books|speaking}/*.mdx`
- **Frontmatter**: YAML frontmatter with title, description, date, tags
- **Processing**: `lib/content.ts` handles reading and parsing

### 2. Tags System
- **Implementation**: Tag pages at `/{type}/tag/[tag]`
- **Filtering**: `getContentByTag()` function in `lib/content.ts`
- **Display**: Tags shown on all content cards and individual pages

### 3. Reading Time
- **Library**: `reading-time` package
- **Calculation**: Automatic based on content length
- **Display**: Shown on all content pages and cards

### 4. SEO
- **Metadata**: Dynamic metadata generation in each page
- **Sitemap**: `/sitemap.xml` (generated by `app/sitemap.ts`)
- **Robots**: `/robots.txt` (generated by `app/robots.ts`)
- **Open Graph**: Included in all content pages

### 5. RSS Feed
- **Endpoint**: `/rss.xml`
- **Implementation**: `app/rss.xml/route.ts`
- **Content**: Includes all content types (blog, articles, books, speaking)

### 6. Dark Mode
- **Provider**: `components/ThemeProvider.tsx`
- **Toggle**: `components/ThemeToggle.tsx`
- **Persistence**: localStorage for theme preference
- **Detection**: System preference detection on first load

### 7. Search
- **Index**: Build-time JSON at `/search-index.json`
- **Builder**: `lib/search.ts`
- **Component**: `components/Search.tsx` (client-side)
- **Scope**: Searches titles, descriptions, and tags

### 8. Projects Page
- **Data**: `/content/projects.json`
- **Page**: `/app/projects/page.tsx`
- **Features**: Featured projects, tags, links

## Initial Page Implementations

All pages are fully implemented with:
- ✅ Responsive design
- ✅ Dark mode support
- ✅ SEO metadata
- ✅ Tag filtering
- ✅ Reading time display
- ✅ Navigation
- ✅ Content rendering

## Build Status

✅ **Build Successful**: All pages generate correctly
- Static pages: Home, listings
- SSG pages: Individual content pages, tag pages
- Dynamic routes: RSS, search index

## Next Steps

1. Replace sample content in `/content` directories
2. Update `content/projects.json` with your projects
3. Customize `app/layout.tsx` with your information
4. Set `NEXT_PUBLIC_SITE_URL` environment variable for production
5. Deploy to Vercel, Netlify, or your preferred platform

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## All Open-Source Libraries

All dependencies are open-source:
- Next.js (MIT)
- React (MIT)
- TypeScript (Apache 2.0)
- Tailwind CSS (MIT)
- MDX (MIT)
- gray-matter (MIT)
- reading-time (MIT)
- date-fns (MIT)
- js-yaml (MIT)
- react-markdown (MIT)
- remark-gfm (MIT)
- clsx (MIT)
- tailwind-merge (MIT)
