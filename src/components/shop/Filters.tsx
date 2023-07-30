import { CategoryFilter, SortFilter } from './Shop';

type FiltersProps = {
    changeFilter: (e: CategoryFilter) => void;
    sortProducts: (e: SortFilter) => void;
};

export function Filters({ changeFilter, sortProducts }: FiltersProps) {
    return (
        <div className="sticky top-0 flex justify-between w-full gap-8 pt-4 text-sm text-center bg-white sm:top-36 sm:justify-end">
            <label className="flex flex-col items-center mb-4 sm:flex-row">
                Filter:
                <select
                    className="p-1 sm:ml-2 "
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
            <label className="flex flex-col items-center mb-4 sm:flex-row">
                Sort:
                <select
                    className="p-1 sm:ml-2 "
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
