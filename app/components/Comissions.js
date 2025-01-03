'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import Project from "./Project";
import { useState } from "react";
import { royalNails} from "@/utils/project_dets";

export default function Comissions() {
    const [isDown, setIsDown] = useState(true);
    return (
        <section className="flex flex-col mt-[5rem] md:mt-[13rem] w-[90%] align-self-center">
            <div className={`flex items-center justify-between mb-[3rem]`}>
                <h2 className="text-[39px]">COMISSIONS</h2>
                <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
            </div>
            <div className={`flex flex-col justify-center items-center max-h-[23rem] duration-1000 overflow-hidden ${!isDown && 'contract-h'}`}>
                <Project
                    title={'ROYAL NAILS'}
                    link="https://royal-nails.vercel.app"
                    bullets={royalNails.bullets}
                    techs={royalNails.techs}
                    parentIsDown={isDown}
                />
            </div>
        </section>
    )

}