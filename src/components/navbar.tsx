import React from 'react'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { IoLanguageOutline } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ModeToggle } from '@/components/ui/mode-toggle';
import { buttonVariants } from '@/components/ui/button';

export default function Navbar() {

    return (
        <div className='fixed top-0 w-full h-[60px] z-20 flex items-center justify-between px-8 shadow-md bg-[#E7E8C1] dark:bg-[#111119] dark:shadow-purple-400/20'>
            <div className='text-black text-lg dark:text-white font-roboto'>
                <Link href='/'>ENDevelopment</Link>
            </div>

            <div>
                <Link className={`${buttonVariants({ variant: 'link', size: 'sm' })} text-black font-light font-roboto`} href='/about'>
                    about
                </Link>
                <Link className={`${buttonVariants({ variant: 'link', size: 'sm' })} text-black font-light font-roboto`} href='/contact'>
                    contact
                </Link>
            </div>

            <div className='flex w-[260px] items-center justify-evenly'>
                <Link href='https://www.linkedin.com/in/erick-nunes-a243742b1/' target='blank' className='w-[24px] h-[24px]'>
                    <AiFillLinkedin color='black dark:white' size={24} />
                </Link>
                <Link href='https://github.com/erickNA2' target='blank' className='w-[24px] h-[24px]'>
                    <AiFillGithub color='black dark:white' size={24} />
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <IoLanguageOutline color='black dark:white' size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select Idiom</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Português - br</DropdownMenuItem>
                        <DropdownMenuItem>English - en</DropdownMenuItem>
                        <DropdownMenuItem>Français - fr</DropdownMenuItem>
                        <DropdownMenuItem>日本語 - jp</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <ModeToggle/>
            </div>
        </div>
    )
}
