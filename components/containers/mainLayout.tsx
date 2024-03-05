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
    <div className={cn("flex flex-col p-10 min-h-[80vh]", className)}>
      {children}
    </div>
  );
}
