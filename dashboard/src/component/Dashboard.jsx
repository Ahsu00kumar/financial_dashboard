import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const values = [15, 8, 20, 10, 30, 35];


const Card = ({ title, value }) => (
    <div className="bg-white border-1 border-slate-200 rounded-xl p-5 shadow-sm">
        <p className="text-sm text-start font-semibold text-gray-900 mb-2 text-lg">{title}</p>
        <h2 className="text-2xl text-start font-bold text-gray-900">${value}</h2>
    </div>
);

const Dashboard = () => {
    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex justify-between items-baseline mb-8 flex-col sm:flex-col">
                            <h1 className="text-4xl mb-6 font-bold text-gray-900">Dashboard</h1>
                            <p className="text-md text-sky-700 font-normal mb-6">Your current financial overview</p>

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <Card title="Total Balance" value="12,345.67" />
                                <Card title="Monthly Income" value="7890.12" />
                                <Card title="Monthly Expenses" value="3,456.78" />
                                <Card title="Saving Ratio" value="56%" />
                            </div>

                         
                            <div className='w-full flex justify-between items-baseline mb-8 flex-col sm:flex-col'>
                                <h2 className=" text-md text-gray-900 font-medium mb-6">Net Worth over Time</h2>
                                <div className="rounded-lg bg-white rounded-xl shadow w-full p-6">
                                    <LineChart
                                        className='w-full'
                                        xAxis={[{ data: months, scaleType: 'point' }]}
                                        series={[{ data: values,  area: false, showMark: false }]}
                                        height={400}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Dashboard
