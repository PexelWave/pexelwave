import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import HireUsBanner from '@/components/HireUsBanner'
import Projects from '@/components/Projects'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className='relative bg-purple overflow-x-hidden'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <HireUsBanner />
      <Contact />
    </main>
  )
}
