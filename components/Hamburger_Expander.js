export default function HamburgerExpander({ isClicked, setIsClicked }) {



    return (
        <>
            <div onClick={() => { setIsClicked(!isClicked) }} className="hidden md:flex flex-col items-end justify-center ml-1 cursor-pointer group">
                <div className={`w-[2.5vw] h-[0.2vw] mt-[0.5vw] bg-black   transform duration-[700ms] group-hover:bg-black  ${isClicked ? `-rotate-[225deg] -mb-[0.421vw]` : ``} `}></div>
                <div className={` h-[0.2vw]  bg-black transform duration-[700ms] group-hover:bg-black w-[2vw] mt-[0.5vw] ${isClicked ? `opacity-0` : ``}`}></div>
                <div className={` h-[0.2vw]  bg-black transform duration-[900ms] group-hover:bg-black  ${isClicked ? `w-[2.5vw] -rotate-[495deg] -mt-[0.421vw]` : `w-[1.5vw] mt-[0.5vw]`}`}></div>
            </div>



            <div onClick={() => { setIsClicked(!isClicked) }} className="flex md:hidden flex-col items-end justify-center ml-1 cursor-pointer group z-10">
                <div className={`w-[6vw] h-[0.5vw] mt-[1vw] bg-black   transform duration-[700ms] group-hover:bg-black  ${isClicked ? `-rotate-[225deg] -mb-[1vw]` : ``} `}></div>
                <div className={`w-[4vw] h-[0.5vw]  bg-black transform duration-[700ms] group-hover:bg-black  mt-[1vw] ${isClicked ? `opacity-0` : ``}`}></div>
                <div className={` h-[0.5vw]  bg-black transform duration-[900ms] group-hover:bg-black  ${isClicked ? `w-[6vw] -rotate-[495deg] -mt-[1vw]` : `w-[3vw] mt-[1vw]`}`}></div>
            </div>
            </>)
} 