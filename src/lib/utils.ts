import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNametoURLParam(params: String) {
  // Converts Doctor's name into URL route.
  // For example: Dr. Jane Smith -> dr-jane-smith
  const newParam = params.replaceAll(" ", "-").replaceAll(".", "").toLowerCase();
  return newParam;
}
