'use client'
import { useRef, useState, useEffect } from 'react';
export default function DesktopContact() {
    const lineRef = useRef();
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            })
        }

        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.5 });
        if (lineRef.current) { observer.observe(lineRef.current); }
        return () => { observer.disconnect(); };
    }, []);
    return (
        <div id='contact' className='hidden md:flex h-screen w-full justify-center items-center mt-1 mb-1 overflow-x-hidden'>
            <div className='flex w-[95%] h-[95%]'>
                <div className='w-[70%] flex flex-col justify-start'>
                    <div ref={lineRef} className='w-full h-[13vw] flex flex-col justify-center'>
                        <div className='-ml-[3vw] flex h-[calc(0.4*13vw)] bg-thickmain items-center duration-1000'
                            style={{ width: isInView ? '103vw' : '0' }}
                        >
                            <h2 className='font-main text-[13vw] ml-[3vw] tracking-[calc(0.1*vw)] w-full leading-none text-left '>CONTACT</h2>
                        </div>
                    </div>
                </div>
                <div className='h-full w-[30%] flex flex-col justify-end items-end'>
                    <ul className='w-[120vw]'>

                        <li className='w-full flex ml-[4rem] hover:bg-white hover:bg-opacity-60 duration-100'>
                            <a href='mailto:contact@rioto-oka.com' target='_blank' className='font-main text-[3.5vw] tracking-[calc(0.1*3.5vw)] text-right w-full -ml-[4rem]'>'EMAIL'</a>
                        </li>

                        <li className='w-full flex ml-[4rem] hover:bg-white hover:bg-opacity-60 duration-100'>
                            <a href='https://github.com/okarioto' target='_blank' className='font-main text-[3.5vw] tracking-[calc(0.1*3.5vw)] text-right w-full -ml-[4rem]'>'GITHUB'</a>
                        </li>

                        <li className='w-full flex ml-[4rem] hover:bg-white hover:bg-opacity-60 duration-100'>
                            <a href='https://www.linkedin.com/in/okarioto' target='_blank' className='font-main text-[3.5vw] tracking-[calc(0.1*3.5vw)] text-right w-full -ml-[4rem]'>'LINKEDIN'</a>
                        </li>






                    </ul>
                </div>
            </div>

        </div>)
}