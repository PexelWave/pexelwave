'use client'
import Link from 'next/link'
import Lottie from "lottie-react"
import heroAimation from '@/assets/lottie/heroAnimation.json'
type Props = {}

const Hero = (props: Props) => {
  return (
    <header className="pt-[15vh] container text-light-foreground h-screen md:flex items-center">
        <section className="relative z-10">
            <h3 className="small-title">Your Gateway to</h3>
            <h1 className="large-title">AESTHETIC<br/>EXCELLENCE</h1>
            <p className="text-base mt-6">Creating Stunning Website and Innovative Solutions</p>
            <Link className='btn bg-blue' href="/services">GET STARTED</Link>
        </section>
        <Lottie className="absolute right-0 top-[40vh] md:top-0 md:-right-80 md:w-[80%]" animationData={heroAimation}/>
    </header>
  )
}

export default Hero