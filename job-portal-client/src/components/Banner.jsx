import React from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"

 const Banner=({query, handleInputChange}) => {

  console.log(query)
return (
<div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 '>
    <h1 className='text-5xl font-bold text-primary mb-3'>Find your <span className='text-green'>new internship</span> today</h1>
    <p  className=' text-lg text-green/85 mb-8'>Thousands of internship in various sectors are waiting for you.</p>

    <form>
        <div className=' flex justify-start md:flex-row flex-col md:gap-4 gap-4'>
            <div className='blur-box flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green md:w-1/2 w-full'>
                <input type="text"
                 name="title"
                  id="title" 
                  placeholder='What position are you looking for?' 
                  className='placeholder:text-ly block flex-1 border-0 bg-transparent py-1.5 pl-8 text-white placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                onChange={handleInputChange}
                value={query}
                />
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400 '/>
            </div>
            <div className='blur-box flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
              focus-within:ring-2 focus-within: ring-inset focus-within:ring-green md:w-1/3 w-full  '>
              <input type="text" name="title" id="title" placeholder='Location' className='placeholder:text-ly block flex-1
               border-0 bg-transparent py-1.5 pl-8 text-white placeholder:text-gray-400 focus:right-0
               sm:text-sm sm:leading-6'
            />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400 '/>
         </div>
         <button type='submit' className='bg-green py-2 px-8 text-dk md:rounded'>Search </button>
        </div>
    </form>
</div>
)
}
export default Banner
