import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const generateRandomString = function(){
  return Math.random().toString(20).substr(2, 10)
  }