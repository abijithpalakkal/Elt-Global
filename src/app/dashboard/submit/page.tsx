import Image from 'next/image'
import React from 'react'
import piechart from "../../../../public/Property 1=CMA USA.svg"

const Page = () => {
    return (
        <div className='  h-full w-full flex justify-center items-center'>
            <div className='w-full md:w-1/2'>
                <div className=' w-full md:w-2/3'>
                    <div className='md:text-3xl text-center mb-4'>Your results based on your answers:</div>
                    <div className=' flex w-full bg-white py-8 px-6 rounded-lg'>
                        <div className='w-2/3'>
                            <p className='text-black md:text-lg font-medium'>you are most suitable for </p>
                            <p className='md:text-xl font-semibold'>Association of Chartered </p>
                            <p className='md:text-xl font-semibold'>Certified Accountant <span className='text-orange-500'>(ACCA)</span></p>
                            <p className='text-sm'>Association of Chartered Certified Accountants are professionals who
                                are responsible for the financial management of companies, financial
                                reporting, auditing, taxation, and other financial aspects of the business.
                                They have a global recognition and are highly sought after in the
                                finance industry for their expertise. Join this elite group and make a global impact.</p>
                        </div>
                        <div className=''>
                            <Image src={piechart} alt={piechart} className='md:w-full md:h-full' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page
