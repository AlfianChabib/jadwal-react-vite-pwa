import { icons, Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import HeaderMenu from "./atoms/HeaderMenu";
import { useRef } from "react";
import { headerLinks } from "@/constants/links";
import Icon from "./atoms/icon";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const trigger = useRef<HTMLButtonElement>(null);

  function closePopover() {
    trigger.current?.click();
  }

  return (
    <header className="flex w-full p-2 border justify-between items-center border-white/50 rounded-sm bg-white/25 backdrop-blur-xl">
      <Link to="/" className="flex items-center px-2">
        <h1 className="text-xl text-white font-medium select-none">Jadwal.</h1>
      </Link>
      <Popover>
        <PopoverTrigger ref={trigger} asChild>
          <Button size="icon" variant="ghost" aria-label="menu">
            <Menu className="text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          className="flex flex-col items-center p-2 mt-4 gap-2"
          onClick={closePopover}
        >
          {headerLinks.map((item, index) => {
            const icon = item.icon as keyof typeof icons;
            return (
              <div key={index} className="w-full">
                <HeaderMenu label={item.label} to={item.to}>
                  <Icon name={icon} size={20} />
                </HeaderMenu>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
    </header>
  );
}
