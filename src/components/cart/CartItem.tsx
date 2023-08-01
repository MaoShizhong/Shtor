import { ChangeEvent, useContext } from 'react';
import { CartContext, CartProduct } from '../../App';
import { getPriceAsCurrencyString } from '../../util';

type CartItemProps = {
    item: CartProduct;
};

const quantities = [...Array(11).keys()];

export function CartItem({ item }: CartItemProps) {
    const orderValue = getPriceAsCurrencyString(item.price * item.quantity);

    return (
        <tr className="border-y border-soft">
            <td className="py-2 text-left">
                <div className="flex items-start gap-4">
                    <img className="max-w-[4rem] border border-soft" src={item.images[0]}></img>
                    <div className="w-[min(300px,50vw)]">
                        <h1 className="font-bold">{item.title}</h1>
                        <Quantities item={item} />
                    </div>
                </div>
            </td>
            <td className="self-center text-right">{orderValue}</td>
        </tr>
    );
}

function Quantities({ item }: CartItemProps) {
    const unitValue = getPriceAsCurrencyString(item.price);

    const { addToCart, removeFromCart } = useContext(CartContext);

    function handleChange(e: ChangeEvent): void {
        const dropdown = e.target as HTMLSelectElement;
        const newQuantity: number = +dropdown.value;

        if (newQuantity > item.quantity) {
            addToCart(item, newQuantity - item.quantity);
        } else {
            removeFromCart(item, item.quantity - newQuantity);
        }
    }

    return (
        <div className="flex items-center gap-2">
            <select value={item.quantity} onChange={handleChange}>
                {quantities.map((quantity, i) => (
                    <option key={i} value={quantity}>
                        {quantity}
                    </option>
                ))}
            </select>
            <p>x {unitValue}</p>
        </div>
    );
}
