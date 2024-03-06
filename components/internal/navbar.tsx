"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Crypto Taxes",
    href: "#",
  },
  {
    name: "Free Tools",
    href: "#",
  },
  {
    name: "Resource Center",
    href: "#",
  },
];

const buttonGradientBg = {
  background: "linear-gradient(to right, #2870EA, #1B4AEF)", // Example gradient
};

function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden flex" asChild>
        <Button className="bg-transparent" variant="default" size="icon">
          <Image
            src={"/images/icons/hamburger-icon.svg"}
            alt="hamburger menu"
            width={20}
            height={20}
            className="w-6 h-6 "
          />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        {navigation.map((item) => (
          <Link
            key={item.name}
            className="w-full"
            href={item.href}
            // legacyBehavior
            // passHref
          >
            <DropdownMenuItem className="font-semibold">
              {item.name}
            </DropdownMenuItem>
          </Link>
        ))}
        <Button className="font-semibold py-1 m-2" style={buttonGradientBg}>
          Get Started
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "w-full bg-background flex items-center z-10 md:px-14 md:py-2 sticky top-0 px-5 shadow-sm",
        className
      )}
    >
      <div className=" w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/images/icons/KoinX-logo.svg"}
            alt="hamburger menu"
            width={20}
            height={20}
            className="w-20 h-20 "
          />
        </Link>

        <div>
          <HamburgerMenu />
          <ul className="md:flex hidden items-center gap-5">
            {navigation.map((item) => {
              return (
                <li
                  key={item.name}
                  className="inline-block mx-4 font-semibold "
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
            <li>
              <Button
                className="font-semibold text-md"
                style={buttonGradientBg}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
