export const MAX_QUANTITY_PER_ITEM = 10;

export function getPriceAsCurrencyString(price: number): string {
    price /= 10;
    return price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}

export function toTitleCase(str: string): string {
    return str
        .split(/\s|-|_/)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
