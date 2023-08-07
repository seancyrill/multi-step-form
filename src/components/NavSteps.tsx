import { useFormContext } from "../context/FormContext";

type NavStepsProps = {
  label: string;
  number: number;
  index: number;
};

export default function NavSteps({ label, number, index }: NavStepsProps) {
  const { stepIndex, setStepIndex } = useFormContext();

  return (
    <button
      disabled={stepIndex === 0}
      className="flex cursor-pointer items-center justify-center gap-4"
      onClick={(e) => {
        e.preventDefault();
        if (stepIndex) {
          setStepIndex(index);
        }
      }}
    >
      <div
        className={`grid h-10 w-10 place-content-center rounded-full border-[1px] border-white font-medium hover:bg-Pastel-blue ${
          stepIndex === index
            ? "bg-Light-blue text-Marine-blue"
            : "bg-transparent text-white"
        } ${stepIndex === 0 ? "cursor-not-allowed opacity-30" : ""}`}
      >
        {number}
      </div>
      <div className="hidden flex-col items-start landscape:md:flex ">
        <h2 className="text-sm text-Cool-gray">STEP {number}</h2>
        <p className="font-bold tracking-wider">{label.toUpperCase()}</p>
      </div>
    </button>
  );
}
