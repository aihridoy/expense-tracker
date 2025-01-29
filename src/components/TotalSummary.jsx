/* eslint-disable react/prop-types */
import BalanceStat from "./BalanceStat";
import ListDown from "./ListDown";

const TotalSummary = ({ transactions, handleDelete, handleEdit }) => {
    const totalIncome = transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="lg:col-span-2">
            <BalanceStat balance={balance} totalIncome={totalIncome} totalExpense={totalExpense} />
            <ListDown transactions={transactions} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
};

export default TotalSummary;
