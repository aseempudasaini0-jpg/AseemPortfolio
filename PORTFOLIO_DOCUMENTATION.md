# Aseem Pudasaini - Premium Portfolio Website

## 📋 Overview

This is a production-ready portfolio website built with React, Next.js 16, Tailwind CSS, Three.js, and Framer Motion. The site features a stunning 3D hero section, smooth animations, responsive design, and comprehensive UX principles implementation.

### Tech Stack

- **Framework**: Next.js 16.2.4
- **React Version**: React 19
- **Styling**: Tailwind CSS 4.2.0
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion 12.38.0
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Smooth Scrolling**: Lenis

---

## 🎯 UX Strategy & Design Principles

### Applied UX Laws

1. **Hick's Law** - Reduced cognitive load with simplified navigation (5 main sections)
2. **Fitts's Law** - Large CTA buttons strategically placed for easy interaction
3. **Jakob's Law** - Familiar layout patterns following web standards
4. **Miller's Law** - Information chunked into digestible sections (7±2 rule)
5. **Gestalt Principles** - Visual grouping using cards, spacing, and color
6. **Von Restorff Effect** - Featured projects highlighted with distinct styling
7. **Tesler's Law** - Clean interface reducing cognitive load
8. **Peak-End Rule** - Strong hero section and memorable contact ending

### Site Structure

```
Home (Hero + CTA)
├── About (Skills, Interests)
├── Experience (Work, Education)
├── Projects (Filterable Grid)
├── Contact (Form, Details)
└── Footer (Quick Links, Social)
```

---

## 🎨 Design System

### Color Palette

- **Primary**: Indigo (#6366f1)
- **Primary Dark**: Indigo-700 (#4f46e5)
- **Secondary**: Purple (#7c3aed)
- **Neutral Light**: Slate-50 (#f8fafc)
- **Neutral Dark**: Slate-900 (#0f172a)
- **Text**: Gray-900 (#111827)
- **Text Secondary**: Gray-700 (#374151)

### Typography

- **Headings**: Inter (variable)
- **Body**: Geist (sans-serif)
- **Mono**: Geist Mono

### Spacing Scale

8px base unit:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Components

- Navigation bar (sticky, responsive)
- Hero section with 3D animation
- Project cards with filtering
- Timeline for experience
- Contact form
- Footer with links

---

## 🧩 Component Architecture

### `/components`

- **Navbar.tsx** - Fixed navigation with mobile menu
- **Hero3D.tsx** - Canvas-based 3D animated hero section
- **About.tsx** - Skills, interests, and bio section
- **Experience.tsx** - Work experience and education timeline
- **Projects.tsx** - Filterable project grid
- **Contact.tsx** - Contact form and information
- **Footer.tsx** - Footer with links and social

### `/lib`

- **portfolio-data.ts** - Centralized portfolio content and configuration

### `/app`

- **layout.tsx** - Root layout with metadata
- **page.tsx** - Home page (SSR)
- **globals.css** - Global styles

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

### Environment Variables

No environment variables required for basic functionality.

---

## 📦 Building for Production

### Development Build

```bash
pnpm dev
```

### Production Build

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

### Production Preview

```bash
pnpm build
pnpm start
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Benefits:**
- Automatic builds on push
- Zero-config deployment
- Global CDN
- Preview deployments
- Environment variable management

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Set build command: `pnpm build`
4. Set publish directory: `.next`

### Self-Hosted

```bash
# Build
pnpm build

# Start server (port 3000)
pnpm start
```

---

## 📄 Resume Integration

### Adding Your Resume

1. **Place PDF in `/public`**
   ```
   /public/resume.pdf
   ```

2. **Update Download Link in Footer**
   ```tsx
   // In components/Footer.tsx
   {
     href: '/resume.pdf',
     label: 'Resume',
   }
   ```

3. **Create Resume Page (Optional)**
   ```tsx
   // app/resume/page.tsx
   export default function ResumePage() {
     return (
       <div className="h-screen">
         <iframe src="/resume.pdf" className="w-full h-full" />
       </div>
     );
   }
   ```

---

## ✨ Features

### Hero Section
- Real-time 3D animation with Three.js
- Mouse-responsive orbit controls
- Smooth scroll-to-section buttons
- Scroll indicator animation

### About Section
- Skills organized by category (Design, Tools, Web)
- Interpersonal skills list
- Interests showcase
- Smooth scroll animations

### Experience Section
- Work experience timeline
- Education history
- Achievement highlights
- Responsive card layout

### Projects Section
- Filterable project grid
- Category-based filtering
- Project features list
- Tech stack tags
- Call-to-action links

### Contact Section
- Embedded contact form (mailto fallback)
- Contact information cards
- Email and phone links
- Location display

### Performance
- Lazy-loaded components
- Image optimization
- Code splitting
- Static generation (SSG/ISR)
- Smooth scrolling with Lenis

---

## 🔍 SEO Optimization

- **Metadata**: Proper page titles and descriptions
- **Open Graph**: Social sharing optimization
- **Structured Data Ready**: JSON-LD compatible structure
- **Semantic HTML**: Proper heading hierarchy
- **Mobile Responsive**: Mobile-first design
- **Fast Loading**: Optimized assets and lazy loading

---

## ♿ Accessibility

- **WCAG AA Compliant**
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios > 4.5:1
- Focus management
- Screen reader friendly

---

## 📊 Performance Targets

### Lighthouse Scores

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

### Optimization Strategies

- Minified CSS/JS
- Image lazy loading
- Font optimization (Google Fonts)
- Code splitting by route
- Static generation for speed
- CDN delivery (Vercel/Netlify)

---

## 🛠️ Customization

### Update Portfolio Data

Edit `/lib/portfolio-data.ts`:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... rest of data
};
```

### Change Colors

Update Tailwind classes in components:
```tsx
// Change from indigo-600 to your preferred color
className="bg-indigo-600 hover:bg-indigo-700"
```

### Modify 3D Hero

Edit `/components/Hero3D.tsx`:
- Change geometry: `icosahedronGeometry` → `sphereGeometry`, `torusGeometry`, etc.
- Adjust colors and lighting
- Modify rotation speeds
- Change particle count

### Update Typography

Edit `/app/layout.tsx`:
```typescript
import { Inter, Geist } from 'next/font/google'

const customFont = Inter({ subsets: ['latin'] })
```

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

### 3D Hero Not Loading

- Check browser WebGL support
- Verify Three.js is installed: `pnpm list three`
- Clear browser cache

### Slow Performance

- Run: `pnpm build` to check production build size
- Use Chrome DevTools to profile
- Optimize images in `/public`

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm build
```

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Support

For issues, questions, or improvements, please reach out to:
- **Email**: aseempudasaini0@gmail.com
- **Phone**: +977 9848755340

---

## 🎉 Credits

Built with ❤️ using modern web technologies and design principles.
