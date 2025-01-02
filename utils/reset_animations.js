
export default function reset() {
    return false && (
        <>
            <div className="animate-fadeout min-w-4 min-h-4 bg-red-50"> fade </div>
            <div className="animate-spin w-4 h-4  bg-slate-50" > spin </div>
            <div className="rotate-180 w-4 h-4  bg-slate-50" > rotate </div>
            <div className="hide w-4 h-4  bg-slate-50" > hide </div>
            <div className="expand w-4 h-4  bg-slate-50" >expand</div>



            <div className={`flex-wrapper h-screen w-screen z-50 fixed inset-0 bg-gray-200 bg-opacity-85 animate-fadeouthide`}>
                <div className={`flex-wrapper animate-spin text-4xl text-center hide`}>|</div>
                <div className={`max-w-0 overflow-hidden duration-[1300ms] ease-linear tracking-[1rem] text-xl expand`} id='welcome-text'></div>
            </div>
        </>
    );
}