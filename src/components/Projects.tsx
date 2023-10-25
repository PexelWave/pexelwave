"use client";

import { projectsData } from "@/lib/components-data";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  const projectRef = useRef(0);
  const [projectInView, setProjectInView] = useState<Project>(
    projectsData[projectRef.current]
  );

  const showNextProject = () => {
    projectRef.current += 1;
    if (projectRef.current >= projectsData.length) {
      projectRef.current = 0;
      setProjectInView(projectsData[0]);
    }

    setProjectInView(projectsData[projectRef.current]);
  };

  return (
    <section className="text-light-foreground md:mt-24" id="projects">
      <div className="container">
        <h2 className="large-title">
          <span className="font-outline-2">RECENT</span> PROJECTS
        </h2>
      </div>

      <div className="relative mt-6 flex flex-col md:flex-row gap-2">
        <div className="flex flex-col gap-4 md:w-2/3 rounded-lg">
          <div className="flex justify-between">
            
                <Image
                  src={projectInView.imageUrl}
                  alt={`${projectInView.title}`}
                  width={450}
                  height={900}
                  className="w-full h-full"
                />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6 md:mt-0 container md:w-1/2">
          <Image className="w-[50%]" src={projectInView.icon!} alt={`${projectInView.title}-icon`} width={400} height={40}/>
          <h3 className="medium-title my-2">{projectInView.title}</h3>
          <p>{projectInView.description}</p>
          <div className="flex gap-2 mt-4">
            {projectInView.tags.map((tag) => (
              <div key={tag} className="bg-violet-700 p-2 rounded-lg">{tag}</div>
            ))}
          </div>
          <div className="flex gap-6 mt-6">
            <Link
              className="btn text-center inline-block bg-lime rounded-lg font-bold"
              href={projectInView.href}
            >
              Case Study
            </Link>
            <Link
              className="btn text-center inline-block bg-blue rounded-lg font-bold"
              href={projectInView.href}
            >
              View Live
            </Link>
          </div>
          <button
            className="group absolute top-0 right-0 md:static flex items-center gap-6 bg-slate-300 text-slate-800 text-2xl tracking-wider w-fit  p-2 rounded-lg"
            onClick={showNextProject}
          >
            <span className="hidden md:inline-block">NEXT PROJECT</span>
            <FaArrowRightLong className="font-thin" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

/* */
