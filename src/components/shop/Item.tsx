import { Product } from './Shop';

type ItemProps = {
    product: Product;
};

export function Item({ product }: ItemProps) {
    return <div>{product.title}</div>;
}
