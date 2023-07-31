export function getPriceAsCurrencyString(price: number): string {
    price /= 10;
    return price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}
