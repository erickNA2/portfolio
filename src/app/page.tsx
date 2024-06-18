'use client'

import { Typography } from '@/components/typography';
import Cube from '@/components/cube'
import { InfoSection } from '@/components/info-section';

export default function Home() {
  return (
    <main className='relative flex items-center justify-center flex-col w-screen min-h-screen'>
      <div className='relative flex items-center justify-center flex-col lg:flex-row w-screen min-h-screen'>
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-center'>
          <Typography variant='h1' className='w-auto md:w-3/4 text-center text-wrap'>Erick Nunes</Typography>
          <Typography variant='body-small' className='text-center w-screen lg:w-3/4'>Fullstack Developer <span>|</span> Web Designer <span>|</span> IT consultant</Typography>
        </div>
        <div className='relative flex items-center justify-center w-screen lg:w-1/2 h-1/3 lg:h-full overflow-hidden'>
          <Cube />
        </div>
      </div>
      <InfoSection />
    </main>
  );
}
