

export default function Header() {
    return (
        <div>
            <header className="flex-wrapper min-h-[5rem] mt-[1rem]">
                <div className="flex  w-[80%] justify-between items-center flex-wrap md:flex-nowrap">
                    <a className="text-[14px] tracking-[0.7rem] order-2 md:order-none" href='https://github.com/okarioto' target="_blank">GITHUB</a>
                    <h1 className="md:text-[52px] text-[24px] tracking-[1rem] basis-full md:basis-auto flex justify-center"><a className="" href='https://www.linkedin.com/in/okarioto' target="_blank">RIOTO OKA</a></h1>
                    <a className="text-[14px] tracking-[0.7rem] order-3 md:order-none" href='mailto:okarioto@gmail.com' >EMAIL</a>
                </div>


            </header>
        </div>
    );
}