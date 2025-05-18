import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const dataMap = {
    'This Month': {
        categories: ['Home', 'Food & Dining', 'Auto & Transport', 'Health & Fitness', 'Shopping', 'Travel', 'Entertainment'],
        values: [10, 20, 11, 13, 12, 2, 3],
    },
    'Last Month': {
        categories: ['Home', 'Food & Dining', 'Auto & Transport', 'Health & Fitness', 'Shopping', 'Travel', 'Entertainment'],
        values: [7, 15, 14, 10, 8, 3, 6],
    },
    'Last 3 Months': {
        categories: ['Home', 'Food & Dining', 'Auto & Transport', 'Health & Fitness', 'Shopping', 'Travel', 'Entertainment'],
        values: [25, 45, 35, 40, 30, 10, 15],
    },
};


const Report = () => {
    const [period, setPeriod] = React.useState('This Month');
    const { categories, values } = dataMap[period];


    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex flex-col mb-8">

                            <h1 className="text-4xl font-bold text-gray-900 mb-6">Spending Report</h1>

                            {/* Period Buttons */}
                            <div className="w-full text-left mb-6 flex flex-wrap gap-2">
                                {Object.keys(dataMap).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setPeriod(key)}
                                        className={`px-4 py-2 rounded-xl font-medium transition-colors ${period === key ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                            }`}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>

                            {/* Chart container */}
                            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow w-full overflow-x-auto">
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