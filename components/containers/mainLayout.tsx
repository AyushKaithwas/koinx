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
        "flex flex-col md:p-10 p-5 min-h-[80vh] overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
