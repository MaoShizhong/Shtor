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
            <div className="flex flex-col p-4 border shadow-lg border-soft">
                <img
                    src={product.images[0]}
                    alt="product image"
                    className="object-contain h-36 aspect-square"
                ></img>
                <h1 className="pt-2 mt-4 mb-4 border-t border-soft">{product.title}</h1>
                <div className="flex justify-between mt-auto">
                    <button
                        onClick={showDetails}
                        className="px-2 transition-all border border-dashed hover:text-cyan-950 hover:border-cyan-950 border-soft"
                    >
                        Details
                    </button>
                    <p>{price}</p>
                </div>
            </div>
            {isDetailsModalOpen && (
                <DetailsModal
                    ref={modalRef}
                    closeModal={setIsDetailsModalOpen}
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
