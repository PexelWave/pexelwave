import Link from "next/link";
import HeroAnimation from "./HeroAnimation";

const Hero = () => (
  <header className="pt-[15vh] container bg-purple text-light-foreground lg:h-screen flex flex-col-reverse lg:flex-col">
    <section className="relative z-10 text-center md:text-left">
      <h3 className="small-title">Your Gateway to</h3>
      <h1 className="xl-title">
        AESTHETIC
        <br />
        EXCELLENCE
      </h1>
      <p className="text-base mt-6">
        Creating Stunning Website and Innovative Solutions
      </p>
      <Link
        className="btn bg-blue font-bold animate-bounce md:animate-none"
        href="/services"
      >
        GET STARTED
      </Link>
    </section>

    <HeroAnimation />
  </header>
);

export default Hero;
