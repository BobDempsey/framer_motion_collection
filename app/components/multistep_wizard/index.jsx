"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Card = ({ children }) => {
  return (
    <article className="flex flex-col space-y-10 rounded-2xl bg-white px-8 py-6">
      {children}
    </article>
  );
};

const BackBtn = ({ setStep, step }) => {
  return (
    <motion.button
      onClick={() => setStep(step < 2 ? step : step - 1)}
      animate={{ opacity: step === 1 ? 0.75 : 1 }}
      className={
        (step === 1 ? "" : "hover:text-slate-800 ") +
        "rounded-full px-4 py-1 text-slate-600 transition-colors focus-visible:text-blue-600 focus-visible:outline-blue-600 "
      }
    >
      Back
    </motion.button>
  );
};

const NextBtn = ({ setStep, step }) => {
  return (
    <motion.button
      animate={{
        opacity: step > 4 ? 0.6 : 1,
      }}
      onClick={() => setStep(step > 4 ? step : step + 1)}
      className={`${
        step > 4 ? "pointer-events-none opacity-50" : ""
      } bg flex items-center justify-center rounded-full bg-blue-500 px-3.5 py-1.5 font-medium tracking-tight text-white transition-colors hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-700`}
    >
      Continue
    </motion.button>
  );
};

const Actions = ({ setStep, step }) => {
  return (
    <footer className="flex justify-between pb-2 pt-5">
      <BackBtn setStep={setStep} step={step} />
      <NextBtn setStep={setStep} step={step} />
    </footer>
  );
};

const SkeletonDivs = () => {
  return (
    <section>
      <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-5/6 rounded bg-slate-100" />
        <div className="h-4 rounded bg-slate-100" />
        <div className="h-4 w-4/6 rounded bg-slate-100" />
      </div>
    </section>
  );
};

const CheckIcon = (props) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

const Step = ({ step, currentStep }) => {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";
  return (
    <motion.div animate={status} className="relative">
      {/* outer blur on complete */}
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{ duration: 0.6, delay: 0, type: "tween", ease: "circOut" }}
        className="absolute inset-0 rounded-full bg-blue-200"
      ></motion.div>

      {/* check icon or step number */}
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "var(--white)",
            borderColor: "var(--slate-200)",
            color: "var(--slate-400)",
          },
          active: {
            backgroundColor: "var(--white)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
          complete: {
            backgroundColor: "var(--blue-500)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
        }}
        transition={{ duration: 0.2 }}
        className={
          "relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
        }
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Steps = ({ currentStep }) => {
  return (
    <section className="flex justify-between rounded pt-1">
      {[1, 2, 3, 4].map((i) => {
        return <Step step={i} currentStep={currentStep} key={i} />;
      })}
    </section>
  );
};

const Header = () => {
  const [info, showInfo] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between text-lg font-semibold text-slate-600">
        <h4>Multi-Step Wizard</h4>
        <button
          onClick={() => showInfo(!info)}
          type="button"
          className="rounded-full p-1 text-blue-600 shadow-sm transition hover:outline hover:outline-offset-2 hover:outline-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <ChevronDownIcon
            className={`${
              info ? "rotate-180" : ""
            } h-5 w-5 transform transition`}
            aria-hidden="true"
          />
        </button>
      </div>
      {info && (
        <div className="mt-4 font-medium text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quia!
        </div>
      )}
    </header>
  );
};

const Content = () => {
  let [step, setStep] = useState(1);
  return (
    <Card>
      <Header />
      <Steps currentStep={step} />
      <SkeletonDivs />
      <Actions setStep={setStep} step={step} />
    </Card>
  );
};
export default Content;
