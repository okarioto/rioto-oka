export default function PlusMinusExpander({ isClicked, setIsClicked }) {



    return (
        <>
            <div onClick={() => { setIsClicked(!isClicked) }} className="flex md:hidden flex-col items-center justify-center ml-1 cursor-pointer group z-10">
                <div className={`w-[5vw] h-[0.5vw] -mb-[0.25vw] bg-black transform duration-[700ms] xs:w-[1.5rem]  xs:h-[0.2rem]
                    ${isClicked ? `` : `rotate-[270deg]`} `}></div>
        
                <div className={`w-[5vw] h-[0.5vw] -mt-[0.25vw] bg-black transform duration-[900ms] xs:w-[1.5rem] xs:h-[0.2rem]
                    ${isClicked ? `` : `rotate-[540deg]`}`}></div>
            </div>
        </>)
} 