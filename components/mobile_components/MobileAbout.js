'use client'
import { useRef, useEffect, useState, use } from "react"
import MobileNav from "./bits_and_pieces/Mobile_Nav";
import about_me_blurb from "@/utils/about_me";
import TechCard from "../Tech_Card";
import { frameworks, languages } from "@/utils/tech_list";



export default function MobileAbout() {
    const aboutmeRef = useRef(false);
    const titleRef = useRef();


    const [isTitleInView, setIsTitleInView] = useState(false)
    const [isAboutInView, setIsAboutInView] = useState(false);


    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                if (entry.target === aboutmeRef.current) setIsAboutInView(entry.isIntersecting);
                if (entry.target === titleRef.current) setIsTitleInView(entry.isIntersecting);
            })
        }
        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.6 });
        if (aboutmeRef.current) { observer.observe(aboutmeRef.current); }
        if (titleRef.current) { observer.observe(titleRef.current); }
        return () => { observer.disconnect(); };
    }, []);









    return (
        <div id="mobile-about" className="flex md:hidden justify-center items-start w-full min-h-screen overflow-x-hidden">
            <div className="w-[95%] h-[95%] flex flex-col items-center justify-around pb-[20vw]">
                <div ref={titleRef} className="flex items-center justify-center w-full">
                    <hr className="h-[calc(0.5*18vw)] absolute left-0 bg-thickmain -z-10 duration-1000"
                        style={{ width: isTitleInView ? "100vw" : "0" }} />
                    <h2 className="font-main text-[18vw] tracking-[12vw] leading-none text-center w-full">ABOUT</h2>
                </div>
                <div ref={aboutmeRef} className="w-[85%] relative -top-[1.5vw] -left-[1.5vw]  bg-[#c0c0c080] mt-[5vw] duration-700"
                    style={{
                        borderRadius: isAboutInView ? "0" : "30%",
                        overflow: isAboutInView ? "visible" : "hidden"
                    }}>
                    <p className="font-main text-[4vw] text-justify leading-tight relative top-[3vw] left-[3vw] duration-1000 delay-200"
                        style={{ opacity: isAboutInView ? "1" : "0" }}>
                        {about_me_blurb}
                    </p>
                </div>
                <div className="mt-10 w-[80%] flex justify-center">
                    <TechCard techs={languages} title={"languages"} />
                </div>
                <div className="mt-10 w-[80%] flex justify-center">
                    <TechCard techs={frameworks} title={"frameworks"} />
                </div>

            </div>
        </div>)
}