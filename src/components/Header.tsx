import { useEffect } from 'react';
import { Link } from 'react-router-dom';

type Page = 'home' | 'shop' | 'cart';
type HeaderProps = { activePage: Page };

export function Header({ activePage }: HeaderProps) {
    useEffect((): void => {
        const activeTab = document.getElementById(activePage);
        activeTab?.classList.add('underline');
    }, [activePage]);

    return (
        <header className="top-0 w-screen py-4 bg-white sm:sticky h-max">
            <Link to="/" className="h-2/3">
                <img src="./logo.png" alt="Stor logo" className="mx-auto max-h-14"></img>
            </Link>
            <nav className="flex items-center py-4 mx-auto uppercase transition-all border-b md:max-w-2xl md:gap-24 justify-evenly md:justify-center border-soft h-1/3 decoration-medium">
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
                    Cart
                </Link>
            </nav>
        </header>
    );
}
