import { Item } from './Item';
import { Product } from './Shop';
import { FormEvent } from 'react';

type ItemsProps = {
    products: Product[];
    addToCart: (e: FormEvent, arg1: Product, arg2: number) => void;
};

export function Items({ products, addToCart }: ItemsProps) {
    return (
        <div className=" grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            {products.map((product) => (
                <Item key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}
