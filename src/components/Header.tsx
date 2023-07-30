import { Link } from 'react-router-dom';

// type Page = 'Home' | 'Shop' | 'Cart';
// type HeaderProps = { activePath: Page };

export function Header() {
    return (
        <header className="w-full h-24">
            <Link to="/" className="h-2/3">
                <img src="./logo.png" alt="Stor logo" className="mx-auto my-3 max-h-14"></img>
            </Link>
            <nav className="flex items-center justify-center gap-16 uppercase h-1/3">
                <Link to="/" className="transition-colors cursor-pointer hover:text-slate-800">
                    Home
                </Link>
                <Link to="/shop" className="transition-colors cursor-pointer hover:text-slate-800">
                    Shop
                </Link>
                <Link to="/cart" className="transition-colors cursor-pointer hover:text-slate-800">
                    Cart
                </Link>
            </nav>
        </header>
    );
}
