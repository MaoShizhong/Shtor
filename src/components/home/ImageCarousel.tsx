import { useState, useEffect } from 'react';

const images = ['living-room', 'chessboard', 'bed', 'typewriter', 'piano'];

export function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect((): (() => void) => {
        const autoplayInterval = setInterval((): void => carouselAutoplay(), 8000);

        return (): void => clearInterval(autoplayInterval);
    });

    function carouselAutoplay(): void {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }

    return (
        <div className="relative flex overflow-hidden max-h-[460px] max-w-[1000px] mt-6 sm:mt-12">
            {images.map((image, i): JSX.Element => {
                return (
                    <img
                        className="object-cover object-bottom duration-[1500ms] ease-in-out"
                        key={i}
                        src={`./${image}.jpg`}
                        alt={`image ${i} (${image})`}
                        style={{
                            transform: `translate(-${currentIndex * 100}%)`,
                        }}
                    />
                );
            })}
        </div>
    );
}
