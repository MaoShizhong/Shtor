import Router from './components/Router.tsx';
import { createContext, useState } from 'react';
import { Product } from './components/shop/Shop.tsx';

type ID = number;

export type CartProduct = Product & {
    quantity: number;
};

type Cart = {
    cart: Map<ID, CartProduct>;
    cartTotal: number;
    addToCart: (product: Product, quantityToAdd: number) => void;
    removeFromCart: (product: Product, quantityToRemove: number) => void;
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

    function addToCart(product: Product, quantityToAdd: number): void {
        const productInCart = cart.get(product.id);

        if (productInCart) {
            productInCart.quantity += quantityToAdd;
            setCart(cart.set(product.id, productInCart));
        } else {
            const newProduct = { ...product, quantity: quantityToAdd };
            setCart(cart.set(product.id, newProduct));
        }

        setCartTotal(cartTotal + product.price * quantityToAdd);
    }

    function removeFromCart(product: Product, quantityToRemove: number): void {
        const productInCart = cart.get(product.id);

        if (!productInCart) return;

        productInCart.quantity -= quantityToRemove;
        setCart(cart.set(product.id, productInCart!));

        if (!productInCart.quantity) {
            cart.delete(product.id);
            setCart(cart);
        }

        setCartTotal(cartTotal - product.price * quantityToRemove);
    }

    return (
        <CartContext.Provider value={{ cart, cartTotal, addToCart, removeFromCart }}>
            <Router />
        </CartContext.Provider>
    );
}
