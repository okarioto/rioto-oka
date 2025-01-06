'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import Project from "./Project";
import { useState } from "react";
import { comissionDets } from "@/utils/comission_dets";

export default function Comissions() {
    const [isDown, setIsDown] = useState(false);
    return (
        <section className="flex flex-col mt-[5rem] md:mt-[13rem] w-[90%] align-self-center">
            <div className={`flex items-center justify-between mb-[3rem]`}>
                <h2 className="text-[39px]">COMISSIONS</h2>
                <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
            </div>
            <div className={`flex flex-col justify-center items-center max-h-[35rem] duration-1000 overflow-hidden ${!isDown && 'contract-h'}`}>
                {comissionDets.map((project, idx) => {
                    return <Project
                        key={idx}
                        title = { project.title }
                        link = { project.link }
                        bullets = { project.bullets }
                        techs = { project.techs }
                        parentIsDown = { isDown }
                    />
                })}
            </div>
        </section>
    )

}