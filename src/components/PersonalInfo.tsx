import { useFormContext } from "../context/FormContext";

export default function PersonalInfo() {
  const { stepIndex, personalInfo, setPersonalInfo } = useFormContext();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, pattern } = event.target;
    const targetProp = name as keyof typeof personalInfo;

    let updatedState = {
      ...personalInfo,
      [targetProp]: { ...personalInfo[targetProp], value: value },
    };

    //checks for format
    const format = new RegExp(pattern);
    if (!format.test(value)) {
      updatedState = {
        ...updatedState,
        [targetProp]: {
          ...updatedState[targetProp],
          error: "Invalid format",
        },
      };
    } else if (updatedState[targetProp].error === "Invalid format") {
      updatedState = {
        ...updatedState,
        [name]: { ...updatedState[targetProp], error: null },
      };
    }

    //checks empty fields
    if (!value.length) {
      updatedState = {
        ...updatedState,
        [targetProp]: {
          ...updatedState[targetProp],
          error: "This field is required",
        },
      };
    } else if (updatedState[targetProp].error === "This field is required") {
      updatedState = {
        ...updatedState,
        [name]: { ...updatedState[targetProp], error: null },
      };
    }

    setPersonalInfo(updatedState);
  }

  const inputs = [
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "e.g. Stephen King",
      title: "First name and Last name",
      pattern:
        /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
      error: personalInfo.name.error,
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      error: personalInfo.email.error,
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
      pattern: /^[+]?[\d]{10,12}$/,
      title: "0-9 without spaces",
      error: personalInfo.phone.error,
    },
  ];

  return (
    <>
      {stepIndex === 0 && (
        <fieldset className="flex w-full flex-col gap-4">
          <legend className="text-2xl font-bold text-Marine-blue">
            Personal info
          </legend>
          <h3 className="mt-2 text-Cool-gray">
            Please provide your name, email address, and phone number.
          </h3>
          {inputs.map((input) => (
            <div key={input.id}>
              <span className="flex items-center justify-between">
                <label>{input.label}</label>
                <p className="text-xs font-bold text-Strawberry-red">
                  {input.error}
                </p>
              </span>
              <input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                pattern={input.pattern?.source}
                title={input.title}
                required
                value={
                  personalInfo[input.name as keyof typeof personalInfo].value
                }
                onChange={handleInputChange}
                className={`block w-full rounded-md border-[1px] px-4 py-3 focus:outline-none focus:ring-1 ${
                  personalInfo[input.name as keyof typeof personalInfo].error
                    ? "border-Strawberry-red text-Strawberry-red focus:ring-Strawberry-red"
                    : "border-Light-gray text-Marine-blue focus:ring-Marine-blue"
                }`}
              />
            </div>
          ))}
          {/* 
          <div>
            <span className="flex items-center justify-between">
              <label htmlFor="email">Email Address</label>
              <p className="text-xs font-bold text-Strawberry-red">
                {personalInfo.email.error}
              </p>
            </span>
            <input
              required
              name="email"
              value={personalInfo.email.value}
              onChange={handleInputChange}
              className={`block w-full rounded-md border-[1px] px-4 py-3 focus:outline-none focus:ring-2 ${
                personalInfo.email.error
                  ? "border-Strawberry-red focus:ring-Strawberry-red"
                  : "border-Light-gray"
              }`}
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <span className="flex items-center justify-between">
              <label htmlFor="phone">Phone Number</label>
              <p className="text-xs font-bold text-Strawberry-red">
                {personalInfo.phone.error}
              </p>
            </span>
            <input
              required
              name="phone"
              value={personalInfo.phone.value}
              onChange={handleInputChange}
              className={`block w-full rounded-md border-[1px] px-4 py-3 focus:outline-none focus:ring-2 ${
                personalInfo.phone.error
                  ? "border-Strawberry-red focus:ring-Strawberry-red"
                  : "border-Light-gray"
              }`}
              id="phone"
              type="text"
              placeholder="e.g. +1 234 567 890"
            />
          </div> */}
        </fieldset>
      )}
    </>
  );
}
