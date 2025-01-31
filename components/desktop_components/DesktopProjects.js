'use client'
import { useEffect, useRef } from "react"
import { project_list } from "@/utils/project_list"
import DesktopProjectItem from "./bits_and_pieces/Desktop_Project_Item"
import delay from "@/utils/delay"

export default function DesktopProjects() {

        
        const lineRef = useRef(null)

    
        useEffect(() => {
            async function callDelay() {
             await delay(500)
                if (lineRef.current) {
                    lineRef.current.classList.remove("h-0");
                    lineRef.current.classList.add("h-[100vh]");
                }
            }
            callDelay();

          
        }, [])
    


    return (
        <div id="projects" className="hidden md:flex min-h-screen w-full justify-center items-center mt-1 mb-1 overflow-x-hidden">
            <div className="grid grid-cols-7 w-[95%] min-h-[95vh] ">
                <div className="flex justify-center items-center col-start-2 ">
                    <hr ref={lineRef} className="w-[calc(0.5*18.75vh)] h-0  bg-vertical fixed top-0 -z-20 duration-[1000ms] ease-linear" />
                    <h2 className="font-main -rotate-90 text-[18.75vh] tracking-[2vh] leading-none">PROJECTS</h2>

                </div>
                <div className="flex flex-col col-span-5 justify-evenly items-end h-full ">
                    {project_list.map((project, idx) => {
                        return <DesktopProjectItem key={idx} idx={idx} title={project.title} techs={project.techs} />
                    })}
                </div>

            </div>

        </div>)
}