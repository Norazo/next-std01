import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

export function convertToPlainObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function formatNumberWithDecimal(num: number): string {
    const [integerPart, decimalPart] = num.toString().split('.');
    return decimalPart ? `${integerPart}.${decimalPart.padEnd(2, '0')}` : `${integerPart}.00`;
}