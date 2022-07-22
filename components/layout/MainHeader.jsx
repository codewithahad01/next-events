import Link from 'next/link'
import React from 'react'

function MainHeader() {
    return (
        
        <header className='flex flex-row text-violet-400 justify-between bg-gray-800 py-6 px-4 md:text-4xl'>
            <div className='font-extrabold text-2xl '>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className=''>
                <uL>
                    <li className='text-xl'>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </uL>
            </nav>
        </header>
    )
}

export default MainHeader