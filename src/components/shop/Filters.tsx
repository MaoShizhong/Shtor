import { SortFilter } from './Shop';

type FiltersProps = {
    activeCategory: number;
    categoryCount: number;
    changeFilter: (e: number) => void;
    sortProducts: (e: SortFilter) => void;
};

type SortOptions = {
    [index: string]: string;
};

export function Filters({
    activeCategory,
    categoryCount,
    changeFilter,
    sortProducts,
}: FiltersProps) {
    // categoryCount + 1 to account for 0 (for all categories);
    const categories = [...Array(categoryCount + 1).keys()];

    return (
        <div className="sticky top-0 flex justify-center w-screen sm:top-36 bg-slate-50">
            <div className="flex justify-between gap-8 pt-4 text-sm text-center w-main sm:justify-end">
                <label className="flex flex-col items-center mb-4 sm:flex-row max-w-[40vw]">
                    Filter:
                    <select
                        defaultValue={activeCategory}
                        className="w-full p-1 sm:ml-2 hover:cursor-pointer"
                        onChange={(e): void => changeFilter(+e.target.value)}
                    >
                        {categories.map((categoryID, i) => {
                            return (
                                <option key={i} value={categoryID}>
                                    {categoryID ? `Arbitrary Category ${categoryID}` : 'Show All'}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <label className="flex flex-col items-center mb-4 sm:flex-row max-w-[40vw]">
                    Sort:
                    <select
                        className="w-full p-1 sm:ml-2 hover:cursor-pointer"
                        onChange={(e): void => sortProducts(e.target.value as SortFilter)}
                    >
                        {Object.keys(sorts).map((option, i) => {
                            return (
                                <option key={i} value={option}>
                                    {sorts[option]}
                                </option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </div>
    );
}

const sorts: SortOptions = {
    popular: 'Most Popular',
    alphaAsc: 'Alphabetical: A-Z',
    alphaDesc: 'Alphabetical: Z-A',
    priceAsc: 'Price: Low - High',
    priceDesc: 'Price: High - Low',
};
