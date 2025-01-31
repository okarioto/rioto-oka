'use client'
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function TechCard({ title, techs, isItalic }) {
    const cardRef = useRef();
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            })
        }
        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.6 });
        if (cardRef.current) { observer.observe(cardRef.current); }
        return () => { observer.disconnect(); };
    }, []);


    return (
        <div ref={cardRef} className="flex flex-col items-end  bg-white bg-opacity-50 w-full duration-500 overflow-hidden"
            style={{
                borderRadius: isInView ? "0" : "30%",
            }}
        >
            <div className="duration-700 delay-300 flex flex-col w-full" style={{opacity : isInView ? "1": "0"}}>

                {!isItalic && <h3 className="font-main text-[8vw] w-full uppercase tracking-widest text-right md:text-[3vw]">{title}</h3>}
                {isItalic && <h3 className="font-main text-[10vw] w-full italic uppercase tracking-widest text-right md:text-[3vw]"
                   >{title}</h3> }
                <ul className="w-full">
                    {techs.map((tech, idx) => {
                        return <li key={idx} className="w-full font-main text-[5vw] leading-tight tracking-widest text-right md:text-[1.8vw] mb-1">
                            {`"${tech}"`}
                        </li>
                    })}

                </ul>
            </div>
        </div>)
}