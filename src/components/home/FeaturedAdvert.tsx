import { Link } from 'react-router-dom';

type FeaturedAdvertProps = { product: string; image: string };

export function FeaturedAdvert({ product, image }: FeaturedAdvertProps) {
    return (
        <Link
            to="./shop"
            className="grid w-full p-6 my-1 bg-center bg-cover h-60 sm:h-96 place-items-center sm:p-10 sm:my-2"
            style={{ backgroundImage: `url(./${image}.jpg)` }}
            aria-label="advert for new pianos"
        >
            <div className="flex flex-col justify-center w-full h-full text-center bg-white/60 text-accent">
                <h1 className="mt-8 text-5xl font-bold sm:text-7xl">NEW</h1>
                <h2 className="text-2xl sm:text-4xl">{product}</h2>
                <hr className="w-5/6 sm:my-4 border-accent" />
                <p className="mb-3 sm:mb-4 sm:text-2xl">Lasting value you can trust</p>
            </div>
        </Link>
    );
}
