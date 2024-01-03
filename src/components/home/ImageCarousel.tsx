import { useState } from 'react';
import { ArrowControl } from './ArrowControl';
import { Indicators } from './Indicators';

export function ImageCarousel() {
    const images = ['living-room', 'chessboard', 'bed', 'typewriter', 'piano'];

    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect((): (() => void) => {
    //     function carouselAutoplay(): void {
    //         setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    //     }

    //     const autoplayInterval = setInterval(carouselAutoplay, 7000);

    //     return (): void => clearInterval(autoplayInterval);
    // }, [currentIndex, images.length]);

    return (
        <div
            className="relative flex overflow-hidden h-[460px] w-full mt-6 mb-1 sm:mb-2 sm:mt-12"
            aria-label="image carousel"
        >
            <ArrowControl
                direction={'left'}
                imageCount={images.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            {images.map((image, i): JSX.Element => {
                return (
                    <img
                        className="object-cover object-bottom duration-[1600ms] ease-in-out w-full flex-shrink-0"
                        key={i}
                        src={`./${image}.jpg`}
                        alt={`image ${i} (${image})`}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    />
                );
            })}
            <ArrowControl
                direction={'right'}
                imageCount={images.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <Indicators
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    );
}
