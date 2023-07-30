import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Product, Shop } from './shop/Shop';
import { Cart } from './cart/Cart';
import { Home } from './home/Home';
import { FormEvent, useEffect, useState } from 'react';

const Router = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartTotal, setCartTotal] = useState(0);

    function addToCart(e: FormEvent, product: Product, quantity: number): void {
        e.preventDefault();

        const productsToAdd: Product[] = [];

        for (let i = 0; i < quantity; i++) {
            productsToAdd.push(product);
        }

        setCart([...cart, ...productsToAdd]);
    }

    useEffect((): void => {
        const totalCost = cart.map((item): number => item.price).reduce((a, c): number => a + c, 0);
        setCartTotal(totalCost);
        console.log(cart);
    }, [cart]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home cartTotal={cartTotal} />,
        },
        {
            path: 'shop',
            element: <Shop cartTotal={cartTotal} addToCart={addToCart} />,
        },
        {
            path: 'cart',
            element: <Cart cartTotal={cartTotal} />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
