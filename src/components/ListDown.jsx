import ExpenseCard from "./ExpenseCard";
import IncomeCard from "./IncomeCard";

// eslint-disable-next-line react/prop-types
const ListDown = ({ transactions, handleDelete, handleEdit }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeCard transactions={transactions} handleDelete={handleDelete} handleEdit={handleEdit} />
            <ExpenseCard transactions={transactions} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
};

export default ListDown;