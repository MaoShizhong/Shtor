import { Product } from './Shop';
import { Details } from './Details';
import { useEffect, useRef, useState } from 'react';

type ItemProps = {
    product: Product;
};

export function Item({ product }: ItemProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const modalRef = useRef<HTMLDialogElement>(null);
    const price = (product.price / 10).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    useEffect(() => {
        if (isDetailsOpen) modalRef.current?.showModal();
    }, [isDetailsOpen]);

    function showDetails(): void {
        setIsDetailsOpen(true);
    }

    return (
        <>
            <div className="flex flex-col p-4 border border-soft">
                <img src={product.images[0]} alt="product image"></img>
                <p className="mt-2 mb-4">{product.title}</p>
                <div className="flex justify-between mt-auto">
                    <button
                        onClick={showDetails}
                        className="px-2 transition-all border border-dashed hover:border-solid hover:text-slate-800 border-soft"
                    >
                        Details
                    </button>
                    <p>{price}</p>
                </div>
            </div>
            {isDetailsOpen && (
                <Details
                    ref={modalRef}
                    handleClose={setIsDetailsOpen}
                    title={product.title}
                    price={price}
                    description={product.description}
                    images={product.images}
                />
            )}
        </>
    );
}
