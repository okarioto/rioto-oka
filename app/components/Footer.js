import Link from "next/link";


export default function Footer() {
    return (
        <div>
            <footer className="flex-wrapper min-h-[5rem] md:mt-[8rem]" >
                <div className="flex justify-between w-[80%] ">
                    <a className="text-[14px] md:tracking-[0.7rem] hover:underline after:content-['B'] after:tracking-normal" href={'https://github.com/okarioto'} target="_blank">GITHU</a>
                    <a className="text-[14px] sm:tracking-[0.7rem] hover:underline after:content-['N'] after:tracking-normal" href='https://www.linkedin.com/in/okarioto' target="_blank">LINKEDI</a>
                    <a className="text-[14px] md:tracking-[0.7rem] hover:underline after:content-['L'] after:tracking-normal" href={'mailto:okarioto@gmail.com'}>EMAI</a>
                </div>

            </footer>
        </div>
    );
}