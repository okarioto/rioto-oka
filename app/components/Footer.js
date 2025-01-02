import Link from "next/link";


export default function Footer() {
    return (
        <div>
            <footer className="flex-wrapper min-h-[5rem] md:mt-[8rem]" >
                <div className="flex justify-between w-[80%] ">
                    <a className="text-[14px] md:tracking-[0.7rem]" href={'https://github.com/okarioto'} target="_blank">GITHUB</a>
                    <a className="text-[14px] sm:tracking-[0.7rem]" href='https://www.linkedin.com/in/okarioto' target="_blank">LINKEDIN</a>
                    <a className="text-[14px] md:tracking-[0.7rem]" href={'mailto:okarioto@gmail.com'}>EMAIL</a>
                </div>

            </footer>
        </div>
    );
}