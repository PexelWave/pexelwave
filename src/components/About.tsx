import Link from "next/link";
import HLine from "./HLine";

type Props = {};

const features: { title: string; description: string }[] = [
  {
    title: "Tailored Excellence",
    description:
      "We don't believe in one-size-fits-all solutions. Each project is a unique canvas for us, and we paint it with custom designs and functionalities that align perfectly with your goals.",
  },
  {
    title: "Innovation",
    description:
      "Technology never stands still, and neither do we. We keep a close eye on emerging trends to ensure your website remains at the cutting edge.",
  },
  {
    title: "User-Centric Approach",
    description:
      "Your users are at the heart of our designs. We create websites that captivate, engage, and leave a lasting impression.",
  },
  {
    title: "Reliability",
    description:
      "With PEXEL WAVE, you can count on unwavering support, security, and a commitment to excellence. We build digital experiences that stand the test of time.",
  },
];

const About = (props: Props) => {
  return (
    <section className="container text-light-foreground relative z-10 md:mb-0 mt-96 md:mt-24">
      <header className="flex flex-col md:flex-row gap-8 mb-12">
      <div>
        <h4 className="small-title">Our main focus is to</h4>
        <h2 className="large-title">
          <span className="lg:font-outline-2">HELP</span>
          <br />
          BUSINESSES
        </h2>
        {/* <p>
          At PEXEL WAVE, we ride the digital tide, transforming your online
          aspirations into a reality. We are a passionate team of design and
          development experts who breathe life into your vision with creativity,
          precision, and innovation.
        </p> */}
      </div>
      <div className="max-w-3xl bg-violet-950 p-4 rounded-lg">
        <h4 className="medium-title flex items-center gap-2">Our Vision <HLine /></h4>
        <p>
          We believe that the digital realm is not just a space but an
          opportunity. Our vision is to empower businesses and individuals by
          harnessing the limitless potential of the web. Whether you're a
          budding startup or an established enterprise, we're here to propel you
          forward.
        </p>
      </div>
      </header>

      <h3 className="medium-title text-center">Why Choose <span className="text-blue font-semibold">Us?</span></h3>
      <div className="mt-6 overflow-x-scroll custom-scrollbar flex gap-6 snap-x snap-mandatory">
        {features.map((feature, index) => (
          <div key={index} className="bg-violet-900 mb-6 rounded-lg p-6 snap-center w-full md:w-1/3 shrink-0 text-light-foreground flex flex-col justify-between">
            <h4 className="medium-title">{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <Link
        className="flex flex-1 items-center justify-center btn w-full h-full text-center font-bold text-2xl uppercase bg-lime"
        href="/portfolio"
      >
        READ OUR CASE STUDIES
      </Link>
    </section>
  );
};

export default About;
