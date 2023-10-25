import { servicesInfo } from "@/lib/components-data";
import Link from "next/link";

const Services = () => {
  return (
    <section className="md:mt-24 container">
      <h2 className="large-title text-light-foreground">
        <span className="lg:font-outline-2">OUR</span> SERVICES
      </h2>

      <div className="mt-6 overflow-x-scroll custom-scrollbar flex gap-6 snap-x snap-mandatory">
        {servicesInfo.map((service) => (
          <div
            key={service.title}
            className="bg-violet-900 mb-6 rounded-lg p-6 snap-center w-full md:w-1/3 shrink-0 text-light-foreground flex flex-col justify-between"
          >
            <h3 className="medium-title">{service.title}</h3>
            <p className="mt-4">{service.description}</p>
            <Link
              className="btn bg-blue text-center flex items-center justify-center text-2xl font-bold uppercase"
              href="/services"
            >
              get qoute
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
