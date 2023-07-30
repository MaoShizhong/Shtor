import { Item } from './Item';
import { Product } from './Shop';

type ItemsProps = {
    products: Product[];
};

export function Items({ products }: ItemsProps) {
    return (
        <div className="grid max-w-5xl">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}
