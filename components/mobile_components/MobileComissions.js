'use client'
import { useRef, useEffect, useState } from "react"
import Link from "next/link";
import TechCard from "../Tech_Card";
import { comission_list } from "@/utils/comission_list";


export default function MobileComissions() {

    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false)


    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                if (entry.target === titleRef.current) setIsTitleInView(entry.isIntersecting);
            })
        }
        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.6 });
        if (titleRef.current) { observer.observe(titleRef.current); }
        return () => { observer.disconnect(); };
    }, []);




    return (
        <div id="mobile-comissions" className="flex md:hidden justify-center items-start w-full overflow-x-hidden">
            <div className="w-[95%] h-[95%] flex flex-col items-center justify-around pb-[20vw] pt-[5vw]">
                <div ref={titleRef} className="flex items-center w-full justify-center">
                    <hr className="h-[calc(0.5*18vw)] absolute right-0 bg-thickmain -z-10 duration-1000"
                        style={{ width: isTitleInView ? "100vw" : "0" }} />
                    <h2 className="w-full font-main text-[18vw] tracking-[0] leading-none text-center">COMISSIONS</h2>
                </div>
                {comission_list.map((comission, idx) => {
                    return (
                        <Link href={`/comission/${idx}`} key={idx} className="flex flex-col justify-center  mt-4 mb-4 relative group duration-300 w-[80%]">
                            <div className="flex items-center w-full h-full absolute top-0 opacity-0 bg-white  group-hover:opacity-100 group-hover:bg-opacity-70 duration-300">
                                <p className="absolute text-center w-full font-main text-[3vw] group-hover:opacity-100 group-hover:bg-opacity-100 duration-300">click to see more</p>
                            </div>
                            <div className="flex justify-center group-hover:opacity-50 duration-300 w-full -z-20">
                                <TechCard techs={comission.techs} title={`"${comission.title}"`} isItalic={false} />
                            </div>
                        </Link>)
                })}


            </div>
        </div>)
}