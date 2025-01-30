'use client'
import { useRef, useEffect, useState, use } from "react";
import Link from "next/link";
import delay from "@/utils/delay";
import HamburgerExpander from "../Hamburger_Expander";
import typewriter from "@/utils/typwriter";
import get_date from "@/utils/get_date";
import { project_list } from "@/utils/project_list";
import { comission_list } from "@/utils/comission_list";

export default function DesktopLanding() {

    const fullDate = get_date();
    const [isDoneTyping, setIsDoneTyping] = useState(false);
    const [comissionsIsDown, setComissionsIsDown] = useState(false);
    const [projectsIsDown, setProjectsIsDown] = useState(false);
    const [comissionsHeight, setComissionsHeight] = useState(0);
    const [projectsHeight, setProjectsHeight] = useState(0);

    const calledRef = useRef(false);
    const nameRef = useRef(null);
    const aboutRef = useRef(null);
    const comissionRef = useRef(null);
    const comissionsRef = useRef(null);
    const projectRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const dateRef = useRef(null);



    useEffect(() => {
        async function calltypewriters() {
            if (calledRef.current) return;
            calledRef.current = true;
            typewriter(contactRef, "contact", 300)
            await delay(400)
            typewriter(aboutRef, "about", 250)
            await delay(200)
            typewriter(projectRef, "projects", 200)
            await delay(300)
            typewriter(comissionRef, "comissions", 150)
            await typewriter(dateRef, fullDate, 100)
            await typewriter(nameRef, "RIOTO OKA", 250)
            document.body.classList.remove("overflow-hidden");
            setIsDoneTyping(true);
        }

        calltypewriters()
    }, [fullDate])

    useEffect(() => {
        function handleResize() {
            if (comissionsRef.current) { setComissionsHeight(comissionsRef.current.scrollHeight); }
            if (projectsRef.current) { setProjectsHeight(projectsRef.current.scrollHeight); }
        };

        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [comissionsIsDown, projectsIsDown]);


    return (
        <div className="hidden md:flex justify-center items-center w-full h-screen mb-1">
            <div className="w-[95%] h-[95%] flex flex-col justify-between">
                <div className="flex justify-between">
                    <ul className="flex flex-col">
                        <li className=" group w-full hover:bg-white hover:bg-opacity-65  duration-200 ">
                            <Link href={"/#about"} className=" flex flex-col items-start font-main text-[4vw] tracking-[0.5rem] leading-tight h-[5vw] overflow-hidden ">
                                <p ref={aboutRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[15vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">about</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">about</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">about</p>}
                            </Link>
                        </li>

                        <li className="group flex w-full justify-between hover:bg-white hover:bg-opacity-65 duration-200 ">
                            <Link href={"/#comissions"} className="  flex flex-col items-start font-main text-[4vw] tracking-[0.5rem] leading-tight h-[5vw] overflow-hidden mr-3 ">
                                <p ref={comissionRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[15vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">comissions</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">comissions</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">comissions</p>}
                            </Link>
                            {isDoneTyping && <HamburgerExpander isClicked={comissionsIsDown} setIsClicked={setComissionsIsDown} />}

                        </li>

                        <li className="overflow-hidden duration-700" style={{
                            height: comissionsIsDown ? `${comissionsHeight}px` : "0",
                        }}>
                            <ul ref={comissionsRef} >
                                {comission_list.map((comission, idx) => {
                                    return (
                                        <li key={idx}  className="w-full flex font-main text-[1.75vw] bg-white bg-opacity-0 duration-200 hover:bg-opacity-65 cursor-pointer">
                                            <Link  href={`/comission/${idx}`} className="w-full lowercase"> {`"${comission.title}"`}</Link>
                                        </li>)
                                })}
                            </ul>
                        </li>

                        <li className=" group flex w-full justify-between  hover:bg-white hover:bg-opacity-65 duration-200">
                            <Link href={"/#projects"} className="w-full flex flex-col items-start font-main text-[4vw] tracking-[0.5rem] leading-tight h-[5vw] overflow-hidden mr-3 ">
                                <p ref={projectRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[15vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">projects</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">projects</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">projects</p>}
                            </Link>
                            {isDoneTyping && <HamburgerExpander isClicked={projectsIsDown} setIsClicked={setProjectsIsDown} />}
                        </li>

                        <li className="overflow-hidden duration-700" style={{
                            height: projectsIsDown ? `${projectsHeight}px` : '0'
                        }}>
                            <ul ref={projectsRef} className="">
                                {project_list.map((project, idx) => {
                                    return (
                                        <li key={idx} className="w-full flex font-main text-[1.75vw] bg-white bg-opacity-0 duration-200 hover:bg-opacity-65 cursor-pointer">
                                            <Link  href={`/project/${idx}`} className="w-full lowercase"> {`"${project.title}"`}</Link>
                                        </li>)
                                })}
                            </ul>
                        </li>

                        <li className="group w-full hover:bg-white hover:bg-opacity-65 duration-200" >
                            <Link href={"/#contact"} className="group flex flex-col items-start font-main text-[4vw] tracking-[0.5rem] leading-tight h-[5vw] overflow-hidden ">
                                <p ref={contactRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[15vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">contact</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">contact</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[15vw] duration-500">contact</p>}
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <p ref={dateRef} className="font-main text-[4vw] text-right"></p>
                    </div>
                </div>

                <h1 ref={nameRef} className="font-main text-[15vw] tracking-[0.5rem] leading-none text-right after:content-['|'] after:animate-blink after:tracking-[-3rem] after:ml-[-3vw]"> </h1>
            </div>
        </div>
    )
}