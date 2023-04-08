import * as React from 'react'; 
import { Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function Schedule()
{
    return (
        <>
        <div className='flex justify-center items-center h-center'>
            <div className="font-sans-CooperHewitt text-4xl text-center p-20">
                <Typography fontFamily={"var(--lucidity)"} className="text-xl md:text-4xl font-bold">
                    SCHEDULE
                </Typography>
            </div>
        </div>
        <div className='justify-center h-center flex gap-[5vw]'>
            <img className='w-[45vw] object-contain justify-center hidden lg:block' src='schedule.svg'/>
            <Typography fontFamily={"var(--lucidity)"} className='pt-40'>
                Come back April 10th for more details!
            </Typography>
        </div>
        </>
    );
}

export default Schedule;