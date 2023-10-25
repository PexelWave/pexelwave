import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="container text-light-foreground relative z-10 top-[450px] md:top-0 mb-[150px] md:mb-0">
      <h4 className="small-title">Our main focus is to</h4>
      <h2 className="large-title">
        <span className="lg:font-outline-2">HELP</span>
        <br />
        BUSINESSES
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="">
          <h3 className="medium-title">IMPROVE</h3>
          <p className="">Their brand and online presence</p>
        </div>
        <Link className="flex flex-1 items-center justify-center btn w-full h-full text-center font-bold text-2xl uppercase bg-lime" href="/portfolio">
          READ OUR CASE STUDIES
        </Link>
      </div>
    </section>
  );
};

export default About;
