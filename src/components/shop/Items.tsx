import { Item } from './Item';
import { Product } from './Shop';

export function Items({ products }: { products: Product[] }) {
    return (
        <div className=" grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            {products.map(
                (product): JSX.Element => (
                    <Item key={product.id} product={product} />
                )
            )}
        </div>
    );
}
