'use client'
import ExpandBtn from "../../utils/ExpandBtn"
import { useEffect, useState } from "react";

export default function Project(props) {
    const [isDown, setIsDown] = useState(false);
    useEffect(()=>{
        !props.parentIsDown && setIsDown(false);
    },[props.parentIsDown])

    return (
        <section className="flex flex-col mb-[3.5rem] w-[95%] lg:w-[80%] align-self-center">
            <div className={`flex flex-wrap items-center justify-between pb-[1rem]`}>
                <h2 className="text-[20px] tracking-[0.4rem] lg:tracking-[0.9rem] max-w-[80%]  uppercase hover:underline"> <a href={props.link} target="_blank">{props.title}</a>  </h2>
                <p className="text-[12px] tracking-tight mr-auto order-last 2xl:order-none basis-full 2xl:basis-auto">
                  ( {props.techs.map((tech)=>{
                        return `${tech} `;
                    })})
                    </p>
                <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
            </div>
            <div className={`max-h-[30rem] duration-1000 overflow-scroll ${!isDown && 'contract-h'}`}>
                
                <ul >
                   { props.bullets.map((bullet, idx) => {
                        return <li key={idx} className="pb-3 font-[100]"> - {bullet}</li>

                    })}
                </ul>
            </div>
        </section>
    )

}