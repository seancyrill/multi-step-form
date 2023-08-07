import { useFormContext } from "../context/FormContext";
import { plans } from "../../data/products.json";

export default function Plans() {
  const { stepIndex, isMonthly, setIsMonthly, cart, setCart } =
    useFormContext();

  return (
    <>
      {stepIndex === 1 && (
        <fieldset className="flex w-full flex-col gap-4">
          <legend className="text-2xl font-bold text-Marine-blue">
            Select your plan
          </legend>
          <h3 className="mt-2 text-Cool-gray">
            You have the option of monthly or yearly billing.
          </h3>
          <section className="relative flex flex-col gap-2 overflow-hidden">
            {plans.map((plan, i) => (
              <button
                onClick={(e) => (
                  e.preventDefault(), setCart({ ...cart, plan: plan.id })
                )}
                key={i}
                className={`flex w-full items-center gap-4 rounded-xl border-[1px] p-3 hover:border-Marine-blue ${
                  cart.plan === plan.id
                    ? "border-Marine-blue bg-Magnolia"
                    : "border-Light-gray bg-transparent"
                } duration-200`}
              >
                <img src={plan.image} alt="" />
                <div className="relative flex w-full flex-col items-start">
                  <h2 className="font-medium text-Marine-blue">{plan.name}</h2>
                  <div className="flex w-full">
                    <p
                      className={`flex w-full items-center justify-between text-sm text-Cool-gray ${
                        isMonthly ? "" : "translate-x-full opacity-0"
                      } transition-all`}
                    >
                      {`$${plan.price.monthly}/mo`}
                      <span className={`text-xs text-Marine-blue`}>
                        {plan.promo.monthly}
                      </span>
                    </p>
                    <p
                      className={`absolute flex w-full items-center justify-between text-sm text-Cool-gray ${
                        isMonthly
                          ? "translate-x-full opacity-0"
                          : "translate-x-0 opacity-100"
                      } transition-all`}
                    >
                      {`$${plan.price.yearly}/yr`}
                      <span
                        className={`text-xs text-Marine-blue  duration-200`}
                      >
                        {plan.promo.yearly}
                      </span>
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </section>
          <section className="flex w-full items-center justify-center gap-6 rounded-xl bg-Magnolia p-3">
            <p
              onClick={() => setIsMonthly(true)}
              className={`cursor-pointer text-sm font-medium ${
                isMonthly ? "text-Marine-blue" : "text-Cool-gray"
              } duration-200`}
            >
              Monthly
            </p>
            <button
              onClick={(e) => (
                e.preventDefault(), setIsMonthly((prev) => !prev)
              )}
              className="h-5 w-9 rounded-full bg-Marine-blue"
            >
              <div
                className={`h-5 w-5 rounded-full border-4 border-Marine-blue bg-Magnolia ${
                  isMonthly ? "translate-x-0" : "translate-x-full"
                } duration-200`}
              />
            </button>
            <p
              onClick={() => setIsMonthly(false)}
              className={`cursor-pointer text-sm font-medium text-Cool-gray ${
                !isMonthly ? "text-Marine-blue" : "text-Cool-gray"
              } duration-200`}
            >
              Yearly
            </p>
          </section>
        </fieldset>
      )}
    </>
  );
}
