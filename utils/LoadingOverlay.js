'use client'
import { useState, useEffect } from "react";
import delay from "@/utils/delay";




function LoadingOverlay(props) {
    const [isShowing, setIsShowing] = useState({
        all: true,
        spinner: true,
        text: false,
        screen: true,
    });

    async function updateShowingStates() {
        await delay(1500);
        setIsShowing({ all: true, spinner: false, text: true, screen: true });

        await delay(1500);
        setIsShowing({ all: true, spinner: false, text: false, screen: true });

        await delay(900);
        setIsShowing({ all: true, spinner: false, text: false, screen: false });

        await delay(1000);
        setIsShowing({ all: false, spinner: false, text: false, screen: false });
    }

    useEffect(() => {
        updateShowingStates();
    }, []);

    return (
        <div className={`flex-wrapper h-screen w-screen z-50 fixed inset-0 bg-gray-200 bg-opacity-85 ${!isShowing.screen && 'animate-fadeout'} ${!isShowing.all && 'hide'}`}>
            <div className={`flex-wrapper animate-spin text-4xl text-center ${!isShowing.spinner && 'hide'}`}>|</div>
            <div className={`max-w-0 overflow-hidden duration-[1300ms] ease-linear tracking-[1rem] text-xl ${isShowing.text && 'expand'}`} id='welcome-text'>{props.text}</div>
        </div>
    )
}

export default LoadingOverlay;