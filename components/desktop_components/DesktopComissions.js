import { comission_list } from "@/utils/comission_list"
import DesktopComissionItem from "./bits_and_pieces/Desktop_Comission_Item"

export default function DesktopComissions() {
    return (
        <div id="comissions" className="hidden md:flex h-screen w-full justify-center items-center mt-1 mb-1 overflow-x-hidden">
            <div className="grid grid-cols-7 w-[95%] h-[95%]">
                <div className="flex flex-col col-span-5 justify-evenly h-full">

                    {comission_list.map((comission, idx) => {
                        return <DesktopComissionItem key={idx} idx={idx} title={comission.title} techs={comission.techs} />
                    })}


                </div>
                <div className="flex justify-center items-center col-start-6">
                    <h2 className="font-main text-[18.75vh] leading-none  rotate-90">COMISSIONS</h2>
                </div>
            </div>

        </div>)
}