import { Image } from './DetailsModal';

type ImagesProps = {
    images: string[];
    activeImage: Image;
    setActiveImage: (arg0: Image) => void;
};

export function Images({ images, activeImage, setActiveImage }: ImagesProps) {
    return (
        <div className="flex flex-col self-center gap-2 my-4 sm:justify-between sm:flex-row">
            <div className="flex sm:flex-col justify-evenly sm:w-[13%]">
                {images.map((image, i) => (
                    <button
                        key={i}
                        id={i.toString()}
                        className="max-w-[15%] sm:max-w-full hover:outline"
                        onClick={(): void => setActiveImage({ image: image, index: i.toString() })}
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
    );
}
