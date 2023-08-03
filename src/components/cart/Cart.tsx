import { CartContext } from '../../App';
import { getPriceAsCurrencyString } from '../../util';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ScrollToTopButton } from '../shop/ScrollToTopButton';
import { CartItem } from './CartItem';
import { MouseEvent, useContext } from 'react';

export function Cart({ isScrolled }: { isScrolled: boolean }) {
    const { cart, cartTotal } = useContext(CartContext);

    return (
        <>
            <Header activePage="cart" />
            <main className="flex flex-col items-center flex-1">
                <button
                    className="p-1 mt-4 text-white uppercase w-52 bg-medium"
                    onMouseOver={showFakeText}
                    onMouseOut={revertBtnText}
                >
                    Fake checkout
                </button>
                <table className="mx-auto my-8 max-w-[95vw]">
                    <thead>
                        {cartTotal ? (
                            <tr className="hidden sm:table-row">
                                <th>Items</th>
                                <th>Order Value</th>
                            </tr>
                        ) : null}
                    </thead>
                    <tbody>
                        {[...cart.values()].map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            {cartTotal ? (
                                <td className="pt-8 text-right" colSpan={3}>
                                    <b>Total (VAT + free shipping inc.)</b>
                                    <br />
                                    {getPriceAsCurrencyString(cartTotal)}
                                </td>
                            ) : (
                                <td className="text-center" colSpan={2}>
                                    Your cart is empty!
                                </td>
                            )}
                        </tr>
                    </tfoot>
                </table>
            </main>
            {isScrolled && <ScrollToTopButton />}
            <Footer />
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
