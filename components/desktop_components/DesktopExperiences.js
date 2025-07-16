import { experience_list } from "@/utils/experience_list"
import DesktopExperienceItem from "./bits_and_pieces/Desktop_Experience_Item"

export default function DesktopExperiences() {
    return (
        <div id="experiences" className="hidden md:flex h-screen w-full justify-center items-center mt-1 mb-1 overflow-x-hidden">
            <div className="grid grid-cols-7 w-[95%] h-[95%]">
                <div className="flex flex-col col-span-5 justify-evenly h-full">

                    {experience_list.map((experience, idx) => {
                        return <DesktopExperienceItem key={idx} idx={idx} title={experience.title} techs={experience.techs} />
                    })}


                </div>
                <div className="flex justify-center items-center col-start-6">
                    <h2 className="font-main text-[18.75vh] leading-none  rotate-90">EXPERIENCE</h2>
                </div>
            </div>

        </div>)
}