import { ReactNode, createContext, useContext, useState } from "react";

type PersonalInfoType = {
  name: { value: string; error: string | null };
  email: { value: string; error: string | null };
  phone: { value: string; error: string | null };
};

type CartType = {
  plan: string;
  addon: boolean[];
};

type FormContextType = {
  stepIndex: number;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  personalInfo: PersonalInfoType;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoType>>;
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};

const FormContext = createContext({} as FormContextType);

export function useFormContext() {
  return useContext(FormContext);
}

type FormContextProviderType = {
  children: ReactNode;
};

export function FormContextProvider({ children }: FormContextProviderType) {
  const PersonalInfoInit = {
    name: { value: "", error: null },
    email: { value: "", error: null },
    phone: { value: "", error: null },
  };

  const cartInit = {
    plan: "p1",
    addon: [false, false, false],
  };

  const [stepIndex, setStepIndex] = useState(0);
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoType>(PersonalInfoInit);
  const [isMonthly, setIsMonthly] = useState(true);
  const [cart, setCart] = useState<CartType>(cartInit);

  return (
    <FormContext.Provider
      value={{
        stepIndex,
        setStepIndex,
        personalInfo,
        setPersonalInfo,
        isMonthly,
        setIsMonthly,
        cart,
        setCart,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;
