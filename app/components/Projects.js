'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import Project from "./Project";
import { useState } from "react";
import { royalNails, easyReader, flashCards } from "@/utils/project_dets";

export default function Projects() {
  const [isDown, setIsDown] = useState(true);
  return (
    <section className="flex flex-col mt-[5rem] sm:mt-[13rem] w-[90%] align-self-center mb-[2rem]">
      <div className={`flex items-center justify-between mb-[3rem]`}>
        <h2 className="text-[39px]">PROJECTS</h2>
        <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
      </div>
      <div className={`flex flex-col justify-center items-center max-h-[90rem] duration-1000 overflow-hidden ${!isDown && 'contract-h'}`}>
        <Project
          title={'ROYAL NAILS'}
          bullets={royalNails.bullets}
          techs={royalNails.techs}
          parentIsDown={isDown}
        />
        <Project
          title={'EASY READER'}
          bullets={easyReader.bullets}
          techs={easyReader.techs}
          parentIsDown={isDown}
        />
        <Project
          title={'FLASH CARD'}
          bullets={flashCards.bullets}
          techs={flashCards.techs}
          parentIsDown={isDown}
        />

      </div>
    </section>
  )

}