import Head from 'next/head';
import * as React from 'react';


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
      <main className="min-h-screen bg-[#1A2025] font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-10 uppercase text-black font-bold text-xl">
          <nav className="bg-[url('/appbar-bg.png')] bg-auto bg-repeat-x bg-clip-content w-[100vw] h-[5rem] grid grid-cols-3 place-items-center">
            <div className="">Hack AI</div>
            <div className="flex gap-10">
              <a href="" className="">About</a>
              <a href="" className="">Schedule</a>
              <a href="" className="">Faqs</a>
              <a href="" className="">Sponsors</a>
            </div>
            <div className="flex gap-4">
              <a href="">
                <img src="insta-icon.png" className="h-[1.5rem] object-contain"/>
              </a>
              <a href="">
                <img src="yt-icon.png" className="h-[1.5rem] object-contain"/>
              </a>
              <a href="">
                <img src="linkedin-icon.png" className="h-[1.5rem] object-contain"/>
              </a>
              <a href="">
                <img src="discord-icon.png" className="h-[1.5rem] object-contain"/>
              </a>
            </div>
          </nav>
        </section>
        <div id="landing offset" className="h-[5rem]"/>
        <section id="landing" className="relative w-[100vw] h-[100vh] grid grid-cols-3 lg:grid-cols-2 z-0">
          <div className="absolute bg-[url('/bg-triangles.svg')] bg-no-repeat bg-clip-content bg-[percentage:300%_300%] bg-[calc(62.5%+15rem)_calc(62.5%+5rem)] w-[200vw] h-[200vh] pb-[100vh] -z-10"/>
          <div className="flex flex-col items-center text-center mt-[14rem] px-[6rem]">
            <div className="mb-[2rem] text-5xl">
              Ignite your AI passion!
            </div>
            <div className="text-xl">
              Join us and WIN PRIZES ;{')'}
              <br/>
              Location: TBA
            </div>
            <div className="mt-[4rem] w-[16rem] h-[4rem] rounded-[1.3rem] bg-black">
              <button className="w-[16rem] h-[4rem] bg-[#DDDDDD] rounded-[1.3rem] border-[3px] border-black text-black font-bold uppercase hover:translate-x-[-6px] hover:translate-y-[-8px]">
                Sign me up
              </button>
            </div>
          </div>
          <div className="flex col-span-2 lg:col-span-1 justify-center lg:justify-start">
            <div id="container for slot machine stuff" className="">
              <img src="pixel-stars.png" className="h-[4rem] w-[30rem] object-contain my-[2rem]"/>
              <div className="bg-[url('/slot-machine.png')] bg-no-repeat bg-contain bg-center h-[35rem] w-[30rem] flex flex-col items-start">
                <div id="screen shadow container" className="flex w-[30rem] mt-[11.4rem] absolute">
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[3.8rem] object-fill"/>
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[0.55rem] object-fill"/>
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[0.6rem] object-fill"/>
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[0.55rem] object-fill"/>
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[0.6rem] object-fill"/>
                  <img src="slot-screen-shadow.svg" className="w-[3.3rem] ml-[0.6rem] object-fill"/>
                </div>
                <img src="hackai-slots.png" className="h-[6.35rem] w-[30rem] object-contain ml-[3px] mt-[12rem]"/>
                <img src="stop.png" className="h-[4.8rem] w-[30rem] object-contain mt-[3.7rem]"/>
              </div>
              <img src="slot-machine-shadow.png" className="h-[5rem] w-[30rem] object-contain mt-[1rem]"/>
            </div>
            <img src="handle.png" className="h-[20rem] w-[4rem] object-contain mt-[17rem] -ml-[1rem]"/>
          </div>
        </section>
        <section id="about" className="h-[100vh]">  
          Next section here.
        </section>
        <section id="schedule">

        </section>
        <section id="faqs">

        </section>
        <section id="sponsors">

        </section>
        <section id="footer">

        </section>
      </main>
    </>
  );
}
