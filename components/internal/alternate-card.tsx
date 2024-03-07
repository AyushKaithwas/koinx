"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function AlternateCard({
  title,
  image,
  imageAlt,
  bgGradient,
  animatedGradient,
}: {
  title: string;
  image: string;
  imageAlt: string;
  bgGradient: React.CSSProperties;
  animatedGradient: React.CSSProperties;
}) {
  //   const [isHovered, setIsHovered] = useState(false);

  //   const currentGradient = !isHovered ? animatedGradient : bgGradient;
  return (
    <div
      className={cn("flex flex-col rounded-xl bg-green-200 p-4 max-w-[25rem]")}
      style={animatedGradient}
    >
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={400}
          className=" w-32"
        />
        <div className="flex flex-col gap-4 w-[40%]">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <Button
            variant={"secondary"}
            className="gap-3 font-semibold hover:bg-white/80"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            Check Now
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
