import Head from 'next/head';
import * as React from 'react';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/Footer';
import SpeakersSection from '../components/SpeakersSection';
import WorkWithUsSection from '../components/WorkwithUs';
import Tracks from '../components/Tracks';
import Schedule from '../components/Schedule';

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
      <main className="min-h-screen bg-[#1A2025] font-lucidity text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="flex justify-center">
          <img src="appbar-bg.png" className="min-w-[104vw] h-[5rem] object-cover">

          </img>
        </section>
        <section id="landing" className="h-[50rem] grid grid-cols-2">
          <div className="mt-[6rem] md:px-[6rem] text-center">
            <div className="py-[2rem] uppercase text-5xl">
              Coming Soon!
              <br/>
              April 15-16
            </div>
            <div className="text-xl">
              Get ready to ignite your AI passions at our electrifying hackathon! Collaborate with like-minded individuals, push your limits, and unleash cutting-edge AI projects. The possibilities are endless, and the excitement is real. Join us now!
            </div>
          </div>
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
