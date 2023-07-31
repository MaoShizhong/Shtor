import { FormEvent, useContext, useEffect, useState } from 'react';
import { Product } from './Shop';
import { CartContext } from '../../App';
import { MAX_QUANTITY_PER_ITEM } from '../../util';

type DetailsProps = {
    product: Product;
    title: string;
    price: string;
    description: string;
    handleClose: (isModalOpen: boolean) => void;
};

// Max. 10 purchase quantity at a time
const quantities = [...Array(11).keys()].slice(1);
const defaultQuantity = 1;

export function Details({ product, title, price, description, handleClose }: DetailsProps) {
    const [currentQuantity, setCurrentQuantity] = useState(defaultQuantity);

    const { cart, addToCart } = useContext(CartContext);

    useEffect((): void => {
        const productInCart = cart.get(product.id);
        const addBtn = document.querySelector('#add-to-cart') as HTMLButtonElement;

        if (productInCart && productInCart.quantity + currentQuantity > MAX_QUANTITY_PER_ITEM) {
            addBtn!.setCustomValidity('Max. 10 per item allowed in cart');
        } else {
            addBtn!.setCustomValidity('');
        }
    }, [currentQuantity, cart, product.id]);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();

        addToCart(product, currentQuantity);
        handleClose(false);
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
                    >
                        {quantities.map((quantity, i) => (
                            <option key={i} value={quantity}>
                                {quantity}
                            </option>
                        ))}
                    </select>
                </label>
                <button
                    id="add-to-cart"
                    type="submit"
                    className="px-2 ml-2 border border-dashed border-soft"
                >
                    Add to cart
                </button>
            </form>
        </>
    );
}
