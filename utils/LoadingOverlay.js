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

    return isShowing.all && (
        <div className={`${!isShowing.screen && 'fade '}`} id="loading-bg">
            {isShowing.spinner && (<div id="loading-spinner">|</div>)}
            <div className={`${isShowing.text && 'expand'}`} id='loading-text'>{props.text}</div>
        </div>
    )
}

export default LoadingOverlay;