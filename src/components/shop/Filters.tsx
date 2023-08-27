import { SortFilter } from './Shop';
import { toTitleCase } from '../../util';

type FiltersProps = {
    activeCategory: string;
    categories: string[];
    changeFilter: (category: string) => void;
    sortProducts: (sort: SortFilter) => void;
};

type SortOptions = {
    [index: string]: string;
};

export function Filters({ activeCategory, categories, changeFilter, sortProducts }: FiltersProps) {
    return (
        <div className="sticky top-0 flex justify-center w-screen sm:top-36 bg-slate-50">
            <div className="flex justify-between gap-8 pt-4 text-sm text-center w-main sm:justify-end">
                <label className="flex flex-col items-center mb-4 sm:flex-row max-w-[40vw]">
                    Filter:
                    <select
                        defaultValue={activeCategory}
                        className="w-full p-1 sm:ml-2 hover:cursor-pointer"
                        onChange={(e): void => changeFilter(e.target.value)}
                    >
                        <option value="all">Show All</option>
                        <optgroup label="Categories">
                            {categories.map((category, i) => {
                                return (
                                    <option key={i} value={category}>
                                        {toTitleCase(category)}
                                    </option>
                                );
                            })}
                        </optgroup>
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
