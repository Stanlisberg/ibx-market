import React from 'react'
import { GoDotFill } from "react-icons/go";

function NewCourses() {
  return (
    <>
    <div className='flex justify-between items-center mt-[20px]'>
       <div className='flex justify-center items-center'>
        <GoDotFill size='5' color='grey' className='mt-[3px]'/> <p className='text-zinc-950 text-[16px] font-semibold uppercase'>New Courses(Book)</p>
       </div>
       <ul className='flex text-[12px] cursor-pointer justify-center items-center'>
        <li className='mx-[2px] px-3 py-[6px] font-medium inline-flex bg-neutral-100 rounded-[10px] justify-center items-center capitalize text-zinc-950'>All course</li>
        <li className='mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium'>Design</li>
        <li className='mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium'>Development</li>
        <li className='mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium'>Photography</li>
        <li className='mx-[2px] hover:bg-neutral-100 hover:rounded-[10px] px-3 py-[6px] font-medium'>Music</li>
        <li className='bg-neutral-100 rounded-[5px] px-2 py-[6px]'> <img src='icons/funnel.svg' className='' width='15'/> </li>
       </ul>
    </div>
    </>
  )
}

export default NewCourses