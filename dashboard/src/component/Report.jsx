import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const categories = ['Home', 'Food & Dining', 'Auto & Transport', 'Health & Fitness', 'Shopping', 'Travel', 'Entertainment'];
const values = [10, 20, 11, 13, 12, 2, 3];

const Report = () => {
    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex justify-between items-baseline mb-8 flex-col sm:flex-col">

                            <h1 className="text-4xl mb-6 font-bold text-gray-900">Spending Report</h1>

                            <div className=' w-full text-left mb-6'>
                                <button className="bg-gray-200 p-2 font-medium text-center rounded-xl px-4 ms-0 me-4">This Month</button>
                                <button className="bg-gray-200 p-2 font-medium text-center rounded-xl px-4 mx-4">Last Month</button>
                                <button className="bg-gray-200 p-2 font-medium text-center rounded-xl mb-0 px-4 mx-4">Last 3 Months</button>
                            </div>

                            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow w-full">
                                <BarChart
                                    yAxis={[{ data: categories }]}
                                    series={[
                                        {
                                            data: values,
                                            color: '#4f46e5',
                                            highlightScope: { item: 'series' },
                                            itemStyle: {
                                                stroke: '#1e40af',
                                                strokeWidth: 2,
                                                borderRadius: 4,
                                            },
                                        },
                                    ]}
                                    layout="horizontal"
                                    height={400}
                                    grid={{ vertical: false }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Report