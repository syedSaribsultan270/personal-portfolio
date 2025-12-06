# Portfolio Website - Syed Sarib Sultan

A modern, professional portfolio website showcasing work as a UX Engineer, Creative Director, and Head of Marketing.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **TypeScript**: Type-safe development
- **Font**: Geist (Sans & Mono)

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx          # About page
│   ├── work/                   
│   │   ├── page.tsx            # Work index
│   │   └── [slug]/page.tsx     # Dynamic case study pages
│   ├── services/page.tsx       # Services page
│   ├── contact/page.tsx        # Contact page
│   ├── layout.tsx              # Root layout with navbar/footer
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── sections/               # Custom components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── SectionHeading.tsx
│       ├── CaseStudyCard.tsx
│       ├── ContactForm.tsx
│       ├── WorkGrid.tsx
│       └── AnimatedGradientBackground.tsx
└── lib/
    ├── data.ts                 # Portfolio content & data
    └── utils.ts                # Utility functions
```

## 🎨 Features

- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Automatic dark mode support
- **Smooth Animations**: Framer Motion powered transitions
- **SEO Optimized**: Proper metadata and semantic HTML
- **Type Safe**: Full TypeScript implementation
- **Performance**: Optimized with Next.js 16
- **Accessible**: WCAG compliant components

## 📄 Pages

1. **Home** (`/`): Hero, about preview, experience, featured work, CTA
2. **About** (`/about`): Full bio, experience timeline, skills breakdown
3. **Work** (`/work`): Case studies grid
4. **Case Studies** (`/work/[slug]`): Detailed project breakdowns
   - Parhlai - EdTech Marketing
   - SXTUDIOS - Creative Direction
   - i2or/Applify - UX Engineering
5. **Services** (`/services`): Service offerings and process
6. **Contact** (`/contact`): Contact form and information

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Key Dependencies

- `next`: ^16.0.7
- `react`: ^19.2.0
- `tailwindcss`: ^4
- `framer-motion`: Latest
- `class-variance-authority`: For component variants
- `clsx` & `tailwind-merge`: Utility functions

## 🎯 Customization

To personalize the portfolio:

1. **Update Personal Info**: Edit `lib/data.ts`
   - Personal information
   - Experience
   - Skills
   - Services
   - Case studies
   - Testimonials

2. **Update Contact Info**: 
   - Email in `lib/data.ts`
   - Social links

3. **Add Images**:
   - Place images in `public/work/` directory
   - Update image paths in `lib/data.ts`

4. **Styling**:
   - Global styles: `app/globals.css`
   - Component styles: Individual component files
   - Theme colors: Tailwind config in components

## 🚢 Deployment

This project is optimized for Vercel:

```bash
# Deploy to Vercel
vercel

# Or push to GitHub and connect to Vercel
git push origin master
```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 📝 Content Structure

All portfolio content is centralized in `lib/data.ts`:

- `personalInfo`: Name, roles, tagline, about, contact
- `experiences`: Work history
- `skills`: Technical skills categorized
- `services`: Service offerings with deliverables
- `caseStudies`: Detailed project case studies
- `testimonials`: Client testimonials

## 📄 License

© 2025 Syed Sarib Sultan. All rights reserved.
