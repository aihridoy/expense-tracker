/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ExpenseSvg from "./ExpenseSvg";
import FilteringSvg from "./FilteringSvg";
import SortSvg from "./SortSvg";

const ExpenseCardHeader = ({ sortTransactions, filterTransactions }) => {
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
                <div
                    className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base"
                >
                    <ExpenseSvg />
                </div>
                <div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-800">Expense</h3>
                </div>
            </div>
            <div>
                {/* Sorting */}
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="menu-button2"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                        >
                            <SortSvg />
                        </button>
                    </div>

                    {
                        isSortDropdownOpen &&
                        <div
                            className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu2"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button2"
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="menu-item-0"
                                    onClick={() => {
                                        sortTransactions('lowToHigh');
                                        setIsSortDropdownOpen(false);
                                    }}
                                >Low to High</a
                                >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="menu-item-0"
                                    onClick={() => {
                                        sortTransactions('highToLow');
                                        setIsSortDropdownOpen(false);
                                    }}
                                >High to Low</a
                                >
                            </div>
                        </div>
                    }
                </div>

                {/* Filtering */}
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="filter-button-2"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                        >
                            <FilteringSvg />
                        </button>
                    </div>

                    {
                        isFilterDropdownOpen &&
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="filter-button-2"
                            tabIndex="-1"
                            id="filter-dropdown2"
                        >
                            <div className="py-1" role="none">
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Education')}
                                        onChange={() => handleFilterChange('Education')}
                                    />
                                    <span className="ml-2">Education</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Food')}
                                        onChange={() => handleFilterChange('Food')}
                                    />
                                    <span className="ml-2">Food</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Health')}
                                        onChange={() => handleFilterChange('Health')}
                                    />
                                    <span className="ml-2">Health</span>
                                </label>
                                {/* New Labels */}
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Bill')}
                                        onChange={() => handleFilterChange('Bill')}
                                    />
                                    <span className="ml-2">Bill</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Insurance')}
                                        onChange={() => handleFilterChange('Insurance')}
                                    />
                                    <span className="ml-2">Insurance</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Tax')}
                                        onChange={() => handleFilterChange('Tax')}
                                    />
                                    <span className="ml-2">Tax</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Transport')}
                                        onChange={() => handleFilterChange('Transport')}
                                    />
                                    <span className="ml-2">Transport</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        checked={selectedFilters.includes('Telephone')}
                                        onChange={() => handleFilterChange('Telephone')}
                                    />
                                    <span className="ml-2">Telephone</span>
                                </label>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default ExpenseCardHeader;