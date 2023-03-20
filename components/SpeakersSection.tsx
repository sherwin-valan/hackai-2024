import * as React from 'react'; 
import SpeakerCards from './SpeakerCards';

function AboutSection()
{
    return (
        <div className="relative text-black">
            <img className="w-full" src="/speakers-bg.png" alt="speakers background image" />
            <div className="absolute w-full pt-2.5 top-1/4 text-xl text-center leading-4 justify-center place-content-center sm:px-8 md:px-28 lg:px-40">
                <div className="pb-14 text-3xl">MEET OUR SPEAKERS</div>
                <SpeakerCards/>
            </div>
        </div>
    )
}

export default AboutSection;
