import React from 'react'
import { FaComputer } from "react-icons/fa6";

const Services = () => {
  return (
    <>
    <h2 className='text-center font-bold text-4xl mt-6'>Our Services</h2>
    <div className='container mx-auto w-full grid lg:grid-cols-4 gap-10 py-12'>
        
        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Web Design</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Web Development</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Progrmming</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Problem Solving</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Git & Github</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>React JS</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>Redux</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

        <div className='border-2 px-6 py-12 rounded-2xl shadow-xl hover:shadow-2xl'>
            <span><FaComputer className='w-32 mx-auto text-4xl'/></span>
            <h2 className='text-center text-2xl font-bold mt-3'>JavaScript</h2>
            <p className='text-justify text-md font-semibold mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus accusamus iusto aspernatur modi? Facere.</p>
        </div>

    </div>
    </>
  )
}

export default Services