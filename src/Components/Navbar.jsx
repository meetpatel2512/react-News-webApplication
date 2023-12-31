import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex flex-col'>
            <div className="logo flex justify-center h-[100px] my-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRbt5JNYljytLdp5p7oEjOrLk3eHlBjlQAQ&usqp=CAU" alt="" className=' mix-blend-multiply w-full h-full object-contain' />
            </div>
            <ul className='py-5 flex md:justify-center border-b-2 border-t-2 border-slate-400 overflow-x-scroll lg:overflow-auto px-5'>
                <li className=' flex gap-7'>
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>home</NavLink>
                    <NavLink to="/business" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>business</NavLink>
                    <NavLink to="/entertainment" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>entertainment</NavLink>
                    <NavLink to="/health" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>health</NavLink>
                    <NavLink to="/science" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>science</NavLink>
                    <NavLink to="/sports" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>sports</NavLink>
                    <NavLink to="/technology" className={({ isActive }) => `${isActive ? "text-red-500 capitalize" : "text-black capitalize"}`}>technology</NavLink>

                </li>
            </ul>
        </div>
    )
}
