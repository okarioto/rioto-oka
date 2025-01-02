'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import aboutMeBlurb from "@/utils/about_me_blurb";
import { useState } from "react";

export default function AboutMe() {
    const [isDown, setIsDown] = useState(true);
    return (
        <section className="flex flex-col mt-[5rem] w-[90%] sm:w-[80%] align-self-center">
            <div className={`flex items-center justify-between`}>
                <h2 className="text-[39px]">ABOUT ME</h2>
                <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
            </div>
            <div className={`max-h-[25rem] duration-1000 overflow-scroll ${!isDown && 'contract-h'}`}>
                <p className="sm:tracking-[0.1rem] text-justify">
                    {aboutMeBlurb}
                </p>
            </div>
        </section>
    )

}