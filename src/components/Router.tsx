import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Product, Shop } from './shop/Shop';
import { Cart } from './cart/Cart';
import { Home } from './home/Home';
import { FormEvent, useState } from 'react';

type ID = number;

export type CartProduct = Product & {
    quantity: number;
};

const Router = () => {
    const [cart, setCart] = useState(new Map<ID, CartProduct>());
    const [cartTotal, setCartTotal] = useState(0);

    function addToCart(e: FormEvent, product: Product, quantity: number): void {
        e.preventDefault();

        const productInCart = cart.get(product.id);

        if (productInCart) {
            productInCart.quantity += quantity;
            setCart(cart.set(product.id, productInCart));
        } else {
            const newProduct = { ...product, quantity: quantity };
            setCart(cart.set(product.id, newProduct));
        }

        setCartTotal(cartTotal + product.price * quantity);
    }

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
            element: <Cart cart={cart} cartTotal={cartTotal} />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
