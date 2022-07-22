import React from 'react'
import Button from '../ui/button'
import { useRef} from 'react'

function EventSearch(props) {
    const yearInputRef = useRef()
    const monthInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const selectedyear = yearInputRef.current.value
        const selectedmonth = monthInputRef.current.value

        props.onSearch(selectedyear, selectedmonth)
    }

    return (
        <form onSubmit={submitHandler} className='flex justify-center items-center mx-auto rounded-lg shadow-xl py-10 px-16 border bg-cyan-600 md:w-2/3 lg:w-3/6 '>
            <div className='flex justify-center items-center'>

                <div className='mx-2'>
                    <label className='font-bold' htmlFor="year">Year</label>
                    <select className='rounded-sm ring-4 md:mx-4' ref={yearInputRef} id='year'>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                <div className='mx-2'>
                    <label className='font-bold' htmlFor="month">Month</label>
                    <select className='rounded-sm ring-4 md:mx-4' ref={monthInputRef} id='month'>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div>
                    <Button>Find Events</Button>
                </div>
            </div>
            
        </form>
    )
}

export default EventSearch