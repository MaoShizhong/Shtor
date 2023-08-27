import { Link } from 'react-router-dom';

type CategoryTileProps = {
    index: number;
    image: string;
    category: string;
};

export function CategoryTile({ index, image, category }: CategoryTileProps) {
    return (
        <Link
            to="/shop"
            state={{ categoryToSet: category }}
            className={`h-20 text-white bg-center bg-cover sm:h-24`}
            style={{ backgroundImage: `url(./${image}.jpg)` }}
        >
            <h1 className="w-full h-full grid place-items-center backdrop-brightness-[40%] text-xl">
                Category {index}
            </h1>
        </Link>
    );
}
