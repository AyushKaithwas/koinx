import { cn } from "@/lib/utils";

export function ChangeIndicator({
  change,
  className,
  showArrow = false,
}: {
  change: number;
  className?: string;
  showArrow?: boolean;
}) {
  const isPositive = change >= 0;
  const colorClass = isPositive
    ? "text-green-500 bg-green-100"
    : "text-red-500 bg-red-100";
  const arrowPath = isPositive
    ? "M4 9H11L7.5 4.5L4 9Z" // Up arrow
    : "M4 6H11L7.5 10.5L4 6Z"; // Down arrow

  return (
    <div
      className={cn(
        "flex items-center p-[0.2rem] pr-2 rounded-md",
        colorClass,
        className
      )}
    >
      {showArrow && (
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={arrowPath} fill="currentColor"></path>
        </svg>
      )}
      <span className="ml-1">{change.toFixed(2)}%</span>
    </div>
  );
}
