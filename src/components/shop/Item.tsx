import { Product } from './Shop';
import { DetailsModal } from './DetailsModal';
import { getPriceAsCurrencyString } from '../../util';
import { useEffect, useRef, useState } from 'react';

export function Item({ product }: { product: Product }) {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const modalRef = useRef<HTMLDialogElement>(null);
    const price = getPriceAsCurrencyString(product.price);

    useEffect((): void => {
        if (isDetailsModalOpen) modalRef.current?.showModal();
    }, [isDetailsModalOpen]);

    function showDetails(): void {
        setIsDetailsModalOpen(true);
    }

    return (
        <>
            <div className="flex flex-col p-4 border border-soft">
                <img
                    className="border border-soft"
                    src={product.images[0]}
                    alt="product image"
                ></img>
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
            {isDetailsModalOpen && (
                <DetailsModal
                    ref={modalRef}
                    handleClose={setIsDetailsModalOpen}
                    product={product}
                    title={product.title}
                    price={price}
                    description={product.description}
                    images={product.images}
                />
            )}
        </>
    );
}
