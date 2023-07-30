import { forwardRef, useEffect, useState, FormEvent } from 'react';
import { Images } from './Images';
import { Details } from './Details';
import { Product } from './Shop';

type DetailsModalProps = {
    handleClose: (arg0: boolean) => void;
    product: Product;
    title: string;
    price: string;
    description: string;
    images: string[];
    addToCart: (e: FormEvent, arg1: Product, arg2: number) => void;
};

export type Image = {
    image: string;
    index: string;
};

export const DetailsModal = forwardRef<HTMLDialogElement, DetailsModalProps>(function DetailsModal(
    { handleClose, product, title, price, description, images, addToCart },
    modalRef
) {
    const [activeImage, setActiveImage] = useState<Image>({ image: images[0], index: '0' });

    useEffect((): void => {
        const prevImage = document.querySelector('.outline');
        prevImage?.classList.remove('outline');

        const activeImageMini = document.getElementById(activeImage.index);
        activeImageMini?.classList.add('outline');
    }, [activeImage]);

    return (
        <dialog
            className="flex flex-col w-[min(80vw,400px)] py-4 px-6 border-2 border-main text-main backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50"
            ref={modalRef}
        >
            <button className="self-end px-2 " onClick={(): void => handleClose(false)}>
                Close
            </button>
            <Images images={images} activeImage={activeImage} setActiveImage={setActiveImage} />
            <Details
                product={product}
                title={title}
                price={price}
                description={description}
                addToCart={addToCart}
            />
        </dialog>
    );
});
