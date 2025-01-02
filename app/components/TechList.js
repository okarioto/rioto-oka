'use client'
import { useState } from "react"
import ExpandBtn from "@/utils/ExpandBtn"

export default function TechList(props) {
    const [isDown, setIsDown] = useState(true);

    return (<section className="flex flex-col w-[45%]">
        <div className="flex justify-between items-center">
            <h2 className="text-[39px]">{props.title}</h2>
            <ExpandBtn isDown={isDown} setIsDown={setIsDown} />
        </div>
        <div className={`max-h-[18rem] duration-1000 overflow-hidden ${!isDown && 'contract-h'}`}>
            <ul>
                {props.items.map((item, idx)=>{
                    return <li key={idx} className="pt-2 pb-[2px] border-b-[1px] border-black">{item}</li>
                })}
            </ul>
        </div>
    </section>);
}