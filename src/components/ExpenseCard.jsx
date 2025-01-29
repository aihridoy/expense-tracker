/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ExpenseCardBody from "./ExpenseCardBody";
import ExpenseCardHeader from "./ExpenseCardHeader";

const ExpenseCard = ({ transactions, handleDelete, handleEdit }) => {
    const [sortedTransactions, setSortedTransactions] = useState(transactions);

    useEffect(() => {
        setSortedTransactions(transactions)
    }, [transactions])

    const sortTransactions = (order) => {
        const sorted = [...transactions].sort((a, b) => {
            return order === 'lowToHigh' ? a.amount - b.amount : b.amount - a.amount;
        });
        setSortedTransactions(sorted);
    };

    const filterTransactions = (selectedFilters) => {
        const filtered = transactions.filter(transaction =>
            selectedFilters.length === 0 || selectedFilters.includes(transaction.category)
        );
        setSortedTransactions(filtered);
    };
    return (
        <div className="border rounded-md">
            <ExpenseCardHeader sortTransactions={sortTransactions} filterTransactions={filterTransactions} />
            <ExpenseCardBody transactions={sortedTransactions} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
};

export default ExpenseCard;