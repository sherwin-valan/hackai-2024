import Head from 'next/head';
import * as React from 'react';
import Appbar from './Appbar'
import Landing from './Landing'
import AboutSection from './AboutSection';
import FooterSection from './Footer';
import SpeakersSection from './SpeakersSection';
import WorkWithUsSection from './WorkwithUs';
import Tracks from './Tracks';
import Schedule from './Schedule';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import FAQs from './FAQs';
import Partners from './Partners';

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
          <Appbar/>
        </section>
        <section id="landing" className="relative w-[100vw] h-[100vh] z-0">
          <Landing/>
        </section>
        <section id="about" className="relative z-0 mt-[min(25vh,25vw)]">
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
        <section id="faqs" style={{marginTop: '3rem'}}>
          <FAQs />
        </section>
        <section style={{backgroundColor: '#FEF9EE'}} id="partners">
          <img width="100%" src="top-red-triangles.svg" style={{marginTop: '-1px'}} />
          <Partners />
          <img width="100%" src="bottom-red-triangles.svg" />
        </section>
        <section id="work with us">
          <WorkWithUsSection/>
        </section>
        <div className="relative">
          <img className='absolute top-0 left-0 z-1 h-[146px]' src='/Rectangle 107.svg'/>
          <img  src='/Rectangle 108.svg'/>
        </div>
        <section id="footer">
          <FooterSection/>
        </section>
      </main>
    </>
  );
}
