"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import heroAimation from "@/assets/lottie/heroAnimation.json";
import Image from "next/image";

const Hero = () => (
  <header className="container bg-purple text-light-foreground lg:h-screen flex flex-col-reverse lg:flex-col">
    <section className="relative z-10 text-center md:text-left">
      <h3 className="small-title">Your Gateway to</h3>
      <h1 className="xl-title">
        AESTHETIC
        <br />
        <span className="font-outline-2">EXCELLENCE</span>
      </h1>
      <p className="text-base mt-6">
        Creating Stunning Website and Innovative Solutions
      </p>
      <Link
        className="btn bg-blue font-bold uppercase"
        href="/services"
      >
        view our services
      </Link>
    </section>

    <>
      <Lottie
        className="hidden md:block md:absolute w-[1080px] top-0 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 lg:translate-x-1/2"
        animationData={heroAimation}
      />
      <Image
        className="absolute block top-20 md:hidden left-1/2 -translate-x-1/2 w-[1280px] max-w-[1280px]"
        src="/heroAnimation.svg"
        alt="hero illustration"
        width={1600}
        height={1200}
      />
    </>
  </header>
);

export default Hero;
