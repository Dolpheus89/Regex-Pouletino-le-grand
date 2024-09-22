import { useRef, useEffect } from "react"
import { storyText } from "../data/story";

export default function Story({ regex }) {

    const storyRef = useRef(null);

    const highlightText = (text, regexInput) => {
        if (!regexInput) return text;

        const regexMatch = regexInput.match(/^\/(.+)\/([gimu]*)$/);
        if (!regexMatch) return text;

        let regex;
        try {
            regex = new RegExp(regexMatch[1], regexMatch[2]);
        } catch (error) {
            console.error("Regex error:", error);
            return text;
        }

        return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    };

    useEffect(() => {
        const storyHTML = highlightText(storyText, regex);
        if (storyRef.current) {
            const paragraphs = storyHTML.split('\n\n').map((para, index) => `<p key=${index}>${para}</p>`).join('');
            storyRef.current.innerHTML = paragraphs;
        }
    }, [regex]);

   
    return (
        <section id="storyContainer" className="whiteBox modelA" ref={storyRef}>
        </section>
    )

}