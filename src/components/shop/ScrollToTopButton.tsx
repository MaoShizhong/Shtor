export function ScrollToTopButton() {
    return (
        <button
            className="sticky z-10 w-10 ml-auto mr-2 rounded-full shadow 2xl:-mr-16 shadow-medium bottom-4 aspect-square bg-soft"
            onClick={scrollToTop}
        >
            <img src={'./scroll-top.svg'} />
        </button>
    );
}

function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
