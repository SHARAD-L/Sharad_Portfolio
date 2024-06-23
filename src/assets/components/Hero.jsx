import React, { useEffect } from 'react';
import { SpacemanCanvas } from ".";


const Hero = ({ scrollContainer }) => {

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax > *');

      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="parallax">
      <div className='parallax__content'>
        <div id='name-container' className="flex-1 lg:mb-0 sm:mb-[60vh] sm:text-[10px]">
          <h1 id="name-id">Sharad <br /> Lakshmanan
            <div className="roller">
              <span id="rolltext">
                Programmer<br />
                Designer<br />
                Gamer<br />
              </span>
            </div>
          </h1>
        </div>
        <div className="flex-1 flex justify-start lg:justify-end ml-8 xs:ml-[-4vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='side-content'>
            Frontend Developer <br /> Creating Aesthetic <br /> UI/UX designs
          </div>
        </div>
      </div>
      <img className="parallax__stars" data-speed="0.8" src="src/assets/parallax/1Stars.svg" alt="Stars"/>
      <img className="parallax__planets" data-speed="0.7" src="src/assets/parallax/2Planets.svg" alt="Planets"/>
      <img className="parallax__mountain1" data-speed="0.5" src="src/assets/parallax/3Mountain.svg" alt="Mountain"/>
      <img className="parallax__mountain2" data-speed="0.4" src="src/assets/parallax/4Mountain.svg" alt="Mountain"/>
      <img className="parallax__crater" data-speed="0.3" src="src/assets/parallax/5Crater.svg" alt="Crater"/>
      <img className="parallax__sun" data-speed="0.6" src="src/assets/parallax/6Sun.svg" alt="Sun"/>
      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
