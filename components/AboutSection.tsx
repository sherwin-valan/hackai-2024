import * as React from 'react'; 

function AboutSection()
{
    return (
        <div className="mx-auto py-14 px-24 text-white">
            
            <div className="flex">
                <div className="mb-2 mr-10">
                    <div className="mb-2 md:mb-4 text-xl md:text-3xl font-bold">ABOUT</div>
                </div>
                <div className="">
                    <div className="mb-6">
                        <div className="text-xl md:text-2xl font-bold flex">
                            <img src="/brain-icon.png" className="mr-3"/>
                            What is HackAI
                        </div>
                        <div className="text-sm md:text-lg">
                        Student-run hackathon organized by the Artificial Intelligence Society at UTD, aiming to connect today's students with the knowledge and resources needed to build Artificial Intelligence related projects in the span of 24 hours.
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="text-xl md:text-2xl font-bold flex">
                            <img src="/bullseye-arrow-icon.png" className="mr-3"/>
                            Our Mission
                        </div>
                        <div className="text-sm md:text-lg">
                        We hope to demystify this specialized niche in computer science and bring it forward to students through an AI-related hackathon. We aim for our in-person event to provide both learning and competition opportunities and connect them to professionals who can further guide them in their AI journey.
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="text-xl md:text-2xl font-bold flex">
                        <img src="/handshake-icon.png" className="mr-3"/>
                            Why HackAI
                        </div>
                        <div className="text-sm md:text-lg">
                        Sponsoring HackAI is a win-win opportunity. Your contribution can help participants complete company challenges while giving your company access to top tech talent, advertising opportunities, branding recognition, tech talk presentation time, product showcase, and even potential business challenge solutions.
                        </div>
                    </div>
                    <img className="" src="/chip.png" alt="about hackai chips"/>
                </div> 
            </div>
        </div>
    )
}

export default AboutSection;

/**
 * 
 *  <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2 text-white">
            <div className="mb-2">
                <div className="mb-2 md:mb-4 text-xl md:text-3xl font-bold">ABOUT</div>
                <div className="text-sm md:text-lg">
                Student-run hackathon organized by the Artificial Intelligence Society at UTD, aiming to connect today's students with the knowledge and resources needed to build Artificial Intelligence related projects in the span of 24hr.
                </div>
            </div>
            <img className="md:py-8 md:w-30 md:float-right md:-translate-y-40 hidden md:block" src="/chip.png" alt="cube" width="170"/>
            <div className="backdrop-blur-md bg-white/30 border rounded-md p-2 mb-20 text-center">
                <div className="mb-2 md:mb-4 text-lg md:text-3xl font-bold">Mission</div>
                <div className="text-sm md:text-lg">
                    We hope to demystify this specialized niche in computer science and bring it forward to students through an AI-related hackathon. We aim for our in-person event to provide both learning and competition opportunities and connect them to professionals who can further guide them in their AI journey.
                </div>
            </div>
            <img className="md:w-30 md:float-left md:-translate-x-4 md:-translate-y-32 hidden md:block" src="/chip.png" alt="supertoroid" width="150"/>
            <img className="md:w-30 md:float-right md:-translate-y-40 hidden md:block" src="/chip.png" alt="cube" width="170"/>
            <div className="backdrop-blur-md bg-white/30 border rounded-md p-2 mb-2 text-center">
                <div className="mb-2 md:mb-4 text-lg md:text-3xl font-bold">Why HackAI</div>
                <div className="text-sm md:text-lg">
                    Sponsoring HackAI is a win-win situation, as your contribution could allow us to provide the resources our participants need to complete company challenges. In return, your company or organization will gain access to top tech talent, advertising opportunities, branding recognition, time to present tech talks or showcase products, and even a potential solution to a business challenge you may provide.
                </div>
            </div>
            <img className="md:py-4 md:w-30 md:float-left md:-translate-x-4 md:-translate-y-32 hidden md:block" src="/chip.png" alt="supertoroid" width="150"/>
          </div>
*/

/**
 <img className="md:py-8 md:w-28 md:float-right md:-translate-y-20 hidden md:block" src="/chip.png" alt="cube" width="170"/>
            <img className="md:w-30 md:float-left md:-translate-x-4 md:-translate-y-32 hidden md:block" src="/chip.png" alt="supertoroid" width="150"/>
            <img className="md:w-34 md:float-right md:translate-y-44 hidden md:block" src="/chip.png" alt="cube" width="170"/>
            <div className="backdrop-blur-md bg-white/30 border rounded-md p-2 mb-20 text-center">
                <div className="mb-2 md:mb-4 text-lg md:text-3xl font-bold content flex items-center">
                    <img src="/bullseye-arrow-icon.png" />
                    Our Mission
                </div>
                <div className="text-sm md:text-lg">
                    We hope to demystify this specialized niche in computer science and bring it forward to students through an AI-related hackathon. We aim for our in-person event to provide both learning and competition opportunities and connect them to professionals who can further guide them in their AI journey.
                </div>
            </div>
            <div className="backdrop-blur-md bg-white/30 border rounded-md p-2 mb-2 text-center">
                <div className="mb-2 md:mb-4 text-lg md:text-3xl font-bold content flex">
                    <img src="/handshake-icon.png" />
                    Why HackAI
                </div>
                <div className="text-sm md:text-lg">
                    Sponsoring HackAI is a win-win situation, as your contribution could allow us to provide the resources our participants need to complete company challenges. In return, your company or organization will gain access to top tech talent, advertising opportunities, branding recognition, time to present tech talks or showcase products, and even a potential solution to a business challenge you may provide.
                </div>
            </div>
            <img className="md:py-4 md:w-28 md:float-left md:-translate-x-4 md:-translate-y-32 hidden md:block" src="/chip.png" alt="supertoroid" width="150"/>
 */