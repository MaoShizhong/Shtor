import { useEffect } from 'react';

type IndicatorsProps = {
    images: string[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
};

export function Indicators({ images, currentIndex, setCurrentIndex }: IndicatorsProps) {
    useEffect((): void => {
        const indicators = document.querySelectorAll<HTMLButtonElement>(`button[data-index]`);
        console.log(indicators, currentIndex);

        indicators!.forEach((btn) => {
            btn.dataset.index === currentIndex.toString()
                ? btn.classList.add('!bg-white')
                : btn.classList.remove('!bg-white');
        });
    }, [currentIndex]);

    return (
        <div className="absolute flex justify-center gap-3 sm:gap-5 bottom-2 sm:bottom-3 left-[50%] -translate-x-1/2">
            {images.map(
                (image, i): JSX.Element => (
                    <button
                        key={i}
                        data-index={i}
                        data-image={image}
                        className="w-4 h-1 sm:w-7 sm:h-2 hover:bg-white hover:scale-[115%] bg-black opacity-50 rounded-[3px]"
                        onClick={(): void => setCurrentIndex(i)}
                    />
                )
            )}
        </div>
    );
}
