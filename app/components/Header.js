

export default function Header() {
    return (
        <div>
            <header className="flex-wrapper min-h-[5rem] mt-[1rem]" id="header-desktop">
                <div className="flex  w-[80%] justify-between items-center">
                    <a className="text-[14px] tracking-[0.7rem]" href='https://github.com/okarioto'>GITHUB</a>
                    <h1 className="text-[52px] font-bold tracking-[1rem]"><a href='https://www.linkedin.com/in/okarioto'>RIOTO OKA</a></h1>
                    <a className="text-[14px] tracking-[0.7rem]" href='mailto:okarioto@gmail.com'>EMAIL</a>
                </div>

            </header>
        </div>
    );
}