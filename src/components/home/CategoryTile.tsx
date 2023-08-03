import { Link } from 'react-router-dom';
import { toTitleCase } from '../../util';

type CategoryTileProps = {
    image: string;
    category: number;
};

export function CategoryTile({ image, category }: CategoryTileProps) {
    return (
        <Link
            to="/shop"
            state={{ categoryToSet: category }}
            className={`h-20 text-white bg-center bg-cover sm:h-24`}
            style={{ backgroundImage: `url(./${image}.jpg)` }}
        >
            <h1 className="w-full h-full grid place-items-center backdrop-brightness-[40%] text-xl">
                {toTitleCase(image)}
            </h1>
        </Link>
    );
}
