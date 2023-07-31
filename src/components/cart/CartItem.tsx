import { CartProduct } from '../Router';
import { getPriceAsCurrencyString } from '../../util';

type CartItemProps = {
    item: CartProduct;
};

export function CartItem({ item }: CartItemProps) {
    const unitValue = getPriceAsCurrencyString(item.price);
    const orderValue = getPriceAsCurrencyString(item.price * item.quantity);

    return (
        <>
            <td className="py-2 text-left">
                <div className="flex items-start gap-4">
                    <img className="max-w-[4rem] border border-soft" src={item.images[0]}></img>
                    <div className="w-[min(300px,50vw)]">
                        <h1 className="font-bold">{item.title}</h1>
                        <p>
                            Qty: {item.quantity} ({unitValue} per)
                        </p>
                    </div>
                </div>
            </td>
            <td className="relative flex flex-col justify-around sm:table-cell">
                {orderValue}
                <button
                    className="sm:absolute text-xl transition-all duration-75 sm:-translate-y-0.5 sm:-right-12 hover:text-slate-800 hover:scale-105"
                    aria-label="Remove item"
                >
                    X
                </button>
            </td>
        </>
    );
}
