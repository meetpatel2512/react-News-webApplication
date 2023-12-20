import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="m-auto max-w-[1280px]  bg-slate-200 py-5 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
