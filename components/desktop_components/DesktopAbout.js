'use client'
import { useEffect, useState, useRef } from "react"
import { languages, frameworks } from "@/utils/tech_list"
import about_me_blurb from "@/utils/about_me"
import TechCard from "../Tech_Card"


export default function DesktopAbout() {
    const aboutmeRef = useRef();
    const [isAboutInView, setIsAboutInView] = useState(false)

    const titleLineRef = useRef();
    const [isTitleLineInView, setIsTitleLineInView] = useState(false);


    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                if (entry.target === aboutmeRef.current) setIsAboutInView(entry.isIntersecting);
                if (entry.target === titleLineRef.current) setIsTitleLineInView(entry.isIntersecting);
            })
        }
        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.5 });
        if (aboutmeRef.current) { observer.observe(aboutmeRef.current); }
        if (titleLineRef.current) { observer.observe(titleLineRef.current); }
        return () => { observer.disconnect(); };
    }, []);


    return (
        <div id="about" className="hidden md:flex w-full min-h-[50rem] justify-center items-center mt-1 mb-1">
            <div className="w-[95%] h-[95%] flex justify-between items-start">
                <div className="h-full flex flex-[15%] flex-col items-center justify-center">
                    <div className="w-full mb-10 mt-[13vw] flex justify-center">
                        <TechCard title="languages" techs={languages} />
                    </div>
                    <div className="w-full flex justify-center">
                        <TechCard title="frameworks" techs={frameworks} />
                    </div>
                </div>
                <div className="h-full flex flex-[60%] flex-col items-center ml-10">
                    <div ref={titleLineRef} className="flex items-center justify-center">
                        <hr className="h-[calc(0.4*13vw)] bg-thickmain absolute right-0 -z-10 duration-1000 border-0"
                            style={{ width: isTitleLineInView ? "100vw" : "0" }} />
                        <h2 className="font-main text-[13vw] tracking-[calc(0.5*13vw)] w-full leading-none text-center -mr-[calc(0.5*13vw)]">
                            ABOUT
                            </h2>
                    </div>

                    <div ref={aboutmeRef} className="w-[75%] relative right-[1%] bottom-[1%]  bg-[#c0c0c080] mt-7 duration-700"
                        style={{
                            borderRadius: isAboutInView ? "0" : "30%",
                            overflow: isAboutInView ? "visible" : "hidden"
                        }}>
                        <p className="font-main relative left-[3%] top-5 text-[2.05vw] text-justify leading-tight duration-1000 delay-200"
                            style={{ opacity: isAboutInView ? "1" : "0" }}>{`"${about_me_blurb}"`}</p></div>
                </div>
            </div>
        </div>)
}