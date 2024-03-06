"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const menu = [
  { name: "Overview" },
  { name: "Fundamentals" },
  { name: "News Insights" },
  { name: "Sentiments" },
  { name: "Team" },
  { name: "Technicals" },
  { name: "Tokenomics" },
];

export function Menu() {
  const [activeItem, setActiveItem] = useState<string>("Overview");
  return (
    <div className="flex items-center gap-[3rem] border-b border-b-[#D3E0E6] hover:cursor-pointer">
      {menu.map((item) => {
        const isActive = activeItem == item.name;
        return (
          <span
            key={item.name}
            style={{
              borderBottom: isActive
                ? "3px solid #0052FE"
                : "3px solid transparent",
            }}
            className={cn(
              "transition-all duration-100 ease-in-out pb-3",
              isActive ? "font-semibold text-[#0141CF]" : "font-medium"
            )}
            onClick={() => setActiveItem(item.name)}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
}
