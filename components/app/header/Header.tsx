import Logo from "../Logo";
import NavApp from "./Nav";

export default function HeaderApp(): JSX.Element {
  // Current Path

  return (
    <header className="flex items-center justify-between py-10 md:py-16 w-full container lg:px-24">
      <Logo />
      <NavApp />
    </header>
  );
}
