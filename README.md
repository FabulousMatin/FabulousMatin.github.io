# Matin Bazrafshan | ML/AI Software Engineer

A modern, premium portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design** - Premium dark theme with glassmorphism effects and smooth animations
- **Responsive** - Mobile-first design that looks great on all devices
- **Performance Optimized** - Lazy loading, optimized images, and minimal bundle size
- **SEO Friendly** - Proper metadata, Open Graph tags, and semantic HTML
- **Accessible** - Keyboard navigation and ARIA labels

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/FabulousMatin/FabulousMatin.github.io.git
cd FabulousMatin.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills section
│   ├── Experience.jsx   # Experience timeline
│   ├── Projects.jsx     # Projects showcase
│   ├── Education.jsx    # Education & certs
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer
│   └── BackToTop.jsx    # Back to top button
├── data/
│   └── portfolio.js     # Portfolio data (edit this!)
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Updating Personal Information

Edit `src/data/portfolio.js` to update:

- Personal details (name, title, bio, contact info)
- Skills and categories
- Work experience
- Projects
- Education and certifications
- Honors and awards

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

## Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository named `FabulousMatin.github.io`
2. The site will automatically deploy on every push to `main`
3. Access your site at `https://FabulousMatin.github.io`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to your hosting provider
```

### Vercel / Netlify

1. Connect your GitHub repository
2. Set the build command to `npm run build`
3. Set the output directory to `dist`
4. Deploy!

## Performance

- Lazy loading for below-the-fold content
- Optimized images with lazy loading
- Code splitting via React.lazy
- Minimal CSS with Tailwind's purge

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using React + Vite + Tailwind CSS
