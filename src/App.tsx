import Router from './components/Router.tsx';
import { FormEvent, ChangeEvent, createContext, useState } from 'react';
import { Product } from './components/shop/Shop.tsx';

type ID = number;

export type CartProduct = Product & {
    quantity: number;
};

type Cart = {
    cart: Map<ID, CartProduct>;
    cartTotal: number;
    addToCart: (event: FormEvent | ChangeEvent, product: Product, quantityToAdd: number) => void;
    removeFromCart: (
        event: FormEvent | ChangeEvent,
        product: Product,
        quantityToAdd: number
    ) => void;
};

export const CartContext = createContext<Cart>({
    cart: new Map<ID, CartProduct>(),
    cartTotal: 0,
    addToCart: () => {},
    removeFromCart: () => {},
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

    function removeFromCart(e: FormEvent, product: Product, quantity: number): void {
        e.preventDefault();

        const productInCart = cart.get(product.id);

        if (productInCart) {
            productInCart.quantity -= quantity;
            setCart(cart.set(product.id, productInCart));

            if (productInCart.quantity === 0) {
                cart.delete(product.id);
                setCart(cart);
            }
        }

        setCartTotal(cartTotal - product.price * quantity);
    }

    return (
        <CartContext.Provider value={{ cart, cartTotal, addToCart, removeFromCart }}>
            <Router />
        </CartContext.Provider>
    );
}
