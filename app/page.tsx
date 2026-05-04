import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero3D } from '@/components/Hero3D';
import { About } from '@/components/About';
import { DesignProcess } from '@/components/DesignProcess';
import { SkillsTools } from '@/components/SkillsTools';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aseem Pudasaini - UI/UX Designer & AI Student',
  description: 'A cinematic dark-theme portfolio for Aseem Pudasaini, a Kathmandu-based UI/UX Designer and AI Student crafting emotionally intelligent digital experiences.',
  keywords: ['UI/UX Design', 'AI Design', 'Product Design', 'UX Research', 'Figma', 'Interaction Design', 'Kathmandu Designer'],
  authors: [{ name: 'Aseem Pudasaini' }],
  openGraph: {
    title: 'Aseem Pudasaini - Designing interfaces that feel alive',
    description: 'UI/UX Designer & AI Student crafting emotional digital experiences.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030406] text-white">
      <Navbar />

      <section id="home">
        <Hero3D />
      </section>

      <About />
      <Projects />
      <DesignProcess />
      <SkillsTools />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
