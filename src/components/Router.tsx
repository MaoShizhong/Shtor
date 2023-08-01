import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shop } from './shop/Shop';
import { Cart } from './cart/Cart';
import { Home } from './home/Home';
import { useEffect, useState } from 'react';

const Router = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect((): (() => void) => {
        const toggleScrollButton = (): void => {
            const scrollAmount = document.documentElement.scrollTop;
            setIsScrolled(scrollAmount > 0);
        };
        window.addEventListener('scroll', toggleScrollButton);

        return (): void => window.removeEventListener('scroll', toggleScrollButton);
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home isScrolled={isScrolled} />,
        },
        {
            path: 'shop',
            element: <Shop isScrolled={isScrolled} />,
        },
        {
            path: 'cart',
            element: <Cart isScrolled={isScrolled} />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
