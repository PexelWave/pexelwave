'use client'
import Link from 'next/link'
import Lottie from "lottie-react"
import heroAimation from '@/assets/lottie/heroAnimation.json'
type Props = {}

const Hero = (props: Props) => {
  return (
    <header className="pt-[15vh] container bg-purple text-light-foreground lg:h-screen flex flex-col-reverse lg:flex-col">
        <section className="relative z-10 text-center md:text-left">
            <h3 className="small-title">Your Gateway to</h3>
            <h1 className="xl-title">AESTHETIC<br/>EXCELLENCE</h1>
            <p className="text-base mt-6">Creating Stunning Website and Innovative Solutions</p>
            <Link className='btn bg-blue font-bold animate-bounce md:animate-none' href="/services">GET STARTED</Link>
        </section>
        <Lottie className="absolute w-[1080px] top-2 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 lg:translate-x-1/2" animationData={heroAimation}/>
    </header>
  )
}

export default Hero