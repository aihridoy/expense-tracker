/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SubmissionForm = ({ addTransaction, transactionToEdit }) => {
    const [transactionType, setTransactionType] = useState("Expense");
    const [category, setCategory] = useState("Education");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (transactionToEdit) {
            setTransactionType(transactionToEdit.type);
            setCategory(transactionToEdit.category);
            setAmount(transactionToEdit.amount);
            setDate(transactionToEdit.date);
        }
    }, [transactionToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !category || !date) return;

        const transaction = {
            id: transactionToEdit?.id || crypto.randomUUID(),
            type: transactionType,
            category,
            amount: parseFloat(amount),
            date,
        };

        addTransaction(transaction);
        resetForm();
    };

    const resetForm = () => {
        setTransactionType("Expense");
        setCategory("Education");
        setAmount("");
        setDate("");
    };

    const handleTabClick = (type) => {
        setTransactionType(type);
        setCategory(type === "Expense" ? "Education" : "Salary");
    };

    const categories = transactionType === "Expense"
        ? ["Education", "Food", "Health", "Bill", "Insurance", "Tax", "Transport", "Telephone"]
        : ["Salary", "Outsourcing", "Bond", "Dividend"];

    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
                {transactionToEdit ? "Edit Transaction" : "Expense Tracker"}
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                    <div
                        className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${transactionType === "Expense" ? "active bg-teal-600 text-white" : ""
                            }`}
                        onClick={() => handleTabClick("Expense")}
                    >
                        Expense
                    </div>
                    <div
                        className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${transactionType === "Income" ? "active bg-teal-600 text-white" : ""
                            }`}
                        onClick={() => handleTabClick("Income")}
                    >
                        Income
                    </div>
                </div>

                {/* Category */}
                <div className="mt-3">
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                        Category
                    </label>
                    <div className="mt-2">
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        >
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Amount */}
                <div className="mt-3">
                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                        Amount
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Date */}
                <div className="mt-3">
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
                >
                    {transactionToEdit ? "Update Transaction" : "Save"}
                </button>
            </form>
        </div>
    );
};

export default SubmissionForm;
