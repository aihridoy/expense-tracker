/* eslint-disable react/prop-types */
import { useState } from "react";
import FilteringSvg from "./FilteringSvg";
import IncomeSvg from "./IncomeSvg";
import SortSvg from "./SortSvg";

const IncomeCardHeader = ({ sortTransactions, filterTransactions }) => {
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (category) => {
        const updatedFilters = selectedFilters.includes(category)
            ? selectedFilters.filter(f => f !== category)
            : [...selectedFilters, category];

        setSelectedFilters(updatedFilters);
        filterTransactions(updatedFilters);
    };

    return (
        <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
                    <IncomeSvg />
                </div>
                <div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-800">Income</h3>
                </div>
            </div>
            <div>
                {/* Sorting */}
                <div className="relative inline-block text-left">
                    <button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    >
                        <SortSvg />
                    </button>
                    {isSortDropdownOpen && (
                        <div className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a
                                    href="#"
                                    onClick={() => {
                                        sortTransactions('lowToHigh');
                                        setIsSortDropdownOpen(false);
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    Low to High
                                </a>
                                <a
                                    href="#"
                                    onClick={() => {
                                        sortTransactions('highToLow');
                                        setIsSortDropdownOpen(false);
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    High to Low
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Filtering */}
                <div className="relative inline-block text-left">
                    <button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                    >
                        <FilteringSvg />
                    </button>
                    {isFilterDropdownOpen && (
                        <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Salary')}
                                        onChange={() => handleFilterChange('Salary')}
                                    />
                                    <span className="ml-2">Salary</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Outsourcing')}
                                        onChange={() => handleFilterChange('Outsourcing')}
                                    />
                                    <span className="ml-2">Outsourcing</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Bond')}
                                        onChange={() => handleFilterChange('Bond')}
                                    />
                                    <span className="ml-2">Bond</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Dividend')}
                                        onChange={() => handleFilterChange('Dividend')}
                                    />
                                    <span className="ml-2">Dividend</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IncomeCardHeader;
