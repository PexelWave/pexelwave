import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className='relative bg-purple overflow-x-hidden'>
      <Hero />
      <About />
      <Services />
    </main>
  )
}
