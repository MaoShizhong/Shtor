import { forwardRef, useEffect, useState } from 'react';
import { Images } from './Images';
import { Details } from './Details';
import { Product } from './Shop';

export type Image = {
    image: string;
    index: string;
};

type DetailsModalProps = {
    closeModal: (isModalOpen: boolean) => void;
    product: Product;
    title: string;
    price: string;
    description: string;
    images: string[];
};

export const DetailsModal = forwardRef<HTMLDialogElement, DetailsModalProps>(function DetailsModal(
    { closeModal, product, title, price, description, images },
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
            className="flex flex-col w-[min(80vw,400px)]             py-4 px-6 border-2 border-main text-main backdrop:backdrop-blur-sm               backdrop:backdrop-brightness-50"
            ref={modalRef}
        >
            <button
                className="self-end px-2 hover:text-cyan-950"
                onClick={(): void => closeModal(false)}
            >
                Close
            </button>
            <Images images={images} activeImage={activeImage} setActiveImage={setActiveImage} />
            <Details
                product={product}
                title={title}
                price={price}
                description={description}
                closeModal={closeModal}
            />
        </dialog>
    );
});
