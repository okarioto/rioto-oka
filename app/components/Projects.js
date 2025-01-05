'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import Project from "./Project";
import { useState } from "react";
import { projectDets } from "@/utils/project_dets";

export default function Projects() {
  const [isDown, setIsDown] = useState(false);
  return (
    <section className="flex flex-col mt-[3rem] md:mt-[10rem] w-[90%] align-self-center mb-[2rem]">
      <div className={`flex items-center justify-between mb-[3rem]`}>
        <h2 className="text-[39px]">PROJECTS</h2>
        <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
      </div>
      <div className={`flex flex-col justify-center items-center max-h-[90rem] duration-1000 overflow-hidden ${!isDown && 'contract-h'}`}>

        {projectDets.map((project, idx) => {
          return <Project
            key={idx}
            title={project.title}
            link={project.link}
            bullets={project.bullets}
            techs={project.techs}
            parentIsDown={isDown}
          />
        })}

      </div>
    </section>
  )

}