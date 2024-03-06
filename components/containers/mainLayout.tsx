import React from "react";
import { cn } from "@/lib/utils";

export function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:py-8 md:px-16 p-5 min-h-[80vh] overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
