'use client'
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import delay from "@/utils/delay";
import HamburgerExpander from "../Hamburger_Expander";
import typewriter from "@/utils/typwriter";
import get_date from "@/utils/get_date";
import { project_list } from "@/utils/project_list";
import { comission_list } from "@/utils/comission_list";

export default function MobileLanding() {

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
            if (comissionRef.current) { setComissionsHeight(comissionsRef.current.scrollHeight); }
            if (projectRef.current) { setProjectsHeight(projectsRef.current.scrollHeight); }
        }

        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [projectsIsDown, comissionsIsDown])

    return (
        <div className="flex md:hidden justify-center items-center w-full h-screen mb-1 overflow-x-hidden">
            <div className="w-[95%] h-[95%] flex justify-between">
                <div className="h-full flex flex-col justify-between ">
                    <ul className="flex flex-col">
                        <li className=" group w-full duration-200 ">
                            <Link href={"/#mobile-about"} className=" flex flex-col items-start font-main text-[12vw] tracking-[0.5vw] leading-tight h-[13vw] overflow-hidden xs:text-[50px] xs:h-[56px]">
                                <p ref={aboutRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[56vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">about</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">about</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">about</p>}

                            </Link>
                        </li>
                        <li className="group flex w-full justify-between  duration-200 ">
                            <Link href={"/#mobile-comissions"} className="  flex flex-col items-start font-main text-[12vw] tracking-[0.5vw] leading-tight mr-3 h-[13vw] overflow-hidden xs:text-[50px] xs:h-[56px]">
                                <p ref={comissionRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[56vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">comissions</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">comissions</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">comissions</p>}
                            </Link>
                            {isDoneTyping && <HamburgerExpander isClicked={comissionsIsDown} setIsClicked={setComissionsIsDown} />}

                        </li>
                        <ul ref={comissionsRef} className="overflow-hidden h-0 w-full duration-700" style={{
                            height: comissionsIsDown && `${comissionsHeight}px`
                        }}>
                            {comission_list.map((comission, idx) => {
                                return (<li key={idx} className="flex font-main text-[6vw] bg-white bg-opacity-0 duration-200 hover:bg-opacity-65 cursor-pointer lowercase  xs:text-[24px]">
                                    <Link  href={`/comission/${idx}`} className="w-full">{`"${comission.title}"`}</Link>
                                </li>)
                            })}

                        </ul>
                        <li className=" group flex w-full justify-between  hover:bg-white hover:bg-opacity-65 duration-200">
                            <Link href={"/#mobile-projects"} className="w-full flex flex-col items-start font-main text-[12vw] tracking-[0.5vw] leading-tight h-[14vw] overflow-hidden mr-3  xs:text-[50px] xs:h-[60px]">
                                <p ref={projectRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[56vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">projects</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">projects</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">projects</p>}
                            </Link>
                            {isDoneTyping && <HamburgerExpander isClicked={projectsIsDown} setIsClicked={setProjectsIsDown} />}
                        </li>
                        <li className="overflow-hidden  duration-700" style={{
                            height: projectsIsDown ? `${projectsHeight}px` : "0"
                        }}>
                            <ul ref={projectsRef}>
                                {project_list.map((project, idx) => {
                                    return (<li key={idx} className="w-full flex font-main text-[6vw] bg-white bg-opacity-0 duration-200 hover:bg-opacity-65 cursor-pointer  xs:text-[24px] lowercase">
                                        <Link  href={`/project/${idx}`} className="w-full">{`"${project.title}"`}</Link>
                                    </li>)
                                })}
                            </ul>
                        </li>
                        <li className="group w-full hover:bg-white hover:bg-opacity-65 duration-200 " >
                            <Link href={"/#mobile-contact"} className="group flex flex-col items-start font-main text-[12vw] tracking-[0.5vw] leading-tight h-[13vw] overflow-hidden  xs:text-[50px] xs:h-[56px]">
                                <p ref={contactRef} className={`duration-500 ${isDoneTyping && "group-hover:-translate-y-[56vw]"} `}></p>
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">contact</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">contact</p>}
                                {isDoneTyping && <p className=" group-hover:-translate-y-[45vw] duration-500 xs:group-hover:-translate-y-[190px]">contact</p>}
                            </Link>
                        </li>
                    </ul>

                    <ul className="">
                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100">
                            <a href="mailto:okarioto@gmail.com" target="_blank" className="w-full font-main text-[7vw] xs:text-[2rem] tracking-[calc(0.1*3.5vw)]">
                                "EMAIL"
                            </a>
                        </li>

                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100">
                            <a href="https://github.com/okarioto" target="_blank" className="w-full font-main text-[7vw] xs:text-[2rem] tracking-[calc(0.1*3.5vw)]  ">
                                "GITHUB"
                            </a>
                        </li>

                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100">
                            <a href="https://www.linkedin.com/in/okarioto" target="_blank" className="w-full font-main text-[7vw] xs:text-[2rem] tracking-[calc(0.1*3.5vw)]">
                                "LINKEDIN"
                            </a>
                        </li>

                    </ul>
                </div>


                <div className="flex flex-col items-start justify-end -z-10">
                    <div className="absolute origin-top-left left-[55vw] -rotate-90 translate-y-full">
                        <p ref={dateRef} className="font-main text-[4vh] text-nowrap after:content-['|'] after:animate-blink after:ml-3"></p>
                        <h1 ref={nameRef} className="font-main text-[11vh] text-nowrap tracking-[0.5vh] leading-none  after:content-['|'] after:animate-blink"></h1>
                    </div>
                </div>


            </div>
        </div>
    )
}