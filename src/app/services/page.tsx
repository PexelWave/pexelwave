"use client";
import Lottie from "lottie-react";
import React, { useState } from "react";
import headerAnimationData from "@/assets/lottie/animation_lng47ro3.json";
import animation from "@/assets/lottie/devicesAnimationData.json";
import Link from "next/link";
import HLine from "@/components/HLine";
import { getServices } from "../../../sanity/lib/utils";

const ServicesPage = async () => {
  // const [active, setActive] = useState(0);
  const services: Service[] = await getServices();

  // const [serviceInView, setServiceInView] = useState(
  //   services[active]
  // );
  return (
    <main className="text-light-foreground container flex flex-col gap-12">
      <header className="container text-light-foreground flex flex-col-reverse  md:flex-row  items-center">
        <div className="flex flex-col justify-center text-center md:text-left">
          <span className="medium-title flex items-center justify-center md:justify-start">
            LET&apos;S BRING YOUR
            <HLine />
          </span>
          <h1 className="xl-title">
            <span className="lg:font-outline-2">IDEAS</span> TO{" "}
            <span>
              LIFE
              <span className="inline-block h-[20px] w-[20px] bg-lime animate-bounce rounded-full ml-2"></span>
            </span>
          </h1>
        </div>
        <div className="md:w-1/2">
          <Lottie
            className="hidden md:block w-[600px]"
            animationData={headerAnimationData}
          />
          <p className="hidden md:block border-l-4 border-lime pl-2 text-xs max-w-[200px] float-right leading-loose">
            We become an important extension to your business. Let us take care
            of the techy stuff.
          </p>
        </div>
      </header>
      {services.map((service) => (
        <div key={service._id} className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <div className="bg-violet-950 p-4 rounded-lg md:w-1/2 text-center">
            <ul className="flex flex-col">
              {service.serviceFeatures.map((feature, index) => (
                <li key={index} className="border-b-2 border-violet-900 py-4">
                  {feature}
                </li>
              ))}
            </ul>
            <Link className="btn bg-blue font-bold uppercase " href="/services">
              GET QOUTE
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

// <main>
//   <section className="text-light-foreground mt-12">
//     <div className="z-10 bg-violet-950 backdrop-blur-lg sticky top-[10vh] flex font-medium text-sm text-light-foreground overflow-x-scroll custom-scrollbar gap-6 snap-x snap-mandatory p-2 w-full">
//       {services.map(({ title, _id }, index) => (
//         <button
//           key={_id}
//           style={{
//             backgroundColor: index === active ? "#1AB1F9" : "",
//           }}
//           className="py-2 transition-all snap-center shrink-0 px-2 rounded-lg"
//           onClick={() => {
//             setActive(index);
//             setServiceInView(services[index]);
//           }}
//         >
//           {title}
//         </button>
//       ))}
//     </div>
//     <div className="container flex flex-col md:flex-row gap-6 py-6 rounded-lg">
//       <div className="md:w-1/2 flex flex-col gap-6">
//         <div className="">
//           <Lottie className="" animationData={animation} />
//           <h3 className="medium-title md:text-5xl uppercase">
//             {serviceInView.title}
//           </h3>
//         </div>
//         <div className="">
//           <p>{serviceInView.description}</p>
//         </div>
//       </div>
//       {/* Pricing */}
//       <div className="flex flex-col gap-4 md:w-1/2 bg-violet-950 rounded-lg p-4 md:py-0">
//           <div className="flex flex-col justify-between">
//             <h3 className="medium-title">Service Features</h3>
//             <ul className="">
//               {serviceInView.serviceFeatures.map((feat, index) => (
//                 <li
//                   key={index}
//                   className="border-b-2 border-violet-700/50 py-4"
//                 >
//                   {feat}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="#"
//               className="btn bg-blue font-bold text-center"
//             >
//               GET QOUTE
//             </Link>
//           </div>
//       </div>
//     </div>
//   </section>
// </main>
export default ServicesPage;
