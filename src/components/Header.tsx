import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

type Page = 'home' | 'shop' | 'cart';

export function Header({ activePage }: { activePage: Page }) {
    const { cartTotal } = useContext(CartContext);

    useEffect((): void => {
        const activeTab = document.getElementById(activePage);
        activeTab?.classList.add('underline');
    }, [activePage]);

    const totalCost = (cartTotal / 10).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    return (
        <header className="top-0 z-10 flex flex-col w-full py-4 bg-slate-50 sm:sticky h-36">
            <Link to="/" className="self-center mb-4 h-2/3">
                <img src="./logo.png" alt="Shtor logo" className="max-h-16"></img>
            </Link>
            <nav className="flex items-center py-5 uppercase transition-all bg-cyan-950 md:gap-24 justify-evenly md:justify-center h-1/3 decoration-slate-50 text-slate-50">
                <Link
                    to="/"
                    id="home"
                    className="transition-all cursor-pointer hover:text-soft hover:decoration-soft underline-offset-[6px]"
                >
                    Home
                </Link>
                <Link
                    to="/shop"
                    id="shop"
                    className="transition-all cursor-pointer hover:text-soft hover:decoration-soft underline-offset-[6px]"
                >
                    Shop
                </Link>
                <Link
                    to="/cart"
                    id="cart"
                    className="transition-all cursor-pointer hover:text-soft hover:decoration-soft underline-offset-[6px]"
                >
                    {cartTotal ? `Cart - ${totalCost}` : 'Cart'}
                </Link>
            </nav>
        </header>
    );
}
