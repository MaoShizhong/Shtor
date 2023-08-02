import { Header } from '../Header';
import { ScrollToTopButton } from '../shop/ScrollToTopButton';
import { ImageCarousel } from './ImageCarousel';

export function Home({ isScrolled }: { isScrolled: boolean }) {
    return (
        <>
            <Header activePage="home" />
            <main className="flex flex-col items-center relative w-[min(1200px,90vw)]">
                <ImageCarousel />
                {isScrolled && <ScrollToTopButton />}
            </main>
        </>
    );
}
