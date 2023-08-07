import { useFormContext } from "../context/FormContext";
import { addons } from "../../data/products.json";

export default function AddOns() {
  const { stepIndex, isMonthly, cart, setCart } = useFormContext();

  function handleCheckbox(i: number) {
    const updatedCheckedState = cart.addon.map((checkbox, checkboxIndex) =>
      checkboxIndex === i ? !checkbox : checkbox
    );

    setCart({ ...cart, addon: updatedCheckedState });
  }

  return (
    <>
      {stepIndex === 2 && (
        <fieldset className="flex w-full select-none flex-col gap-4">
          <legend className="text-2xl font-bold text-Marine-blue">
            Select your addon
          </legend>
          <h3 className="mt-2 text-Cool-gray">
            You have the option of monthly or yearly billing.
          </h3>
          <section className="relative flex flex-col gap-2 overflow-hidden">
            {addons.map((addon, i) => (
              <div
                onClick={() => handleCheckbox(i)}
                key={i}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border-[1px] p-3 duration-200  hover:border-Marine-blue ${
                  cart.addon[i]
                    ? "border-Marine-blue bg-Magnolia"
                    : "border-Light-gray bg-transparent"
                }`}
              >
                <input
                  type="checkbox"
                  className="border-10 h-8 w-8 accent-Purplish-blue"
                  checked={cart.addon[i]}
                  onChange={() => handleCheckbox(i)}
                />
                <div className="flex w-full flex-col">
                  <label className="font-medium text-Marine-blue">
                    {addon.name}
                  </label>
                  <p className={`text-xs text-Cool-gray`}>
                    {addon.description}
                  </p>
                </div>
                <div>
                  <p
                    className={`flex w-full items-center justify-between text-sm text-Purplish-blue ${
                      isMonthly ? "" : "absolute translate-x-full opacity-0"
                    } transition-all`}
                  >
                    {`+$${addon.price.monthly}/mo`}
                  </p>
                  <p
                    className={`flex w-full items-center justify-between text-sm text-Purplish-blue ${
                      isMonthly
                        ? "absolute translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    } transition-all`}
                  >{`+$${addon.price.yearly}/yr`}</p>
                </div>
              </div>
            ))}
          </section>
        </fieldset>
      )}
    </>
  );
}
