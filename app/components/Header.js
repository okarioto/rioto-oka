

export default function Header() {
    return (
        <div>
            <header className="flex-wrapper min-h-[5rem] mt-[1rem]">
                <div className="flex  w-[80%] justify-between items-center flex-wrap md:flex-nowrap">
                    <a className="text-[14px] md:tracking-[0.7rem] order-2 md:order-none hover:underline after:content-['B'] after:tracking-normal" href='https://github.com/okarioto' target="_blank">GITHU</a>
                    <h1 className="md:text-[52px] text-[22px]  tracking-[1rem] basis-full md:basis-auto flex justify-center items-center hover:underline"><a className="after:content-['A'] after:tracking-normal"href='https://www.linkedin.com/in/okarioto' target="_blank">RIOTO OK</a></h1>
                    <a dir="rtl" className="text-[14px] md:tracking-[0.7rem] order-3 md:order-none hover:underline  after:content-['L'] after:tracking-normal" href='mailto:okarioto@gmail.com' >EMAI</a>
                </div>


            </header>
        </div>
    );
}