import { useState, useEffect } from 'react';
import { Indicators } from './Indicators';
import { ArrowControl } from './ArrowControl';

export function ImageCarousel() {
    const images = ['living-room', 'chessboard', 'bed', 'typewriter', 'piano'];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect((): (() => void) => {
        function carouselAutoplay(): void {
            setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        }

        const autoplayInterval = setInterval(carouselAutoplay, 7000);

        return (): void => clearInterval(autoplayInterval);
    }, [currentIndex, images.length]);

    return (
        <div className="relative flex overflow-hidden max-h-[460px] max-w-[1000px] mt-6 sm:mt-12">
            <ArrowControl
                direction={'left'}
                imageCount={images.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <ArrowControl
                direction={'right'}
                imageCount={images.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            {images.map((image, i): JSX.Element => {
                return (
                    <img
                        className="object-cover object-bottom duration-[1600ms] ease-in-out"
                        key={i}
                        src={`./${image}.jpg`}
                        alt={`image ${i} (${image})`}
                        style={{
                            transform: `translate(-${currentIndex * 100}%)`,
                        }}
                    />
                );
            })}

            <Indicators
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    );
}
