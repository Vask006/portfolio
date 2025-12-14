# Personal Portfolio

A modern, feature-rich personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Features

- ✅ **Content Management**: MDX-based content for blog, articles, books, and speaking
- ✅ **Tags System**: Organize and filter content by tags
- ✅ **Reading Time**: Automatically calculated reading time for all content
- ✅ **SEO Optimized**: Dynamic metadata, sitemap, and robots.txt
- ✅ **RSS Feed**: Full RSS feed at `/rss.xml`
- ✅ **Dark Mode**: System preference detection with manual toggle
- ✅ **Search**: Build-time JSON index with client-side search
- ✅ **Projects Page**: JSON/YAML-based project showcase

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see your portfolio.

## Content Structure

- `/content/blog` - Blog posts (MDX)
- `/content/articles` - Articles (MDX)
- `/content/books` - Book reviews/recommendations (MDX)
- `/content/speaking` - Speaking engagements (MDX)
- `/content/projects.json` - Projects data (JSON)

## Documentation

See [SETUP.md](./SETUP.md) for detailed setup instructions, file structure, and customization guide.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **MDX** for content rendering
- All open-source libraries

## License

MIT
