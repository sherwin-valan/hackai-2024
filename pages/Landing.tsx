import * as React from 'react';
import { Typography } from '@mui/material';
import { Fireworks } from 'fireworks-js'
import RegisterPulse from '../components/register-pulse';

export default function Landing() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };

  setTimeout(() =>
  {
    const container = document.getElementById('fireworks') //located in the landing section
    const fireworks = new Fireworks(container, {rocketsPoint:{min:20, max:80}})
    fireworks.start()
  }, 100)

  return (
    <>
      <div className="absolute bg-[url('/top-gradient.svg')] h-[10rem] w-[100vw]"/>
      <div id="fireworks" className="absolute h-[100vh] w-[100vw] -z-50"/>
      <div className="absolute bg-[url('/city-bg.png')] bg-no-repeat bg-contain bg-center h-[100vh] w-[100vw] translate-y-[50vh] -z-40"/>
      <div className="absolute bg-[url('/red-star.png')] bg-no-repeat bg-contain h-[25vh] w-[25vw] mt-[15vh] ml-[25vw] -z-30"/>
      <div className="absolute bg-[url('/casino-glow.svg')] bg-no-repeat bg-contain bg-center
        mx-[8vw] my-[8vh] h-[84vh] w-[84vw]
        sm:mx-[13vw] sm:my-[13vh] sm:h-[74vh] sm:w-[74vw]
        med:mx-[18vw] med:my-[18vh] med:h-[64vh] med:w-[64vw]
      -z-20">
        <div className="absolute bg-[url('/casino-sign.png')] bg-no-repeat bg-contain bg-center
          mx-[2vw] my-[2vh] h-[80vh] w-[80vw]
          sm:mx-[2vw] sm:my-[2vh] sm:h-[70vh] sm:w-[70vw]
          med:mx-[2vw] med:my-[2vh] med:h-[60vh] med:w-[60vw]
        -z-10"/>
      </div>
      <div className="absolute text-center text-[#7797A2] [lineHeight:1] font-bold h-[100vh] w-[100vw] z-0 text-[calc(min(3vh,3vw))]">
        <div className="-mb-[calc(min(1.8vh,1.8vw))]
          mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(5vh,5vw)-3px-min(1.5vh,1.5vw))]
          sm:mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(4.5vh,4.5vw)-3px-min(1.5vh,1.5vw))]
          med:mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(4vh,4vw)-3px-min(1.5vh,1.5vw))]
          lg:mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(5vh,5vw)-3px-min(1.5vh,1.5vw))]
          xl:mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(6vh,6vw)-3px-min(1.5vh,1.5vw))]
          2xl:mt-[calc(49.5vh-min(1.8vh,1.8vw)+min(0.9vh,0.9vw)-min(7vh,7vw)-3px-min(1.5vh,1.5vw))]
        ">
          <p className="inline">AIS</p>
          <Typography fontFamily={"var(--campground)"} className="inline 
            text-[calc(min(3.6vh,3.6vw))]
            sm:text-[calc(min(3.6vh,3.6vw))]
            med:text-[calc(min(3.6vh,3.6vw))]
          ">
            {' '}Presents
          </Typography>
        </div>
        <p className="text-[#940E21] font-[2000] 
          text-[calc(min(10vh,10vw))]
          sm:text-[calc(min(9vh,9vw))]
          med:text-[calc(min(8vh,8vw))]
          lg:text-[calc(min(10vh,10vw))]
          xl:text-[calc(min(12vh,12vw))]
          2xl:text-[calc(min(14vh,14vw))]
        ">
          HACK AI
        </p>
        <p className="mt-[6px]">APRIL 15-16</p>
      </div>
      <RegisterPulse className="absolute mt-[83vh] ml-[calc(50vw-8rem)] w-[16rem] h-[4rem] z-0"/>
    </>
  );
}
