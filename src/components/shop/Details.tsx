import { useState, FormEvent } from 'react';
import { Product } from './Shop';

type DetailsProps = {
    product: Product;
    title: string;
    price: string;
    description: string;
    addToCart: (e: FormEvent, arg1: Product, arg2: number) => void;
    handleClose: (arg0: boolean) => void;
};

// Max. 10 purchase quantity at a time
const quantities = [...Array(11).keys()].slice(1);

export function Details({
    product,
    title,
    price,
    description,
    addToCart,
    handleClose,
}: DetailsProps) {
    const [currentQuantity, setCurrentQuantity] = useState(1);

    return (
        <>
            <div className="flex justify-between my-4">
                <h1 className="font-bold">{title}</h1>
                <p>{price}</p>
            </div>
            <p className="mb-8">{description}</p>
            <form
                onSubmit={(e): void => {
                    addToCart(e, product, currentQuantity);
                    handleClose(false);
                }}
                className="self-end"
            >
                <label>
                    Quantity:
                    <select
                        className="px-2 ml-2"
                        onChange={(e): void => setCurrentQuantity(+e.target.value)}
                        defaultValue={1}
                    >
                        {quantities.map((quantity, i) => (
                            <option key={i} value={quantity}>
                                {quantity}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit" className="px-2 ml-2 border border-dashed border-soft">
                    Add to cart
                </button>
            </form>
        </>
    );
}
