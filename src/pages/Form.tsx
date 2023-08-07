import AddOns from "../components/AddOns";
import Nav from "../components/Nav";
import NextBtn from "../components/NextBtn";
import PersonalInfo from "../components/PersonalInfo";
import Plans from "../components/Plans";
import Summary from "../components/Summary";
import Thankyou from "../components/Thankyou";
import { useFormContext } from "../context/FormContext";

export type OrientationType = "landscape" | "portrait";

export default function Form() {
  const { setStepIndex } = useFormContext();

  function handleOrientation(orientation: OrientationType) {
    switch (orientation) {
      case "portrait":
        if (orientation === "portrait")
          return "portrait:absolute landscape:hidden";
        break;
      case "landscape":
        if (orientation === "landscape")
          return "landscape:flex portrait:hidden";
        break;

      default:
        break;
    }
  }

  function onSubmit() {
    setStepIndex((prev) => (prev === 3 ? prev : prev + 1));
  }

  return (
    <main className="relative max-h-screen w-full max-w-5xl rounded-md bg-Magnolia font-body shadow-2xl portrait:h-full portrait:max-h-[950px] portrait:max-w-md portrait:px-4 portrait:pt-24">
      <Nav orientation="portrait" handleOrientation={handleOrientation} />
      <form
        id="form"
        className="relative flex rounded-xl bg-white shadow-2xl portrait:min-h-[300px]"
        onSubmit={(e) => (e.preventDefault(), onSubmit())}
      >
        <Nav orientation="landscape" handleOrientation={handleOrientation} />
        <div className="px flex w-full flex-col gap-4 px-4 py-6 landscape:lg:py-20 landscape:lg:pr-8">
          <PersonalInfo />
          <Plans />
          <AddOns />
          <Summary />
          <Thankyou />
          <NextBtn
            orientation="landscape"
            handleOrientation={handleOrientation}
          />
        </div>
      </form>
      <NextBtn orientation="portrait" handleOrientation={handleOrientation} />
    </main>
  );
}
