import { useState } from "react";
import Header from "./components/Header"
import SubmissionForm from "./components/SubmissionForm"
import TotalSummary from "./components/TotalSummary"


function App() {
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const addTransaction = (transaction) => {
    if (transactionToEdit) {
      const updatedTransactions = transactions.map((t) =>
        t.id === transaction.id ? transaction : t
      );
      setTransactions(updatedTransactions);
      setTransactionToEdit(null);
    } else {
      setTransactions([...transactions, transaction]);
    }
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleEdit = (transaction) => {
    setTransactionToEdit(transaction);
  };

  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm addTransaction={addTransaction} transactionToEdit={transactionToEdit} />
          <TotalSummary transactions={transactions} handleDelete={handleDelete} handleEdit={handleEdit} />
        </section>
      </main>
    </>
  )
}

export default App
