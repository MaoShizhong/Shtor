import Router from './components/Router.tsx';
import { FormEvent, createContext, useState } from 'react';
import { Product } from './components/shop/Shop.tsx';

type ID = number;

export type CartProduct = Product & {
    quantity: number;
};

type Cart = {
    cart: Map<ID, CartProduct>;
    cartTotal: number;
    addToCart: (e: FormEvent, arg1: Product, arg2: number) => void;
};

export const CartContext = createContext<Cart>({
    cart: new Map<ID, CartProduct>(),
    cartTotal: 0,
    addToCart: () => {},
});

export default function App() {
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

    return (
        <CartContext.Provider value={{ cart, cartTotal, addToCart }}>
            <Router />
        </CartContext.Provider>
    );
}
