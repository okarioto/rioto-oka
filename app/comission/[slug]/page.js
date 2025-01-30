'use client'
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { comission_list } from "@/utils/comission_list";
import TechCard from "@/components/Tech_Card";
import typewriter from "@/utils/typwriter";
import MobileNav from "@/components/mobile_components/bits_and_pieces/Mobile_Nav";

export default function ComissionPage() {
    const { slug } = useParams();
    const comission = comission_list[slug]


    const calledRef = useRef(false);
    const desktopTitleRef = useRef(null)
    const desktopDescriptionCardRef = useRef(null)
    const desktopTitleLineRef = useRef(null)
    const desktopBlurbRef = useRef(null)
    const mobileTitleRef = useRef(null)
    const mobileDescriptionCardRef = useRef(null)
    const mobileTitleLineRef = useRef(null)
    const mobileBlurbRef = useRef(null)

    useEffect(() => {
        async function callTypewriter() {
            if (calledRef.current) return;
            calledRef.current = true;
            await typewriter(desktopTitleRef, comission.title, 200)
            await typewriter(mobileTitleRef, comission.title, 200)
        }
        callTypewriter()
        if (desktopDescriptionCardRef.current) {
            desktopDescriptionCardRef.current.classList.remove("rounded-[40%]");
        }
        if (desktopTitleLineRef.current) {
            desktopTitleLineRef.current.classList.remove("w-0");
            desktopTitleLineRef.current.classList.add("w-full");
        }
        if (desktopBlurbRef.current) {
            desktopBlurbRef.current.classList.remove("opacity-0");
            desktopBlurbRef.current.classList.add("opacity-1");
        }
        if (mobileDescriptionCardRef.current) {
            mobileDescriptionCardRef.current.classList.remove("rounded-[40%]");
        }
        if (mobileTitleLineRef.current) {
            mobileTitleLineRef.current.classList.remove("w-0");
            mobileTitleLineRef.current.classList.add("w-full");
        }
        if (mobileBlurbRef.current) {
            mobileBlurbRef.current.classList.remove("opacity-0");
            mobileBlurbRef.current.classList.add("opacity-1");
        }
    }, [])

    return (
        <>
            <div className="hidden md:flex h-screen w-full  justify-center items-center mt-1 mb-1 overflow-x-hidden">
                <div className="flex flex-col items-center justify-around h-[95%]">
                    <div className="flex items-center justify-center">
                        <hr ref={desktopTitleLineRef} className=" w-0 h-[calc(0.4*10.5vw)] bg-thicksub  absolute right-0 -z-10 duration-1000" />
                        <h2 ref={desktopTitleRef} className="font-main text-[10.5vw] tracking-[calc(0.1*vw)] leading-none text-center uppercase text-nowrap after:content-['|'] after:animate-blink"></h2>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-3 flex items-center justify-center">
                            <div ref={desktopDescriptionCardRef} className="flex flex-col w-[60%] justify-center items-center bg-[#c0c0c080]  rounded-[40%] duration-1000 ">
                                <div ref={desktopBlurbRef} className="relative bottom-[2vw] right-[2vw] duration-700 delay-500 opacity-0">
                                    <h3 className="font-main italic text-[3vw] text-start ">DETAILS</h3>
                                    <ul className="w-full">
                                        {comission.bullets.map((bullet, idx) => {
                                            return <li key={idx} className="font-main text-[1.4vw] text-justify mt-2 list-disc">{` ${bullet}`}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-between">
                            <div className="w-[80%]">

                                <TechCard title="technologies" techs={comission.techs} />
                            </div>
                            <div className="flex w-[90%] justify-between">
                                <Link className="font-main text-[4vw] tracking-[calc(0.5*4vw)] underline" href={"/#comissions"}>BACK</Link>
                                <a className="font-main text-[4vw] tracking-[calc(0.5*4vw)] underline" href={comission.link} target="_blank">VIEW</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="md:hidden flex min-h-screen w-full  justify-center items-center mt-1 mb-1">
                <div className="flex flex-col items-center justify-start h-[95vh] w-[90vw]">
                    <div className="flex items-center justify-center w-full">
                        <hr ref={mobileTitleLineRef} className=" w-0 h-[calc(0.5*10vw)] bg-thin  absolute right-0 -z-10 duration-1000" />
                        <h3 ref={mobileTitleRef} className="w-full font-main text-nowrap text-[12vw] after:content-['|'] after:animate-blink text-center capitalize"></h3>
                    </div>
                    <div className="w-full">
                        <MobileNav />
                    </div>
                    <div className="w-full flex justify-center mt-[7vw]">
                        <div ref={mobileDescriptionCardRef} className="flex flex-col w-[95%] relative top-[3vw] left-[2vw]  justify-center items-center bg-[#c0c0c080]  rounded-[40%] duration-1000 ">
                            <div ref={mobileBlurbRef} className="relative bottom-[6vw] right-[4vw] duration-700 delay-500 opacity-0">
                                <h3 className="font-main italic text-[7vw] text-start ">DETAILS</h3>
                                <ul className="w-full">
                                    {comission.bullets.map((bullet, idx) => {
                                        return <li key={idx} className="font-main text-[4vw] text-justify mt-1 tracking-tighter list-disc">{` ${bullet}`}</li>
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="w-full mt-8">
                        <TechCard title="technologies" techs={comission.techs} />
                    </div>

                    <div className="flex w-full justify-between mt-4">
                        <Link className="font-main text-[10vw] tracking-[calc(0.5*4vw)] underline" href={"/#mobile-comissions"}>BACK</Link>
                        <a className="font-main text-[10vw] tracking-[calc(0.5*4vw)] underline" href={comission.link} target="_blank">VIEW</a>
                    </div>

                </div>
            </div>

        </>)
}