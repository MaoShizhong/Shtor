import { Link } from 'react-router-dom';

type FeaturedAdvertProps = { product: string; image: string };

export function FeaturedAdvert({ product, image }: FeaturedAdvertProps) {
    return (
        <Link
            to="./shop"
            className="grid w-full h-[min(35svh,400px)] place-items-center  bg-cover bg-center p-6 sm:p-10 my-1 sm: my-2"
            style={{ backgroundImage: `url(./${image}.jpg)` }}
            aria-label="advert for new pianos"
        >
            <div className="flex flex-col items-center justify-end w-full h-full bg-white/60 text-accent">
                <h1 className="text-5xl font-bold sm:text-7xl">NEW</h1>
                <h2 className="mb-4 text-2xl sm:text-4xl">{product}</h2>
                <hr className="w-5/6 my-2 sm:my-4 border-accent" />
                <p className="mb-3 sm:mb-4 sm:text-2xl">Lasting value you can trust</p>
            </div>
        </Link>
    );
}
