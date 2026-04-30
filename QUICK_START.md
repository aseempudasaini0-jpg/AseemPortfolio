# ⚡ Quick Start Guide - 5 Minutes to Customization

## 1. Update Your Information (2 mins)

Edit `/lib/portfolio-data.ts`:

```typescript
export const portfolioData = {
  name: "Your Name",                    // Change this
  title: "Your Job Title",              // Change this
  tagline: "Your tagline",              // Change this
  email: "your@email.com",              // Change this
  phone: "+977 your number",            // Change this
  location: "Your City, Country",       // Change this
  about: "Your bio here...",            // Change this
  
  // ... rest of the data
};
```

## 2. See Your Changes (1 min)

The dev server is already running!
- Open the preview in the top right
- Or visit `http://localhost:3000`
- Changes auto-reload (HMR)

## 3. Update Projects (1 min)

In the same file, edit the `projects` array:

```typescript
projects: [
  {
    id: 1,
    title: "Your Project Name",
    subtitle: "Brief description",
    description: "Full description...",
    tags: ["Tag1", "Tag2"],
    features: ["Feature 1", "Feature 2"],
    link: "https://yourproject.com",
  },
  // Add more projects...
]
```

## 4. Deploy (1 min)

### Option A: Vercel (Easiest)
```bash
vercel --prod
```

### Option B: Netlify
1. Push code to GitHub
2. Visit netlify.com
3. Click "New site from Git"
4. Select your repo
5. Deploy!

### Option C: Run Locally
```bash
pnpm dev  # Already running!
```

---

## 📝 Common Edits

### Change Colors
Find `bg-indigo-600` and replace with:
- `bg-blue-600` (blue)
- `bg-purple-600` (purple)
- `bg-emerald-600` (green)
- `bg-rose-600` (red)

**Files to update:**
- `/components/Navbar.tsx`
- `/components/Hero3D.tsx`
- `/components/About.tsx`
- `/components/Experience.tsx`
- `/components/Projects.tsx`
- `/components/Contact.tsx`
- `/components/Footer.tsx`

### Add Your Resume
1. Save as `/public/resume.pdf`
2. Update Footer link:
```tsx
// In components/Footer.tsx
{
  href: '/resume.pdf',
  label: 'Resume',
}
```

### Hide a Section
In `/app/page.tsx`, comment out:
```tsx
{/* <About /> */}
```

### Change 3D Shape
In `/components/Hero3D.tsx`, change:
```tsx
// From
<icosahedronGeometry args={[1.5, 4]} />

// To one of:
<sphereGeometry args={[1.5, 32, 32]} />
<torusGeometry args={[1.5, 0.6, 16, 100]} />
<dodecahedronGeometry args={[1.5]} />
```

---

## 🎨 Quick Color Swaps

Replace all instances in components:

```bash
# Blue
bg-indigo-600 → bg-blue-600
text-indigo-600 → text-blue-600
hover:bg-indigo-700 → hover:bg-blue-700

# Purple
bg-indigo-600 → bg-purple-600
text-indigo-600 → text-purple-600
hover:bg-indigo-700 → hover:bg-purple-700

# Green
bg-indigo-600 → bg-emerald-600
text-indigo-600 → text-emerald-600
hover:bg-indigo-700 → hover:bg-emerald-700
```

---

## ✅ Pre-Deployment Checklist

- [ ] Updated name, title, email
- [ ] Updated projects with your work
- [ ] Checked all links work
- [ ] Tested on mobile (resize browser)
- [ ] Read through all sections
- [ ] Updated colors (optional)
- [ ] Added resume PDF (optional)

---

## 🆘 Common Issues

### Preview Not Updating?
```bash
# Restart dev server
# Ctrl+C to stop
# pnpm dev to restart
```

### 3D Hero Not Showing?
- Check if browser supports WebGL
- Try Chrome or Firefox
- Check console for errors (F12)

### Build Fails?
```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

---

## 📚 Need More Help?

- **PORTFOLIO_DOCUMENTATION.md** - Full technical docs
- **SETUP_GUIDE.md** - Detailed setup instructions
- **UX_PRINCIPLES.md** - Design decisions explained
- **BUILD_SUMMARY.md** - What's included

---

## 🚀 You're Ready!

Your portfolio is:
- ✅ Built and running
- ✅ Fully customizable
- ✅ Production-ready
- ✅ Deployed in minutes

**Time to impressive portfolio: ~10 minutes total!**

---

## 📱 Responsive Preview

Test on different screen sizes:
- **Mobile**: 375px width
- **Tablet**: 768px width
- **Desktop**: 1024px width

All layouts respond automatically with Tailwind breakpoints.

---

## 🎯 Final Deploy Command

```bash
# Build for production
pnpm build

# Deploy to Vercel (easiest)
vercel --prod
```

Done! Your portfolio is live! 🎉

---

**Questions?** Check the other documentation files or the code comments in components.
