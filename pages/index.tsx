import Head from 'next/head';
import * as React from 'react';
import AboutSection from './AboutSection';
import FooterSection from './Footer';
import SpeakersSection from './SpeakersSection';
import WorkWithUsSection from './WorkwithUs';
import Tracks from './Tracks';
import Schedule from './Schedule';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import AppbarBG from '../components/appbar-bg';

// interface Card {
//   element: HTMLElement;
//   flipped: boolean;
// }

// const cards: Card[] = [];

// const flipCard = (card: Card) => {
//   if (card.flipped) {
//     card.element.classList.remove('card-flip');
//   } else {
//     card.element.classList.add('card-flip');
//   }
//   card.flipped = !card.flipped;
// };

// const initCards = () => {
//   const deck = document.getElementById('deck');
//   const cardElements = deck.getElementsByClassName('card');
//   for (let i = 0; i < cardElements.length; i++) {
//     //const cardElement = cardElements[i];
//     //const card: Card = {};
//     //cardElement.addEventListener('click', () => flipCard(card));
//     //cards.push(card);
//   }
// };

// initCards();

export default function HomePage() {
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

  return (
    <>
      <Head>
        <title>HackAI</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Welcome to HackAI: the biggest AI hackathon in North Texas!"
        />
      </Head>
      <main className="min-h-screen bg-[#1A2025] font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-10 uppercase text-white font-bold text-xl">
          <AppbarBG transparencyThreshold="0.2"/>
          <nav className="bg-transparent w-[100vw] h-[5rem] grid grid-cols-2 md:grid-cols-3 place-items-center">
            <div onClick={() => {handleItemClick('landing')}} className="flex gap-4 items-center [cursor:pointer]">
              <img src="hackai-logo.png" className="h-[3rem] object-contain"/>
              <div className="">Hack AI</div>
            </div>
            <div className="gap-10 col-span-2 justify-self-start hidden md:flex lg:col-span-1 lg:justify-self-center">
              <div onClick={() => {handleItemClick('about')}} className="[cursor:pointer]">About</div>
              <div onClick={() => {handleItemClick('schedule')}} className="[cursor:pointer]">Schedule</div>
              <div onClick={() => {handleItemClick('faqs')}} className="[cursor:pointer]">Faqs</div>
              <div onClick={() => {handleItemClick('sponsors')}} className="[cursor:pointer]">Sponsors</div>
            </div>
            <div className="flex md:hidden">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <img src="hamburger-icon.svg" className="h-[1.5rem] object-contain"/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => {handleItemClick('about')}}>About</MenuItem>
                <MenuItem onClick={() => {handleItemClick('schedule')}}>Schedule</MenuItem>
                <MenuItem onClick={() => {handleItemClick('faqs')}}>Faqs</MenuItem>
                <MenuItem onClick={() => {handleItemClick('sponsors')}}>Sponsors</MenuItem>
              </Menu>
            </div>
            <div className="hidden lg:flex gap-4">
              <button onClick={() => window.open("https://www.aisutd.org", "_blank")}>
                <img src="www-icon.svg" className="h-[1.5rem] object-contain"/>
              </button>
              <button onClick={() => window.open("https://www.instagram.com/utdais", "_blank")}>
                <img src="insta-icon.svg" className="h-[1.5rem] object-contain"/>
              </button>
              <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}>
                <img src="yt-icon.svg" className="h-[1.5rem] object-contain"/>
              </button>
              <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd", "_blank")}>
                <img src="linkedin-icon.svg" className="h-[1.5rem] object-contain"/>
              </button>
              <button onClick={() => window.open("https://discord.gg/tEfAAHpFAX", "_blank")}>
                <img src="discord-icon.svg" className="h-[1.5rem] object-contain"/>
              </button>
            </div>
          </nav>
        </section>
        <section id="landing" className="relative w-[100vw] h-[100vh] z-0">
          <div className="absolute bg-[url('/top-gradient.svg')] h-[10rem] w-[100vw]"/>
          <div className="absolute bg-[url('/city-bg.png')] bg-no-repeat bg-contain bg-center h-[100vh] w-[100vw] translate-y-[50vh] -z-50"/>
          <div className="absolute bg-[url('/red-star.png')] bg-no-repeat bg-contain h-[25vh] w-[25vw] mt-[15vh] ml-[25vw] -z-40"/>
          <div className="absolute bg-[url('/casino-glow.svg')] bg-no-repeat bg-contain bg-center
            mx-[8vw] my-[8vh] h-[84vh] w-[84vw]
            sm:mx-[13vw] sm:my-[13vh] sm:h-[74vh] sm:w-[74vw]
            med:mx-[18vw] med:my-[18vh] med:h-[64vh] med:w-[64vw]
          -z-30">
            <div className="absolute bg-[url('/casino-sign.png')] bg-no-repeat bg-contain bg-center
              mx-[2vw] my-[2vh] h-[80vh] w-[80vw]
              sm:mx-[2vw] sm:my-[2vh] sm:h-[70vh] sm:w-[70vw]
              med:mx-[2vw] med:my-[2vh] med:h-[60vh] med:w-[60vw]
            -z-20"/>
          </div>
          <div className="absolute text-center text-[#7797A2] [lineHeight:1] font-bold h-[100vh] w-[100vw] -z-10 text-[calc(min(3vh,3vw))]">
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
            <p className="text-[#940E21] font-[1000] 
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
          <button onClick={() => window.open("https://coda.io/form/HackAI-2022_d4OphGKMDDl", "_blank")} className="mt-[83vh] ml-[calc(50vw-8rem)] w-[16rem] h-[4rem] bg-white rounded-[1.3rem] border-[3px] border-black text-black font-bold uppercase hover:[transform:scale(1.07)] z-0">
            Register Now
          </button>
        </section>
        <section id="about">
          <AboutSection/>
        </section>
        <section id="speakers">
          <SpeakersSection/>
        </section>
        <section id="tracks">
          <Tracks />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="faqs">

        </section>
        <section id="sponsors">

        </section>
        <section id="work with us">
          <WorkWithUsSection/>
        </section>
        <div className="relative">
          <img className='absolute top-0 left-0 z-1 h-[146px]' src='/Rectangle 107.svg'/>
          <img src='/Rectangle 108.svg'/>
        </div>
        
        <section id="footer">
          <FooterSection/>
        </section>
      </main>
    </>
  );
}
