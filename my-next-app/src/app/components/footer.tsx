import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8 ">
            <div className="flex justify-between items-center max-w-7xl mx-auto ">
                <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
                <p>Powered by Next.js and Tailwind CSS</p>
            </div>
        </footer>
    )
}

export default Footer
