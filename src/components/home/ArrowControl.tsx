type ArrowControlProps = {
    direction: 'left' | 'right';
    imageCount: number;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
};

export function ArrowControl({
    direction,
    imageCount,
    currentIndex,
    setCurrentIndex,
}: ArrowControlProps) {
    const directionClasses = direction === 'left' ? '-rotate-90' : 'right-0 rotate-90';

    function goToAdjacentSlide() {
        const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        setCurrentIndex(newIndex % imageCount);
    }

    return (
        <button
            className={`absolute z-10 w-20 -translate-y-1/2 top-1/2 opacity-50 hover:opacity-70 hover:scale-110 ${directionClasses}`}
            onClick={goToAdjacentSlide}
        >
            <img src={'./arrow-control.svg'}></img>
        </button>
    );
}
