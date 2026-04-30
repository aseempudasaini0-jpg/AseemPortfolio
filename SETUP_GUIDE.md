# 🚀 Portfolio Setup & Deployment Guide

## Quick Start (5 minutes)

### 1. Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

### 2. Customize Your Content

Edit `/lib/portfolio-data.ts` and update:
- Your name, title, and bio
- Contact information
- Work experience
- Projects
- Skills and interests

### 3. Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

---

## 📋 Pre-Deployment Checklist

Before going live, ensure:

- [ ] All personal information is accurate
- [ ] Contact form mailto fallback works
- [ ] Projects have correct descriptions and tags
- [ ] All links in footer are functional
- [ ] Mobile responsiveness verified
- [ ] 3D hero loads without errors
- [ ] Images optimized (if added)
- [ ] SEO metadata updated

---

## 🎨 Customization Guide

### Update Colors

Find and replace color classes throughout components:

```tsx
// Old
className="bg-indigo-600"

// New (e.g., blue)
className="bg-blue-600"
```

**Files to update:**
- `/components/Navbar.tsx`
- `/components/Hero3D.tsx`
- `/components/About.tsx`
- `/components/Experience.tsx`
- `/components/Projects.tsx`
- `/components/Contact.tsx`
- `/components/Footer.tsx`

### Add Projects

In `/lib/portfolio-data.ts`, add to the `projects` array:

```typescript
{
  id: 6,
  title: "Project Name",
  subtitle: "Brief subtitle",
  description: "Full description of the project...",
  tags: ["Tag1", "Tag2", "Tag3"],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  link: "https://project-link.com",
}
```

### Modify 3D Hero

Edit `/components/Hero3D.tsx`:

```tsx
// Change geometry
<icosahedronGeometry args={[1.5, 4]} />
// to
<sphereGeometry args={[1.5, 32, 32]} />

// Change colors
<meshPhongMaterial color="#6366f1" />
// to
<meshPhongMaterial color="#3b82f6" /> // blue
```

### Update Fonts

Edit `/app/layout.tsx`:

```typescript
import { Poppins, Space_Grotesk } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🌐 Deployment Platforms

### Vercel (Recommended)

**Pros:**
- Zero-config deployment
- Automatic deploys on git push
- Free tier available
- Global CDN
- Built-in analytics

**Steps:**

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

**Auto-deploy on push:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Netlify

**Steps:**

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `pnpm build`
6. Set publish directory: `.next`
7. Click "Deploy"

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### Self-Hosted (Linux/Docker)

**Using PM2:**
```bash
npm install -g pm2

# Build
pnpm build

# Start with PM2
pm2 start "pnpm start" --name portfolio

# Save PM2 config
pm2 save
```

**Using Docker:**
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
```

---

## 📧 Contact Form Setup

### Option 1: Mailto (Default - No Backend)

Currently uses `mailto:` for simplicity. Works without any server.

### Option 2: Formspree (Recommended)

1. Visit [formspree.io](https://formspree.io)
2. Create account and new form
3. Update contact form in `/components/Contact.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

### Option 3: Netlify Forms

Add to `/components/Contact.tsx`:

```tsx
<form 
  name="contact" 
  method="POST" 
  netlify
  onSubmit={handleSubmit}
>
  {/* form fields */}
</form>
```

---

## 📄 Resume/PDF Setup

### Adding a PDF Resume

1. Save your resume as `resume.pdf`
2. Place in `/public/resume.pdf`
3. Update footer link in `/components/Footer.tsx`:

```tsx
{
  href: '/resume.pdf',
  label: 'Resume',
  download: true,
}
```

### Resume Page

Create `/app/resume/page.tsx`:

```tsx
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <a href="/" className="text-indigo-600 mb-4">← Back to Home</a>
        
        <div className="bg-white">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-screen"
          />
        </div>
        
        <div className="mt-4 text-center">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
```

---

## 🔐 Environment Variables

No required environment variables for basic setup.

**Optional** (if adding backend):

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
EMAIL_SERVICE_KEY=your_key_here
```

---

## 📊 Analytics Setup

### Vercel Analytics (Free)

Already integrated via `@vercel/analytics`:

```tsx
// Already in layout.tsx
{process.env.NODE_ENV === 'production' && <Analytics />}
```

View analytics at vercel.com dashboard.

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID
3. Install: `pnpm add @next/third-parties`
4. Add to `/app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### 3D Hero Not Showing

1. Check browser console for WebGL errors
2. Verify Three.js is installed: `pnpm list three`
3. Try different browser (Chrome/Firefox)
4. Disable hardware acceleration if issue persists

### Slow Initial Load

1. Check Lighthouse report: `pnpm build` then preview
2. Optimize images in `/public`
3. Enable caching headers on deployment

### Form Not Working

1. Check browser console for errors
2. Verify email address in `portfolioData.email`
3. For Formspree: check form ID is correct

---

## 📈 Performance Optimization

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Profile"
  width={400}
  height={400}
  priority // for above-fold images
/>
```

### Font Optimization

Fonts are already optimized via Google Fonts. Avoid adding too many variants:

```tsx
// ✅ Good - 2 font families
const sans = Geist({ subsets: ['latin'] })
const mono = Geist_Mono({ subsets: ['latin'] })

// ❌ Avoid - too many fonts
const font1 = ...
const font2 = ...
const font3 = ...
const font4 = ...
```

### Code Splitting

Already handled by Next.js/Turbopack automatically.

---

## 🔍 SEO Checklist

- [ ] Meta title: Unique and descriptive
- [ ] Meta description: 120-160 chars
- [ ] Open Graph tags: Correct sharing preview
- [ ] Mobile responsive: Works on all devices
- [ ] Page speed: Lighthouse 90+
- [ ] Structured data: Valid Schema.org
- [ ] Sitemap: Add `/public/sitemap.xml`
- [ ] Robots.txt: Add `/public/robots.txt`

### Add Sitemap

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add Robots.txt

Create `/public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /api

Sitemap: https://yourportfolio.com/sitemap.xml
```

---

## 🎯 Next Steps

1. **Customize**: Update portfolio data
2. **Test**: Run locally with `pnpm dev`
3. **Deploy**: Push to Vercel or Netlify
4. **Monitor**: Track analytics
5. **Update**: Add projects and achievements regularly

---

## 📚 Useful Commands

```bash
# Development
pnpm dev              # Start dev server

# Production
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint

# Deployment
vercel               # Deploy to preview
vercel --prod        # Deploy to production

# Utilities
pnpm clean           # Clean build cache
pnpm update          # Update dependencies
```

---

**Happy deploying! 🎉**

Need help? Visit the [Next.js Docs](https://nextjs.org/docs) or reach out to Aseem.
