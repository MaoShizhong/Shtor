import { useEffect, useState, FormEvent } from 'react';
import { Header } from '../Header';
import { Filters } from './Filters';
import { Items } from './Items';

export type CategoryFilter = 'all' | '1' | '2' | '3' | '4' | '5';
export type SortFilter = 'alphaAsc' | 'alphaDesc' | 'priceAsc' | 'priceDesc';

export type Category = {
    id: number;
    name: string;
    image: string;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
};

type ShopProps = {
    cartTotal: number;
    addToCart: (e: FormEvent, arg1: Product, arg2: number) => void;
};

export function Shop({ cartTotal, addToCart }: ShopProps) {
    const { productsJSON, error, loading } = useFetchProducts();
    const [products, setProducts] = useState<Product[]>(productsJSON);
    const [category, setCategory] = useState<CategoryFilter>('all');

    function changeFilter(category: CategoryFilter): void {
        setCategory(category);
    }

    function sortProducts(sort: SortFilter): void {
        const sortedProducts: Product[] = [...products];

        switch (sort) {
            case 'alphaAsc':
                sortedProducts.sort((a, b): number => sortAscending(a.title, b.title));
                break;
            case 'alphaDesc':
                sortedProducts.sort((a, b): number => sortDescending(a.title, b.title));
                break;
            case 'priceAsc':
                sortedProducts.sort((a, b): number => sortAscending(a.price, b.price));
                break;
            case 'priceDesc':
                sortedProducts.sort((a, b): number => sortDescending(a.price, b.price));
                break;
            default:
                setProducts(productsJSON);
                return;
        }

        setProducts(sortedProducts);
    }

    useEffect((): void => setProducts(productsJSON), [productsJSON]);

    return (
        <>
            <Header activePage="shop" cartTotal={cartTotal} />
            <main className="relative flex flex-col items-center mx-auto w-[min(1200px,90vw)] mb-12">
                {error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p className="mt-12">Loading products...</p>
                ) : (
                    <>
                        <Filters changeFilter={changeFilter} sortProducts={sortProducts} />
                        <Items
                            addToCart={addToCart}
                            products={products.filter((product) =>
                                category === 'all' ? product : product.category.id === +category
                            )}
                        />
                    </>
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

function sortAscending(a: string | number, b: string | number): number {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

function sortDescending(a: string | number, b: string | number): number {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
}
4;
