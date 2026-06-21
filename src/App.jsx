import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-accent-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />

        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Education />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
