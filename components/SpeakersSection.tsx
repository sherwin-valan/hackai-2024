import * as React from 'react'; 
import Card from './about-animations/Card';

function AboutSection()
{
    return (
        <div className="relative text-black">
            <img className="w-full" src="/speakers-bg.png" alt="speakers background image" />
            <div className="absolute w-full py-2.5 top-1/4 text-xl text-center leading-4">
                MEET OUR SPEAKERS
                <Card/>
            </div>
        </div>
    )
}

export default AboutSection;

/**

- how many speakers?
    - will need to adjust spacing for the text or where the speakers non-expanded case goes if there are more than 3

- can all animations just be done in the same page as the about section?

 */
