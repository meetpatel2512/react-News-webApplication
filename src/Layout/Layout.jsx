import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="m-auto max-w-[1280px]  bg-slate-200 py-5 min-h-screen">
            <Navbar />
            <Outlet />
      </div>
    )
}