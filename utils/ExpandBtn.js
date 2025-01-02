
import Image from "next/image"



export default function ExpandBtn(props) {


    function handleClick() {
        props.setIsDown(!props.isDown);
    }

    return (
        <button className={`flex-wrapper ${!props.isDown && 'rotate-180'} ease-linear duration-300`} onClick={handleClick}><Image src={'/icons/down-icon.svg'} width={30} height={30} alt={'down icon'}></Image></button>
    );
}