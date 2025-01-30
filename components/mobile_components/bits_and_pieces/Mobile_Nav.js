'use client'
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import HamburgerExpander from "@/components/Hamburger_Expander";
import { comission_list } from "@/utils/comission_list";
import { project_list } from "@/utils/project_list";

export default function MobileNav() {
    const comissionsRef = useRef(null);
    const projectsRef = useRef(null);
    const navRef = useRef(null);


    const [comissionsIsDown, setComissionsIsDown] = useState(false);
    const [projectsIsDown, setProjectsIsDown] = useState(false);
    const [navIsDown, setNavIsDown] = useState(0);
    const [comissionsHeight, setComissionsHeight] = useState(0);
    const [projectsHeight, setProjectsHeight] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        if (!comissionsIsDown) { setNavHeight(navRef.current.clientHeight - comissionsHeight); }
        if (comissionsIsDown) { setNavHeight(navRef.current.clientHeight + comissionsHeight); }
        if (comissionsRef.current) {setComissionsHeight(comissionsRef.current.scrollHeight);}
    }, [comissionsIsDown])

    useEffect(() => {
        if (!projectsIsDown) { setNavHeight(navRef.current.scrollHeight - projectsHeight); }
        if (projectsIsDown) { setNavHeight(navRef.current.clientHeight + projectsHeight); }
        if (projectsRef.current) { setProjectsHeight(projectsRef.current.scrollHeight); }
    }, [projectsIsDown])


    useEffect(() => {


        function handleResize() {
            if (comissionsRef.current) { setComissionsHeight(comissionsRef.current.scrollHeight); }
            if (projectsRef.current) { setProjectsHeight(projectsRef.current.scrollHeight); }
            if (navRef.current) { setNavHeight(navRef.current.scrollHeight); }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [navIsDown])


    return (
        <div className="w-full flex flex-col items-end">
            <div className="w-full h-[8vw] flex items-center justify-end">
                <HamburgerExpander isClicked={navIsDown} setIsClicked={setNavIsDown} />
            </div>
            <div className="w-full overflow-hidden duration-700 items-end"
                style={{ height: navIsDown ? `${navHeight}px` : '0' }}
            >
                <ul ref={navRef} className="w-full flex flex-col items-end"
            
                >

                    <li className="flex justify-start">
                        <Link href={"/"} className=" text-right font-main text-[5vw] xs:text-[21px]">home</Link>
                    </li>
                    <li className="flex justify-start">
                        <Link href={"/#mobile-about"} className=" text-right font-main text-[5vw] xs:text-[21px]">about</Link>
                    </li>

                    <li className="flex flex-col items-end">
                        <p className=" text-right font-main text-[5vw] xs:text-[21px] cursor-pointer"
                            onClick={() => setComissionsIsDown(!comissionsIsDown)}
                        >comissions</p>
                        <ul ref={comissionsRef} className="w-full overflow-hidden duration-700"
                            style={{ height: comissionsIsDown ? `${comissionsHeight}px` : '0' }}>
                            <li className="flex w-full">
                                <Link href={`/#mobile-comissions`} className="w-full text-right font-main text-[3vw] lowercase">"all"</Link>
                            </li>
                            {comission_list.map((comission, idx) => {
                                return (
                                    <li key={idx} className="flex w-full">
                                        <Link href={`/comission/${idx}`} className="w-full text-right font-main text-[3vw] lowercase">{`"${comission.title}"`}</Link>
                                    </li>)
                            })}

                        </ul>
                    </li>

                    <li className="flex flex-col items-end">
                        <p className="text-right font-main text-[5vw] xs:text-[21px] cursor-pointer"
                            onClick={() => setProjectsIsDown(!projectsIsDown)}>projects</p>
                        <div className=" overflow-hidden duration-700"
                            style={{ height: projectsIsDown ? `${projectsHeight}px` : '0' }}>
                            <ul ref={projectsRef} >
                                <li className="flex w-full">
                                    <Link href={`/#mobile-projects`} className="w-full text-right font-main text-[3vw] lowercase">"all"</Link>
                                </li>
                                {project_list.map((project, idx) => {
                                    return (
                                        <li key={idx} className="flex w-full">
                                            <Link href={`/project/${idx}`} className="w-full text-right font-main text-[3vw] lowercase">{`"${project.title}"`}</Link>
                                        </li>)
                                })}
                            </ul>
                        </div>
                    </li>

                    <li className="flex justify-start">
                        <Link href={"/#mobile-contact"} className="text-right font-main text-[5vw] xs:text-[21px]">contact</Link>
                    </li>
                </ul>
            </div>
        </div>)
}