"use client";

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

function GetStartedButton() {
  return (
    <Button className="font-semibold text-md bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] hover:from-[#468BFF] hover:to-[#446DFF] transition-all">
      Get Started
    </Button>
  );
}

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
        <GetStartedButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "w-full bg-background flex items-center z-10 md:px-14  sticky top-0 px-5 shadow-sm",
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
            className="w-24 h-24"
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
              <GetStartedButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
