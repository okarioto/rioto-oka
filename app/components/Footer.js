import Link from "next/link";


export default function Footer() {
    return (
        <div>
            <footer className="flex-wrapper min-h-[5rem] sm:mt-[8rem]" >
                <div className="flex justify-between w-[80%] ">
                    <a className="text-[14px] sm:tracking-[0.7rem]" href={'https://github.com/okarioto'}>GITHUB</a>
                    <a className="text-[14px] sm:tracking-[0.7rem]" href={'www.linkedin.com/in/okarioto'}>LINKEDIN</a>
                    <a className="text-[14px] sm:tracking-[0.7rem]" href={'mailto:okarioto@gmail.com'}>EMAIL</a>
                </div>

            </footer>
        </div>
    );
}