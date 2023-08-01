import { Header } from '../Header';
import { ScrollToTopButton } from '../shop/ScrollToTopButton';

export function Home({ isScrolled }: { isScrolled: boolean }) {
    return (
        <>
            <Header activePage="home" />
            <main className="relative w-[min(1200px,90vw)]">
                Home
                {isScrolled && <ScrollToTopButton />}
            </main>
        </>
    );
}
