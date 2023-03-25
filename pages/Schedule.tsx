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
        <div className='justify-center h-center flex pr-10'>
            <img className='justify-center h-center flex pr-40' src='schedule.png'></img>
            <Typography fontFamily={"var(--lucidity)"} className='pt-40'>
                Come back later for more detail!
            </Typography>
        </div>
        </>
    );
}

export default Schedule;