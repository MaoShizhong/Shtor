import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Filters } from './Filters';
import { Items } from './Items';
import { ScrollToTopButton } from './ScrollToTopButton';
import { useLocation } from 'react-router-dom';
import { Footer } from '../Footer';

export type SortFilter = 'popular' | 'alphaAsc' | 'alphaDesc' | 'priceAsc' | 'priceDesc';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
};

type ShopProps = { isScrolled: boolean };

export function Shop({ isScrolled }: ShopProps) {
    const { productsJSON, error, loading, categories } = useFetchProducts();

    const [products, setProducts] = useState<Product[]>(productsJSON);
    const [currentCategory, setCurrentCategory] = useState('all');

    const homepageLink = useLocation();

    useEffect((): void => setProducts(productsJSON), [productsJSON]);
    useEffect((): void => {
        if (homepageLink.state) {
            const { categoryToSet } = homepageLink.state;
            setCurrentCategory(categoryToSet);
        }
    }, [homepageLink.state]);

    function changeFilter(category: string): void {
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
            <main className="relative flex flex-col items-center flex-1 mx-auto mb-12 w-main">
                {error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p className="mt-12">Loading products...</p>
                ) : (
                    <>
                        <Filters
                            activeCategory={currentCategory}
                            categories={categories}
                            changeFilter={changeFilter}
                            sortProducts={sortProducts}
                        />
                        <Items
                            products={products.filter((product) =>
                                currentCategory === 'all'
                                    ? product
                                    : product.category === currentCategory
                            )}
                        />
                    </>
                )}
                {isScrolled && <ScrollToTopButton />}
            </main>
            <Footer />
        </>
    );
}

function useFetchProducts() {
    const [productsJSON, setProductsJSON] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect((): void => {
        async function fetchProducts(): Promise<void> {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=100');

                if (!res.ok) {
                    setError(`${res.status} server error - could not fetch products`);
                    return;
                }

                const products = await res.json();
                const allCategories: string[] = products.products.map(
                    (product: Product): string => product.category
                );

                setProductsJSON(products.products);
                setCategories([...new Set(allCategories)]);
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return { productsJSON, error, loading, categories };
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
