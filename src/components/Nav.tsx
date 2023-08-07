import { OrientationType } from "../pages/Form";
import NavSteps from "./NavSteps";

type NavProps = {
  orientation: OrientationType;
  handleOrientation(
    orientation: OrientationType
  ):
    | "portrait:absolute landscape:hidden"
    | "landscape:flex portrait:hidden"
    | undefined;
};

export default function Nav({ orientation, handleOrientation }: NavProps) {
  const navSteps = [
    { label: "Your info", number: 1 },
    { label: "Select plan", number: 2 },
    { label: "Add-ons", number: 3 },
    { label: "Summary", number: 4 },
  ];

  return (
    <nav
      className={`left-0 top-0 max-h-screen w-full landscape:relative landscape:m-6 landscape:max-w-[30%] ${handleOrientation(
        orientation
      )}`}
    >
      <img
        className="absolute w-full rounded-t-md object-contain landscape:hidden"
        src="\assets\images\bg-sidebar-mobile.svg"
        alt="background"
      />
      <img
        className="h-full w-full rounded-md object-cover portrait:hidden"
        src="\assets\images\bg-sidebar-desktop.svg"
        alt="background"
      />
      <div className="relative z-10 flex place-content-center gap-4 text-white portrait:py-6 landscape:absolute landscape:w-full landscape:flex-col  landscape:gap-8 landscape:p-12 landscape:md:items-start">
        {navSteps.map((step, i) => (
          <NavSteps {...step} index={i} key={i} />
        ))}
      </div>
    </nav>
  );
}
