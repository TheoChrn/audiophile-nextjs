import { type ClassValue, clsx } from "clsx"
import { ImageLoaderProps } from "next/image";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const navigations = [
  ["Home", "/"],
  ["Headphones", "/headphones"],
  ["Speakers", "/speakers"],
  ["Earphones", "/earphones"],
];

export const showToast = (type: 'success' | 'error', message: string | null) => {
  toast[type](message)
}



export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};
