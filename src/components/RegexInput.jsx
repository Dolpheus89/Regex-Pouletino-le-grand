import { useState } from "react";
import Story from "./Story";

export default function Regexinput() {
    const [regex, setRegex] = useState("");

    return (
        <>
            <section id="regexContainer" className="whiteBox modelA">
                <input
                    type="text"
                    name="regex"
                    id="regexInput"
                    placeholder="/Regex/g..."
                    value={regex}
                    onChange={(e) => setRegex(e.target.value)}
                />
            </section>
            <Story regex={regex} />
        </>
    );
}
