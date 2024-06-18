'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { AiOutlineSelect } from "react-icons/ai"

export default function Prompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [input, setInput] = useState('')

    const handleInput = (e:any) => {
        console.log(e)
        e.preventDefault()
    }
  return (
    <>
        {
            isVisible && 
            <div className='fixed z-50 w-3/4 lg:w-1/5 h-1/3 bg-black flex flex-col items-center justify-between top-6 right-12 p-2' id='window' draggable >
                <div className='relative w-full h-6/8 bg-transparent'>
                    
                </div>
                <form action={handleInput} className='relative w-full h-1/8 bg-red-950'>
                    <label htmlFor='input'></label>
                    <input type='text' id='input' placeholder='> ' value={input} onChange={(e) => setInput(e.target.value)} className='relative bg-transparent text-white text-[14px] font-roboto' />
                </form>
            </div>
        }
        <div className='relative mt-[52px] w-full h-[32px] flex items-center justify-center'>
            <Button variant='link' onClick={() => {setIsVisible(!isVisible)}} className='flex items-center justify-center'>
            <AiOutlineSelect size={10} />prompt</Button>
        </div>
    </>
)
}
