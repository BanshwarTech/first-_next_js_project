
"use client";

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <>
            <nav className="bg-dark shadow-md  py-3 broder-b border-white-200 ">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <Link href="/" className="text-xl font-bold text-indigo-600">
                        MY First Next.js App
                    </Link>

                    <div className="hidden md:flex space-x-4 items-center">
                        <Link href="/" className="text-white-700 hover:text-indigo-600">Home</Link>
                        <Link href="/about" className="text-white-700 hover:text-indigo-600">About</Link>
                        <div className="relative group inline-block">
                            <button className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-200">
                                Admin
                            </button>

                            <div className="absolute left-0 mt-2 w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                                <Link
                                    href="/dashboard"
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white transition-colors duration-200 rounded-t-md"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/dashboard/analytics"
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white transition-colors duration-200"
                                >
                                    Analytics
                                </Link>
                                <Link
                                    href="/dashboard/users"
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white transition-colors duration-200 rounded-b-md"
                                >
                                    Users
                                </Link>
                            </div>
                        </div>



                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                        <div>
                            <button className="block px-4 py-2 text-left w-full hover:bg-gray-100">Services ▼</button>
                            <div className="pl-4">
                                <Link href="/web" className="block px-4 py-2 hover:bg-gray-100">Web Dev</Link>
                                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link>
                                <Link href="/design" className="block px-4 py-2 hover:bg-gray-100">Design</Link>
                            </div>
                        </div>

                    </div>
                )}
            </nav>
        </>

    )
}

export default Navbar
