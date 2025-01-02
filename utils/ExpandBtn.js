
import Image from "next/image"



export default function ExpandBtn(props) {


    function handleClick() {
        props.setIsDown(!props.isDown);
    }

    return (
        <button className={`${!props.isDown && 'rotate'}`} id="expand-btn" onClick={handleClick}><Image src={'/icons/down-icon.svg'} width={30} height={30} alt={'down icon'}></Image></button>
    );
}