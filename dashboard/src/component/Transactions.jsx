import React from 'react'

const Transactions = () => {
    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex justify-between items-baseline mb-8 flex-col sm:flex-col">
                            <div className='w-full flex justify-between items-center'>
                                <h1 className="text-4xl mb-6 font-bold text-gray-900">Transactions</h1>
                                <button className='bg-slate-200 font-medium  rounded-xl px-5 py-3'>Search</button>
                            </div>
                            <div className='border-b border-gray-300 w-full text-left mb-6'>
                                <button className="text-md text-grey-900 font-medium border-b-3 pb-3 px-0 ms-1 me-6">All</button>
                                <button className="text-md text-sky-700 font-medium pb-3 px-0 mx-6">Income</button>
                                <button className="text-md text-sky-700 font-medium pb-3 px-0 mx-6">Expense</button>
                                <button className="text-md text-sky-700 font-medium pb-3 mb-0 px-0 mx-6">Transfer</button>
                            </div>
                            <div className='w-full border border-gray-300 rounded-lg'>
                                <table className='w-full'>
                                    <thead className='border-b-1 border-gray-300'>
                                        <tr >
                                            <th className='px-2 py-3 text-left font-medium'>Date</th>
                                            <th className='px-2 py-3 text-left font-medium'>Category</th>
                                            <th className='px-2 py-3 text-left font-medium'>Description</th>
                                            <th className='px-2 py-3 text-left font-medium'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='p-3 text-left text-sky-800 font-medium'>2023-10-01</td>
                                            <td className='p-3 text-left w-30'>
                                                <div className='bg-gray-200 p-2 font-medium text-center rounded-lg w-50 px-6'>Income</div>
                                            </td>
                                            <td className='p-3 text-left font-medium text-sky-800'>Groceries</td>
                                            <td className='p-3 text-left font-medium text-sky-800'>$50.00</td>
                                        </tr>
                                        <tr className='border-b-1 border-gray-300'>
                                            <td className='p-3 text-left text-sky-800 font-medium'>2023-10-01</td>
                                            <td className='p-3 text-left w-30'>
                                                <div className='bg-gray-200 p-2 font-medium text-center rounded-lg w-50 px-6'>Income</div>
                                            </td>
                                            <td className='p-3 text-left font-medium text-sky-800'>Groceries</td>
                                            <td className='p-3 text-left font-medium text-sky-800'>$50.00</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Transactions
