

export default function Header() {
    return (
        <div>
            <header className="flex-wrapper min-h-[5rem] mt-[1rem]">
                <div className="flex  w-[80%] justify-between items-center flex-wrap sm:flex-nowrap">
                    <a className="text-[14px] tracking-[0.7rem] order-2 sm:order-none" href='https://github.com/okarioto'>GITHUB</a>
                    <h1 className="sm:text-[52px] text-[24px] font-bold tracking-[1rem] basis-full sm:basis-auto flex justify-center"><a className="" href='https://www.linkedin.com/in/okarioto'>RIOTO OKA</a></h1>
                    <a className="text-[14px] tracking-[0.7rem] order-3 sm:order-none" href='mailto:okarioto@gmail.com'>EMAIL</a>
                </div>


            </header>
        </div>
    );
}