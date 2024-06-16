'use client'

import { Typography } from '@/components/typography';
import Cube from '@/components/cube'

export default function Home() {
  return (
    <main className='relative flex flex-col lg:flex-row w-screen h-auto lg:h-screen p-48 lg:p-0'>
      <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center'>
        <Typography variant='h1' className='w-auto md:w-3/4 text-center text-wrap'>Erick Nunes</Typography>
        <Typography variant='body-small' className='text-center w-3/4'>Fullstack Developer <span>|</span> Web Designer <span>|</span> IT consultant</Typography>
      </div>
      <div className='relative w-auto lg:w-1/2 h-auto'>
        <Cube />
      </div>
    </main>
  );
}
