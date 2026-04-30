import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero3D } from '@/components/Hero3D';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aseem Pudasaini - UI/UX Designer & Front-end Engineer',
  description: 'Portfolio of Aseem Pudasaini, a UI/UX Designer and Front-end Engineer based in Kathmandu, Nepal. Specializing in design thinking, user experience, and modern web technologies.',
  keywords: ['UI/UX Design', 'Frontend Engineer', 'React', 'Figma', 'Product Design', 'Web Design'],
  authors: [{ name: 'Aseem Pudasaini' }],
  openGraph: {
    title: 'Aseem Pudasaini - UI/UX Designer & Front-end Engineer',
    description: 'Crafting intuitive digital experiences with design thinking',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero3D />
      </section>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
