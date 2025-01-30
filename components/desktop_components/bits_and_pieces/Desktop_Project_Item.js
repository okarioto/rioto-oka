'use client'
import Link from "next/link"
import { useRef, useState, useEffect } from "react";

export default function DesktopProjectItem({ title, techs, idx }) {
    const lineRef = useRef();
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            })
        }

        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.5 });
        if (lineRef.current) { observer.observe(lineRef.current); }
        return () => { observer.disconnect(); };
    }, []);

    return (
        <div ref={lineRef} className="flex flex-col">

            <Link href={`/project/${idx}`} className="group w-[120vw] -mr-[4rem] hover:bg-white hover:bg-opacity-65 flex items-center duration-300">
                <p className="font-main text-[1vw] absolute left-1/2 opacity-0 group-hover:opacity-100 duration-300">click to see more</p>
                <h2 className=" -ml-[4rem] font-main text-[5vw] tracking-[0rem] leading-tight text-right capitalize w-full group-hover:opacity-20 duration-300">{`<"${title}"`}</h2>
            </Link>

            <div className="flex items-center justify-end self-end h-[calc(0.5*1.75vw)] -mr-[3vw]  bg-thin  duration-[1500ms] -z-20"
                style={{ width: isInView ? "103vw" : "0" }}>
                <p className="font-main text-[1.75vw]  font-extralight mr-[3vw] text-nowrap">
                    With {techs.map((tech) => {
                        return `"${tech}"`
                    })}
                </p>
            </div>
        </div>
    )
}
