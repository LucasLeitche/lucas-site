import Logo from "../Logo";
import NavApp from "./Nav";

export default function HeaderApp(): JSX.Element {
  // Current Path

  return (
    <header className="flex items-center justify-between py-10 md:py-16 w-full container">
      <Logo />
      <NavApp />
    </header>
  );
}
