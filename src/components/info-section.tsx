import { Typography } from "./typography"

export const InfoSection = () => {

    return (
        <>
            <div className='relative w-screen h-min-screen lg:h-screen'>
                <div className='w-screen h-1/3'>
                    <Typography variant='h1' className='text-center'>services</Typography>
                    <Typography variant='body-small' className='text-center'>Most relevants</Typography>
                </div>
                <div className='w-screen h-2/3 grid grid-cols-1 lg:grid-cols-3 gap-8 px-20 text-left'>
                    <div className='flex flex-col justify-evenly p-6 rounded-sm shadow-lg dark:shadow-purple-400/20'>
                        <Typography variant='h2'>Front-end development</Typography>
                        <Typography variant='body'>I specialize in creating modern, clean, and purpose-driven interfaces. My designs are meticulously planned and tailored 
                            to reflect your brands essence, bringing your vision to reality with precision. </Typography>
                    </div>
                    <div className='flex flex-col justify-evenly p-6 rounded-sm shadow-lg dark:shadow-purple-400/20'>
                        <Typography variant='h2'>Text Translation</Typography>
                        <Typography variant='body'>Expand your work and projects globally with my resilient, context-based translation services. 
                            I ensure your thoughts and ideas are communicated effectively to your entire community, regardless of location.
                        </Typography>
                    </div>
                    <div className='flex flex-col justify-evenly p-6 rounded-sm shadow-lg dark:shadow-purple-400/20'>
                        <Typography variant='h2'>Technology Consulting</Typography>
                        <Typography variant='body'>Struggling with system performance, results, or efficiency? 
                            I can help you understand data flow and develop systems to optimize management, reducing time wasted on repetitive tasks.</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}