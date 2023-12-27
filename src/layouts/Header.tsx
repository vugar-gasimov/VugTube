import { useState } from "react";
import logo from "../assets/Vlogo.png";
import { Button } from "../components/Button";
import {
  AlignJustify,
  ArrowLeft,
  MonitorUp,
  Bell,
  UserRound,
  Mic,
  Search,
} from "lucide-react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function Header() {
  const [fullWidthSearch, setFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <HeaderFirstSection hidden={fullWidthSearch} />
      <form
        className={` gap-4 flex-grow justify-center ${
          fullWidthSearch ? "flex" : "hidden md:flex"
        } `}
      >
        {fullWidthSearch && (
          <Button
            onClick={() => setFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-green-500 outline-none "
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
          <Button type="button" size="icon" className="flex-shrink-0">
            <Mic strokeWidth={2} />
          </Button>
        </div>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          fullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          onClick={() => setFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <MonitorUp />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <UserRound />
        </Button>
      </div>
    </div>
  );
}

type HeaderFirstSectionProps = {
  hidden?: boolean;
};

export function HeaderFirstSection({
  hidden = false,
}: HeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      } `}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <AlignJustify />
      </Button>
      <a href="/" className="flex">
        <img src={logo} className="h-6" alt="Logo" />
        VugTube
      </a>
    </div>
  );
}
