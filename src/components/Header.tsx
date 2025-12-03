import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="ITV Benin Logo" className="h-12 md:h-14" />
        <ThemeToggle />
      </div>
    </header>
  );
};
