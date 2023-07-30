import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Items } from './Items';

export type CategoryFilter = 'all' | '1' | '2' | '3' | '4' | '5';
export type SortFilter = 'alphaAsc' | 'alphaDesc' | 'priceAsc' | 'priceDesc';

export type Category = {
    id: number;
    name: string;
    image: URL;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: URL[];
};

export function Shop() {
    const { productsJSON, error, loading } = useFetchProducts();
    const [products, setProducts] = useState<Product[]>(productsJSON);

    useEffect((): void => setProducts(productsJSON), [productsJSON]);

    return (
        <>
            <Header activePage="shop" />
            <main className="flex flex-col items-center mx-auto md:max-w-5xl">
                {error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p>Loading products...</p>
                ) : (
                    <Items products={products} />
                )}
            </main>
        </>
    );
}

function useFetchProducts() {
    const [productsJSON, setProductsJSON] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect((): void => {
        async function fetchProducts(): Promise<void> {
            try {
                const res = await fetch(
                    'https://api.escuelajs.co/api/v1/products?offset=0&limit=190'
                );

                if (!res.ok) {
                    setError(`${res.status} server error - could not fetch products`);
                }

                const products = await res.json();

                // First item description does not follow naming convention of other items
                setProductsJSON(products.slice(1));
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return { productsJSON, error, loading };
}
