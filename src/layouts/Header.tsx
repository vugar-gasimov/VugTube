import logo from "../assets/Vlogo.png";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";

export function Header() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" alt="Logo" />
        </a>
      </div>
    </div>
  );
}
