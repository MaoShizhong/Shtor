import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Product } from './Shop';
import { CartContext } from '../../App';
import { MAX_QUANTITY_PER_ITEM } from '../../util';

type DetailsProps = {
    product: Product;
    title: string;
    price: string;
    description: string;
    closeModal: (isModalOpen: boolean) => void;
};

// Max. 10 purchase quantity at a time
const quantities = [...Array(11).keys()].slice(1);
const defaultQuantity = 1;

export function Details({ product, title, price, description, closeModal }: DetailsProps) {
    const [currentQuantity, setCurrentQuantity] = useState(defaultQuantity);

    const { cart, addToCart } = useContext(CartContext);

    const dropdown = useRef<HTMLSelectElement>(null);

    useEffect((): void => {
        const productInCart = cart.get(product.id);

        if (productInCart && productInCart.quantity + currentQuantity > MAX_QUANTITY_PER_ITEM) {
            dropdown.current?.setCustomValidity('Max. 10 per item allowed in cart');
        } else {
            dropdown.current?.setCustomValidity('');
        }
    }, [currentQuantity, cart, product.id]);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();

        addToCart(product, currentQuantity);
        closeModal(false);
    }

    return (
        <>
            <div className="flex justify-between my-4">
                <h1 className="font-bold">{title}</h1>
                <p>{price}</p>
            </div>
            <p className="mb-8">{description}</p>
            <form onSubmit={handleSubmit} className="self-end">
                <label>
                    Quantity:
                    <select
                        className="px-2 ml-2"
                        onChange={(e): void => setCurrentQuantity(+e.target.value)}
                        defaultValue={defaultQuantity}
                        ref={dropdown}
                    >
                        {quantities.map((quantity, i) => (
                            <option key={i} value={quantity}>
                                {quantity}
                            </option>
                        ))}
                    </select>
                </label>
                <button
                    type="submit"
                    className="px-2 ml-2 border border-dashed border-soft hover:border-cyan-950 hover:text-cyan-950"
                >
                    Add to cart
                </button>
            </form>
        </>
    );
}
