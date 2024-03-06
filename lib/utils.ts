import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a currency string based on the provided locale and currency.
 *
 * @param {number} value - The number to format as currency.
 * @param {string} locale - The locale to use for formatting.
 * @param {string} currency - The currency code to use for formatting.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(
  value: number,
  locale: string,
  currency: string
): string {
  return value.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}

/**
 * Calculates the time difference between the given date and the current date.
 *
 * @param {string} dateString - The date string in the format "MMM DD, YYYY".
 * @returns {string} The time difference in a readable format (e.g., "about 1 year").
 */
export function calculateTimeDifference(dateString: string): string {
  const date = new Date(dateString);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - date.getTime();

  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (years > 0) {
    return `about ${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    return `about ${months} month${months > 1 ? "s" : ""}`;
  } else {
    return `about ${days} day${days > 1 ? "s" : ""}`;
  }
}
