
import TechList from "./TechList";
import { languages, frameworks } from "@/utils/techs";


export default function Technologies(){

    return ( 
        <div className="flex w-[90%] justify-between mt-[0rem] sm:mt-[11rem] flex-col sm:flex-row">
        <TechList
        title="LANGUAGES"
        items={languages} />
        <TechList
        title="FRAMEWORKS"
        items={frameworks} />

        </div>
    )
}