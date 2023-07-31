import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type Page = 'home' | 'shop' | 'cart';
type HeaderProps = { activePage: Page; cartTotal: number };

export function Header({ activePage, cartTotal }: HeaderProps) {
    useEffect((): void => {
        const activeTab = document.getElementById(activePage);
        activeTab?.classList.add('underline');
    }, [activePage]);

    const totalCost = (cartTotal / 10).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    return (
        <header className="top-0 z-10 flex flex-col w-full py-4 bg-white border-b sm:sticky h-36 border-soft">
            <Link to="/" className="self-center h-2/3">
                <img src="./logo.png" alt="Shtor logo" className="max-h-16"></img>
            </Link>
            <nav className="flex items-center pt-4 pb-1 uppercase transition-all md:gap-24 justify-evenly md:justify-center h-1/3 decoration-medium">
                <Link
                    to="/"
                    id="home"
                    className="transition-all cursor-pointer hover:text-slate-800 underline-offset-8"
                >
                    Home
                </Link>
                <Link
                    to="/shop"
                    id="shop"
                    className="transition-all cursor-pointer hover:text-slate-800 underline-offset-8"
                >
                    Shop
                </Link>
                <Link
                    to="/cart"
                    id="cart"
                    className="transition-all cursor-pointer hover:text-slate-800 underline-offset-8 "
                >
                    {cartTotal ? `Cart - ${totalCost}` : 'Cart'}
                </Link>
            </nav>
        </header>
    );
}
