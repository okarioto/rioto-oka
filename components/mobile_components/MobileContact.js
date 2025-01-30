'use client'
import { useRef, useState, useEffect } from "react";
export default function MobileContact() {
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
        <div id="mobile-contact" className="flex md:hidden justify-center items-center w-full min-h-[100vh] overflow-x-hidden">
            <div className="w-[95%] h-[95vh] flex flex-col items-center justify-between ">
                <div ref={titleRef} className="flex items-center justify-center w-full">
                    <hr className="h-[calc(0.5*18vw)] absolute right-0 bg-thickmain -z-10 duration-1000"
                    style={{width: isTitleInView ? "100vw": "0"}}/>
                    <h2 className="font-main text-[18vw] tracking-[5vw] leading-none w-full">CONTACT</h2>
                </div>
                <div className="self-start">
                    <ul>
                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100 w-[105vw] ml-[-5vw]">
                            <a href="https://www.linkedin.com/in/okarioto" target="_blank" className="w-full font-main text-[7vw] tracking-[calc(0.1*3.5vw)] ml-[5vw]">
                                "LINKEDIN"
                            </a>
                        </li>
                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100 w-[105vw] ml-[-5vw]">
                            <a href="https://github.com/okarioto" target="_blank" className="w-full font-main text-[7vw] tracking-[calc(0.1*3.5vw)]   ml-[5vw]">
                                "GITHUB"
                            </a>
                        </li>
                        <li className=" flex hover:bg-white hover:bg-opacity-60 duration-100 w-[105vw] ml-[-5vw]">
                            <a href="mailto:okarioto@gmail.com" target="_blank" className="w-full font-main text-[7vw] tracking-[calc(0.1*3.5vw)]  ml-[5vw]">
                                "EMAIL"
                            </a>
                        </li>
                    </ul>
                </div>

               
            </div>
        </div>)
}