import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Filters } from './Filters';
import { Items } from './Items';
import { ScrollToTopButton } from './ScrollToTopButton';
import { useLocation } from 'react-router-dom';

export type SortFilter = 'popular' | 'alphaAsc' | 'alphaDesc' | 'priceAsc' | 'priceDesc';

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

export function Shop({ isScrolled }: { isScrolled: boolean }) {
    const { productsJSON, error, loading, categoryCount } = useFetchProducts();
    const [products, setProducts] = useState<Product[]>(productsJSON);
    const [currentCategory, setCurrentCategory] = useState(0);

    const homepageLink = useLocation();

    useEffect((): void => setProducts(productsJSON), [productsJSON]);
    useEffect((): void => {
        if (homepageLink.state) {
            const { categoryToSet } = homepageLink.state;
            setCurrentCategory(categoryToSet);
        }
    }, [homepageLink.state]);

    function changeFilter(category: number): void {
        setCurrentCategory(category);
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

    return (
        <>
            <Header activePage="shop" />
            <main className="relative flex flex-col items-center mx-auto w-[min(1200px,90vw)] mb-12">
                {error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p className="mt-12">Loading products...</p>
                ) : (
                    <>
                        <Filters
                            activeCategory={currentCategory}
                            categoryCount={categoryCount}
                            changeFilter={changeFilter}
                            sortProducts={sortProducts}
                        />
                        <Items
                            products={products.filter((product) =>
                                currentCategory ? product.category.id === currentCategory : product
                            )}
                        />
                    </>
                )}
                {isScrolled && <ScrollToTopButton />}
            </main>
        </>
    );
}

function useFetchProducts() {
    const [productsJSON, setProductsJSON] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [categoryCount, setCategoryCount] = useState(0);

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

                setProductsJSON(products);
                setCategoryCount(getCategoryCount(products));
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return { productsJSON, error, loading, categoryCount };
}

function getCategoryCount(products: Product[]): number {
    const categoryIDs: number[] = [];

    products.forEach((product): void => {
        if (!categoryIDs.includes(product.category.id)) {
            categoryIDs.push(product.category.id);
        }
    });

    return categoryIDs.length;
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
