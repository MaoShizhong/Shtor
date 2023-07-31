import { CartContext } from '../../App';
import { getPriceAsCurrencyString } from '../../util';
import { Header } from '../Header';
import { CartItem } from './CartItem';
import { MouseEvent, useContext } from 'react';

export function Cart() {
    const { cart, cartTotal } = useContext(CartContext);

    return (
        <>
            <Header activePage="cart" />
            <button
                className="p-1 mt-4 text-white uppercase w-52 bg-medium"
                onMouseOver={showFakeText}
                onMouseOut={revertBtnText}
            >
                Fake checkout
            </button>
            <table className="mx-auto my-8">
                <thead>
                    <tr className="hidden sm:visible">
                        <th>Items</th>
                        <th>Order Value</th>
                    </tr>
                </thead>
                <tbody>
                    {[...cart.values()].map((item, i) => (
                        <tr key={i} className="flex sm:table-row border-y border-soft">
                            <CartItem item={item} />
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {cartTotal ? (
                            <td className="pt-8 text-right" colSpan={3}>
                                <b>Total (VAT + free shipping inc.) : </b>{' '}
                                {getPriceAsCurrencyString(cartTotal)}
                            </td>
                        ) : (
                            <td>Basket is empty!</td>
                        )}
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

function showFakeText(e: MouseEvent): void {
    const btn = e.target as HTMLButtonElement;
    btn.textContent = 'This does nothing';
}

function revertBtnText(e: MouseEvent): void {
    const btn = e.target as HTMLButtonElement;
    btn.textContent = 'Fake checkout';
}
