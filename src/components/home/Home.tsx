import { Footer } from '../Footer';
import { Header } from '../Header';
import { ScrollToTopButton } from '../shop/ScrollToTopButton';
import { CategoryTile } from './CategoryTile';
import { FeaturedAdvert } from './FeaturedAdvert';
import { ImageCarousel } from './ImageCarousel';

type Categories = {
    [image: string]: string;
};

const categoryImages: Categories = {
    'living-room': 'smartphones',
    chessboard: 'laptops',
    bed: 'mens-watches',
    typewriter: 'sunglasses',
};

export function Home({ isScrolled }: { isScrolled: boolean }) {
    return (
        <>
            <Header activePage="home" />
            <main className="flex flex-col items-center relative w-[min(1240px,95vw)]">
                <ImageCarousel />
                <h1 className="flex items-center justify-center w-full h-12 my-1 text-xl text-white sm:my-2 bg-cyan-950">
                    25% off selected items!
                </h1>
                <div className="grid w-full grid-cols-2 gap-2 my-1 sm:my-2 sm:grid-cols-4 sm:gap-4">
                    {Object.keys(categoryImages).map((image, i) => (
                        <CategoryTile
                            key={i}
                            index={i + 1}
                            image={image}
                            category={categoryImages[image]}
                        />
                    ))}
                </div>
                <FeaturedAdvert product="Upright Acoustic Pianos" image="piano" />

                {isScrolled && <ScrollToTopButton />}
            </main>
            <Footer />
        </>
    );
}
