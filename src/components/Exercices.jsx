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
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={step}
        custom={direction}
        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <section id="exercicesContainer">
          {step > 0 && (
            <svg
              onClick={handlePrevious}
              className="arrows"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}
          <article id="pictures"></article>
          <article id="order">
            <h2>{exercices[step].titre}</h2>
            <p>{exercices[step].consigne}</p>
            <p>{exercices[step].result}</p>
            <p>
              <i>PS : Aide toi du lexique à la racine du projet</i>
            </p>
          </article>
          {step < exercices.length - 1 && (
            <svg
              onClick={handleNext}
              className="arrows"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
