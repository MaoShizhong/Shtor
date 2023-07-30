import { Item } from './Item';
import { Product } from './Shop';

type ItemsProps = {
    products: Product[];
};

export function Items({ products }: ItemsProps) {
    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}
