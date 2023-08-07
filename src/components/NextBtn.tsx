import { useFormContext } from "../context/FormContext";
import { OrientationType } from "../pages/Form";

type NextBtnProps = {
  orientation: OrientationType;
  handleOrientation(
    orientation: OrientationType
  ):
    | "portrait:absolute landscape:hidden"
    | "landscape:flex portrait:hidden"
    | undefined;
};

export default function NextBtn({
  orientation,
  handleOrientation,
}: NextBtnProps) {
  const { stepIndex, setStepIndex } = useFormContext();

  return (
    <>
      {stepIndex !== 4 && (
        <div
          className={`bottom-0 left-0 flex w-full items-center justify-between rounded-b-md bg-white portrait:p-3 ${handleOrientation(
            orientation
          )} `}
        >
          {stepIndex !== 0 && (
            <button
              onClick={(e) => (
                e.preventDefault(), setStepIndex((prev) => prev - 1)
              )}
              className="rounded-md px-4 py-2 font-bold text-Cool-gray"
            >
              Go Back
            </button>
          )}
          {stepIndex < 3 && (
            <button
              type="submit"
              form="form"
              className="ml-auto rounded-md bg-Marine-blue px-4 py-2 text-white"
            >
              Next Step
            </button>
          )}
          {stepIndex === 3 && (
            <button
              onClick={() => setStepIndex(4)}
              className="ml-auto rounded-md bg-Purplish-blue px-4 py-2 text-white"
            >
              Confirm
            </button>
          )}
        </div>
      )}
    </>
  );
}
