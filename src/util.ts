export const MAX_QUANTITY_PER_ITEM = 10;

export function getPriceAsCurrencyString(price: number): string {
    price /= 10;
    return price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}
