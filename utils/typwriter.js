import delay from "./delay";

export default async function typewriter(ref, text, typeDelay) {
    await delay(200);
    if (ref.current) {
        ref.current.innerHTML = ""
        for (let i = 0; i < text.length; i++) {
            ref.current.insertAdjacentHTML("beforeend", text.charAt(i));
            await delay(typeDelay);
        }
    }
}
