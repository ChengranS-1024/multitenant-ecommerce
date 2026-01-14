import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSide = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="left"
        className="p-0 transition-none"
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center w-full text-base text-left font-medium p-4 hover:bg-black hover:text-amber-600"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              className="flex items-center w-full text-base text-left font-medium p-4 hover:bg-black hover:text-amber-600"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center w-full text-base text-left font-medium p-4 hover:bg-black hover:text-amber-600"
            >
              Sign Up
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
