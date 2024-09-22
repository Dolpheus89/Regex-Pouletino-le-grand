import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exercices } from "../data/exercices";

export default function Exercices() {

    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setStep(step + 1);
      };
    
      const handlePrevious = () => {
        setDirection(-1);
        setStep(step - 1);
      };

    return (
        <section id="exercicesContainer">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                    key={step}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <article id="pictures" ></article>
                    <article id="order">
                            <h2>{exercices[step].titre}</h2>
                            <p>{exercices[step].consigne}</p>
                            <p>{exercices[step].result}</p>
                            <p><i>PS : Aide toi du lexique à la racine du projet</i></p>
                    </article>
                    <div id="stepSelection">
                        {step > 0 && <button onClick={handlePrevious}>Precedent</button>}
                        {step < exercices.length - 1 && (
                            <button onClick={handleNext}>Suivant</button>
                        )}
                    </div>
                </motion.div>
           </AnimatePresence>
        </section>
    )
}