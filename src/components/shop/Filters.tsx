import { CategoryFilter, SortFilter } from './Shop';

type FiltersProps = {
    changeFilter: (e: CategoryFilter) => void;
    sortProducts: (e: SortFilter) => void;
};

export function Filters({ changeFilter, sortProducts }: FiltersProps) {
    return (
        <div className="sticky top-0 flex justify-end gap-8 w-[min(100%,80vw)] text-sm">
            <label>
                Filter:
                <select
                    className="p-1 mt-2 mb-6 ml-2"
                    onChange={(e): void => changeFilter(e.target.value as CategoryFilter)}
                >
                    <option value="all">Show All</option>
                    <option value={1}>Arbitrary category 1</option>
                    <option value={2}>Arbitrary category 2</option>
                    <option value={3}>Arbitrary category 3</option>
                    <option value={4}>Arbitrary category 4</option>
                    <option value={5}>Arbitrary category 5</option>
                </select>
            </label>
            <label>
                Sort:
                <select
                    className="p-1 mt-2 mb-6 ml-2"
                    onChange={(e): void => sortProducts(e.target.value as SortFilter)}
                >
                    <option value="popular">Most Popular</option>
                    <option value="alphaAsc">Alphabetical: A-Z</option>
                    <option value="alphaDesc">Alphabetical: Z-A</option>
                    <option value="priceAsc">Price: Low - High</option>
                    <option value="priceDesc">Price: High - Low</option>
                </select>
            </label>
        </div>
    );
}
