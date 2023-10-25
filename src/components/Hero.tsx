"use client";
import Link from "next/link";
import Image from "next/image"
import Lottie from "lottie-react";
import heroAimation from "@/assets/lottie/heroAnimation.json";

const Hero = () => (
  <header className="relative container bg-purple text-light-foreground flex flex-col-reverse lg:flex-col">
    <section className="relative z-10 text-center md:text-left">
      <h3 className="small-title">Your Gateway to</h3>
      <h1 className="large-title">
        AESTHETIC
        <br />
        <span className="lg:font-outline-2">EXCELLENCE</span>
      </h1>
      <p className="hidden md:block text-base mt-6">
        Creating Stunning Website and Innovative Solutions
      </p>
      <Link
        className="btn bg-blue font-bold uppercase animate-bounce md:animate-none"
        href="/services"
      >
        view our services
      </Link>
    </section>

    
    <>
      <Lottie
        className="hidden md:block md:absolute w-[1080px] -top-40 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 lg:translate-x-1/2"
        animationData={heroAimation}
      />
      <Image
        unoptimized={true}
        className="absolute block -top-40 md:hidden left-1/2 -translate-x-1/2 w-[1280px] max-w-[1280px]"
        src="/HeroAnimation.svg"
        alt="hero illustration"
        width={1600}
        height={1200}
      />
    </>
  </header>
);

export default Hero;
