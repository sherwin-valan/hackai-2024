import { useState } from 'react'
import { useSpring, easings, animated } from 'react-spring'
import { Typography, Button } from '@mui/material';

export default RegisterPulse;

function RegisterPulse(props)
{
  const pulse = useSpring
  ({
      from:{ opacity:1, scalex:0.9, scaley:0.6 },
      to:{ opacity:0, scalex:1.25 , scaley:2 },
      loop:true,
      delay:0,
      config:{ mass:10, tension:30, friction:25, clamp:true }
  })

  return(
    <div className={props.className}>
      <animated.div id="register pulse" className="absolute bg-[#FF1122] w-[16rem] h-[4rem] rounded-[1.3rem] blur-[2px] -z-10"
        style={pulse}/>

      <button onClick={() => window.open("https://coda.io/form/HackAI-2022_d4OphGKMDDl", "_blank")} className="w-[16rem] h-[4rem] bg-white rounded-[1.3rem] border-[3px] border-black hover:[transform:scale(1.07)] text-black font-bold uppercase z-0">
        <Typography variant="h6" fontFamily={"var(--lucidity)"}>Register Now</Typography>
      </button>
    </div>
  )
}