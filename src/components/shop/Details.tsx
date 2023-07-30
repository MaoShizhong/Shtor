import { forwardRef, useEffect, useState } from 'react';

type DetailsProps = {
    handleClose: (arg0: boolean) => void;
    title: string;
    price: string;
    description: string;
    images: string[];
};

export const Details = forwardRef<HTMLDialogElement, DetailsProps>(function Details(
    { handleClose, title, price, description, images },
    modalRef
) {
    const [activeImage, setActiveImage] = useState({ image: images[0], index: '0' });

    useEffect((): void => {
        const prevImage = document.querySelector('.outline');
        prevImage?.classList.remove('outline');

        const activeImageMini = document.getElementById(activeImage.index);
        activeImageMini?.classList.add('outline');
    }, [activeImage]);

    return (
        <dialog
            className="flex flex-col w-[min(80vw,400px)] p-4 border border-main text-main backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50"
            ref={modalRef}
        >
            <button className="self-end px-2 " onClick={(): void => handleClose(false)}>
                Close
            </button>
            <div className="flex flex-col self-center gap-2 my-4 sm:flex-row">
                <div className="flex sm:flex-col justify-evenly sm:w-[13%]">
                    {images.slice(0, 3).map((image, i) => (
                        <button
                            id={i.toString()}
                            className="max-w-[15%] sm:max-w-full hover:outline"
                            onClick={(): void =>
                                setActiveImage({ image: image, index: i.toString() })
                            }
                        >
                            <img src={image} />
                        </button>
                    ))}
                </div>
                <img
                    className="max-w-[80%] self-center border border-main"
                    src={activeImage.image}
                ></img>
            </div>
            <div className="flex justify-between my-4">
                <h1 className="font-bold">{title}</h1>
                <p>{price}</p>
            </div>
            <p className="mb-8">{description}</p>
            <button className="self-end px-2 border border-dashed border-soft">Add to cart</button>
        </dialog>
    );
});
