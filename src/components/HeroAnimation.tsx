"use client";
import Lottie from "lottie-react";
import React from "react";
import heroAimation from "@/assets/lottie/heroAnimation.json";
import Image from "next/image";

const HeroAnimation = () => {
  return (
    <>
      <Lottie
        className="hidden md:block md:absolute w-[1080px] top-20 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 lg:translate-x-1/2"
        animationData={heroAimation}
      />
      <Image
        className="absolute top-20 md:hidden left-1/2 -translate-x-1/2 max-w-screen-lg"
        src="/heroAnimation.svg"
        alt=""
        width={1080}
        height={920}
      />
    </>
  );
};

export default HeroAnimation;
