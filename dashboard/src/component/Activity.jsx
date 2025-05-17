import React from 'react'

const Sidebar = () => {
    return (
        <aside className="w-full sm:w-100 border-r border-gray-200 p-4">
            <h2 className="text-xl text-left font-semibold mb-6">Quick actions</h2>
            <nav className="space-y-4">

                <div className="flex items-start space-x-3 group cursor-pointer">
                    <div className="text-gray-500 group-hover:text-blue-600">df</div>
                    <div>
                        <p className="font-medium text-sm text-gray-900 group-hover:text-blue-600">ef</p>
                        <p className="text-xs text-gray-500"> ef</p>
                    </div>
                </div>

            </nav>
        </aside>
    )
}


const Activity = () => {
    return (
        <>
            <main className="pt-8 pb-8">
                <div className="max-w-9xl mx-auto px-0 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex justify-between items-baseline mb-8 flex-col sm:flex-col">
                            <div className="w-full flex gap-4 mb-10">
                                <Sidebar />
                                <div className='w-70 flex justify-between items-center'>
                                    <h1 className="text-4xl mb-6 font-bold text-gray-900">Spending Report</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Activity
