import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Activity from './component/Activity';
import Transactions from './component/Transactions';
import Report from './component/Report';
import './App.css'

function App() {

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Router >

          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Report" element={<Report />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
