import DeleteSvg from "./DeleteSvg";
import EditSvg from "./EditSvg";

/* eslint-disable react/prop-types */
const IncomeCardBody = ({ transactions, handleDelete, handleEdit }) => {
    return (
        <>
            {
                transactions
                    .filter(transaction => transaction.type === "Income")
                    .map(transaction => {
                        return (
                            <div className="p-4 divide-y" key={transaction.id}>
                                <div className="flex justify-between items-center py-2 relative group cursor-pointer">
                                    <div>
                                        <h3 className="text-base font-medium leading-7 text-gray-600">{transaction.category}</h3>
                                        <p className="text-xs text-gray-600">{transaction.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                                            BDT {transaction.amount}
                                        </p>
                                        <div
                                            className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all"
                                        >
                                            <button className="hover:text-teal-600" role="button" title="Edit Button" onClick={() => handleEdit(transaction)}>
                                                <EditSvg />
                                            </button>

                                            <button className="hover:text-red-600" role="button" title="Delete" onClick={() => handleDelete(transaction.id)}>
                                                <DeleteSvg />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
            }
        </>
    );
};

export default IncomeCardBody;
