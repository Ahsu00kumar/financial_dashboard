import * as React from 'react'
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

// Dashboard Cards
const Card = ({ title, price }) => (
    <div className="bg-white border-1 border-slate-200 rounded-xl p-5 shadow-sm">
        <p className="text-sm text-start font-semibold text-gray-900 mb-2 text-lg">{title}</p>
        <h2 className="text-2xl text-start font-bold text-gray-900">{price}</h2>
    </div>
); 


const Dashboard = () => {

    // useState hooks to manage state
    const [selectedFilter, setSelectedFilter] = useState('this-month');
    const [months, setMonths] = useState([]);
    const [values, setValues] = useState([]);

 
    // This function updates the selected filter and logs it to the console 
    const handleFilterChange = (e) => {
        const filter = e.target.value;
        setSelectedFilter(filter);
        console.log("Selected filter:", filter);
    };


    // useEffect hook to update the months and values based on the selected filter This hook runs whenever the selectedFilter changes
    useEffect(() => {
        if (selectedFilter === 'this-month') {
            setMonths(['', 'May']);
            setValues([30, 35]);
        } else if (selectedFilter === 'last-3-months') {
            setMonths(['Mar', 'Apr', 'May']);
            setValues([30, 20, 35]);
        } else if (selectedFilter === 'last-quarter') {
            setMonths(['Jan', 'Feb', 'Mar']);
            setValues([15, 8, 20]);
        }
    }, [selectedFilter]);


    return (
        <>
            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex justify-between items-baseline mb-8 flex-col sm:flex-col">

                            <div className='w-full'>
                                <h1 className="text-4xl mb-6 text-left font-bold text-gray-900">Dashboard</h1>
                                <div className="w-full flex justify-between items-center mb-6">
                                    <p className="text-md text-sky-700 font-normal">Your current financial overview</p>
                                    <select className='bg-white p-2 border rounded-lg border-slate-300' id="month" onChange={handleFilterChange}>
                                        <option value="this-month">This Month</option>
                                        <option value="last-3-months">Last 3 Months</option>
                                        <option value="last-quarter">Last Quarter</option>
                                    </select>
                                </div>

                            </div>

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <Card title="Total Balance" price="$12,345.67" />
                                <Card title="Monthly Income" price="$7890.12" />
                                <Card title="Monthly Expenses" price="$3,456.78" />
                                <Card title="Saving Ratio" price="56%" />
                            </div>


                            <div className='w-full flex justify-between items-baseline mb-8 flex-col sm:flex-col'>
                                <h2 className=" text-md text-gray-900 font-medium mb-6">Net Worth over Time</h2>
                                <div className="rounded-lg bg-white rounded-xl shadow w-full p-6">


                                    <LineChart
                                        className='w-full'
                                        xAxis={[{ data: months, scaleType: 'point' }]}
                                        series={[{ data: values, area: false, showMark: false }]}
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

export default Dashboard;
