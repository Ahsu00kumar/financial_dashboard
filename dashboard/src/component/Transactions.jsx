import React, { useState } from 'react';


// Each transaction has a date, category, description, and amount
const transactionData = [
    {
        date: "Jan 26",
        category: "Income",
        description: "Paycheck",
        amount: "2500.00"
    }, {
        date: "Jan 25",
        category: "Expense",
        description: "Rent",
        amount: "1500.00"
    }, {
        date: "Jan 24",
        category: "Expense",
        description: "Grocery",
        amount: "65.00"
    }, {
        date: "Jan 23",
        category: "Income",
        description: "Freelance",
        amount: "300.00"
    }, {
        date: "Jan 22",
        category: "Transfer",
        description: "Bank Transfer",
        amount: "1000.00"
    }
];


const Transactions = () => {
    // useState hooks to manage state
    const [activeFilter, setActiveFilter] = useState('All');
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // Filters for the transactions
    const filters = ['All', 'Income', 'Expense', 'Transfer'];

    // This function updates the selected filter
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // This function returns the prefix for the amount based on the category
    const getAmountPrefix = (category) => {
        switch (category) {
            case "Income":
                return "+";
            case "Expense":
                return "-";
            case "Transfer":
                return "";
            default:
                return "";
        }
    }

    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen);
    // };



    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex flex-col space-y-6 mb-8">

                            {/* Header with Title and Search Button */}
                            <section className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Transactions</h1>
                                <button
                                    // onClick={toggleModal}
                                    className="bg-slate-200 hover:bg-slate-300 transition-all font-medium rounded-xl px-5 py-3"
                                >
                                    Search
                                </button>
                            </section>

                            {/* Filters */}
                            <section className="border-b border-gray-300 w-full text-left">
                                <div className="flex flex-wrap gap-4">
                                    {filters.map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => handleFilterClick(filter)}
                                            className={`text-md font-medium pb-3 border-b-4 ${activeFilter === filter
                                                    ? 'text-sky-700 border-sky-700'
                                                    : 'text-gray-900 border-transparent hover:text-sky-600 hover:border-sky-600'
                                                } transition-all`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Transactions Table */}
                            <section className="w-full border border-gray-300 rounded-lg overflow-x-auto">
                                <table className="w-full min-w-[600px] table-auto">
                                    <thead className="border-b border-gray-300 bg-gray-50">
                                        <tr>
                                            <th className="px-3 py-3 text-left font-medium text-gray-700">Date</th>
                                            <th className="px-3 py-3 text-left font-medium text-gray-700">Category</th>
                                            <th className="px-3 py-3 text-left font-medium text-gray-700">Description</th>
                                            <th className="px-3 py-3 text-left font-medium text-gray-700">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactionData
                                            .filter(item => activeFilter === "All" || item.category === activeFilter)
                                            .map((item, index) => (
                                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50 transition-colors">
                                                    <td className="px-3 py-3 text-sky-800 font-medium whitespace-nowrap">{item.date}</td>
                                                    <td className="px-3 py-3">
                                                        <div className="bg-gray-200 text-center w-full max-w-[120px] p-2 font-medium rounded-lg px-6 truncate">
                                                            {item.category}
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-3 text-sky-800 font-medium truncate max-w-xs">{item.description}</td>
                                                    <td className="px-3 py-3 text-sky-800 font-medium whitespace-nowrap">
                                                        {getAmountPrefix(item.category)}${item.amount}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </section>

                        </div>
                    </div>
                </div>
  
                {/* Modal (commented out) */}
                {/* {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Search Transactions</h2>
                        <input
                        type="text"
                        placeholder="Search by description or category"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        />
                        <div className="flex justify-end gap-4">
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                )} */}
            </main>


        </>
    )
}

export default Transactions
