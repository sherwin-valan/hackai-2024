import * as React from 'react'; 
import Cards from './Cards';

function AboutSection()
{
    return (
        <div className="relative text-black">
            <img className="w-full" src="/speakers-bg.png" alt="speakers background image" />
            <div className="absolute w-full pt-2.5 top-1/4 text-xl text-center leading-4 justify-center place-content-center">
                <div className="pb-2.5">MEET OUR SPEAKERS</div>
                <Cards/>
            </div>
        </div>
    )
}

export default AboutSection;
