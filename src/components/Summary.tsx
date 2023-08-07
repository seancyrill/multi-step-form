import { useFormContext } from "../context/FormContext";
import { plans, addons } from "../../data/products.json";
import React, { useEffect, useState } from "react";

export default function Summary() {
  const { stepIndex, personalInfo, cart, isMonthly, setStepIndex } =
    useFormContext();
  const planSelected = plans.find((plan) => plan.id === cart.plan)!;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const planCost = isMonthly
      ? planSelected.price.monthly
      : planSelected.price.yearly;

    const addonsCost = addons
      .map((addon, i) =>
        cart.addon[i]
          ? isMonthly
            ? parseFloat(addon.price.monthly)
            : parseFloat(addon.price.yearly)
          : 0
      )
      .reduce((a, b) => a + b);
    setTotal(parseFloat(planCost) + addonsCost);
  }, [cart, isMonthly]);

  return (
    <>
      {stepIndex === 3 && (
        <section className="flex w-full flex-col gap-2">
          <h1 className="text-2xl font-bold text-Marine-blue">Finishing up</h1>
          <h3 className="text-Cool-gray">
            Double-check if everything looks OK before confirming.
          </h3>
          <article className="text-sm">
            <div>
              <p className="text-Cool-gray">Name</p>
              <p className="font-bold text-Marine-blue">
                {personalInfo.name.value}
              </p>
            </div>
            <div>
              <p className="text-Cool-gray">Email</p>
              <p className="font-bold text-Marine-blue">
                {personalInfo.email.value}
              </p>
            </div>
            <div>
              <p className="text-Cool-gray">Phone</p>
              <p className="font-bold text-Marine-blue">
                {personalInfo.phone.value}
              </p>
            </div>
          </article>

          <article className="divide-y-2 rounded-lg bg-Magnolia p-4 text-sm">
            <div className="flex items-center justify-between pb-3">
              <span>
                <p className="font-bold text-Marine-blue">{`${
                  planSelected.name
                }(${isMonthly ? "Monthly" : "Yearly"})`}</p>
                <button
                  onClick={() => setStepIndex(1)}
                  className="text-Cool-gray underline hover:text-Purplish-blue"
                >
                  Change
                </button>
              </span>
              <p className="font-bold text-Marine-blue">{`$${
                isMonthly
                  ? planSelected.price.monthly + "/mo"
                  : planSelected.price.yearly + "/yr"
              }`}</p>
            </div>

            <div className="grid gap-2 pt-3 ">
              {addons.map((addon, i) => (
                <React.Fragment key={i}>
                  {cart.addon[i] && (
                    <span className="flex items-center justify-between">
                      <p className="text-Cool-gray">{addon.name}</p>
                      <p className="text-Marine-blue">{`+$${
                        isMonthly
                          ? addon.price.monthly + "/mo"
                          : addon.price.yearly + "/yr"
                      }`}</p>
                    </span>
                  )}
                </React.Fragment>
              ))}

              {!cart.addon.some((addon) => addon) && (
                <div>
                  <p className="text-Cool-gray">No add-ons availed.</p>
                </div>
              )}
              {cart.addon.filter((addon) => addon).length <= 2 && (
                <button
                  onClick={() => setStepIndex(2)}
                  className="text-Cool-gray underline hover:text-Purplish-blue"
                >
                  Check {`${cart.addon.some((addon) => addon) ? "more " : ""}`}
                  add-ons
                </button>
              )}
            </div>
          </article>
          <article className="flex items-center justify-between p-2">
            <p className="text-sm text-Cool-gray">
              Total(per {`${isMonthly ? "month" : "year"}`})
            </p>
            <p className="font-bold text-Purplish-blue">{`$${total}/${
              isMonthly ? "mo" : "yr"
            }`}</p>
          </article>
        </section>
      )}
    </>
  );
}
