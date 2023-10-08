import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="container text-light-foreground">
      <h4 className="small-title">Our main focus is to</h4>
      <h2 className="large-title">
        HELP
        <br />
        BUSINESSES
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="">
          <h3 className="medium-title">IMPROVE</h3>
          <p>Their brand and online presence</p>
        </div>
        <Link className="btn w-full h-full block bg-lime text-center font-bold" href="/portfolio">
          View Our Work
        </Link>
      </div>
    </section>
  );
};

export default About;
