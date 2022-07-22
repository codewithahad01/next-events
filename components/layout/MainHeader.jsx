import Link from 'next/link'
import React from 'react'

function MainHeader() {
    return (
        
        <header>
            <div>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav>
                <uL>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </uL>
            </nav>
        </header>
    )
}

export default MainHeader