import React from 'react'
import {Link } from 'react-router-dom';
import Avtar from '../assets/avtar.png';
function Header() {
    return (

        <nav>
            <div className='flex justify-between items-center bg-light-800 text-dark px-6 py-4 border-b border-gray-300'>
                <Link to='/' className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diamond-half" viewBox="0 0 16 16">
                        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.5.5 0 0 1-.35.145z" />
                    </svg>
                    <h5 className='font-semibold text-xl  px-3'>Expense Tracker</h5>
                </Link>

                <div className='flex items-center'>
                    <Link to="/" className='font-medium px-4'>Dashboard</Link>
                    <Link to="/activity" className='font-medium px-4'>Activity</Link>
                    <Link to="/transactions" className='font-medium px-4'>Transactions</Link>
                    <Link to="/report" className='font-medium px-4'>Report</Link>
                    <Link className='bg-slate-100 rounded-xl font-medium px-3 py-3 flex mr-4'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                            </svg>
                        </span>
                    </Link>
                    <Link className='bg-slate-100 rounded-xl font-medium px-3 py-3 flex mr-6'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg>
                        </span>
                    </Link>
                    <Link className='rounded-full flex w-12 border-1 border-gray-300 p-1 overflow-hidden'>
                        <img src={Avtar} alt="Avtar" />
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Header
