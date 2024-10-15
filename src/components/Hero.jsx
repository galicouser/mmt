import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videoSource from '../assets/videos/main.mp4';
import heroImage from '../assets/images/hero_image.png';
import '../assets/css/hero.css';
import Testimonials from './Testimonials';
import WhyChoose from './WhyChoose';
import ContactModal from './ContactModal'; // Import Modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-blue-900">
                {/* Video Section */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
  <div className="rounded-lg overflow-hidden h-96 flex items-center justify-center bg-blue-900 bg-opacity-60 p-6 md:p-8 lg:p-12 text-white">
    <section className="w-full">
      {/* Content */}
      <div className="rounded-b-md">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          {/* <div className="mb-4 md:mb-0">
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Homes</li>
              <li>Apartments</li>
              <li>Offices</li>
              <li>Condos</li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-xl font-semibold">We offer full cleaning services:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Home • Apartment • Office • Condos</li>
              <li>Vacuuming • Dusting • Blinds</li>
              <li>Furniture • Stoves • Microwaves</li>
              <li>Window Sills • Cabinets • Doors</li>
              <li>Ceiling Fans and more!</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-left mt-4">
          <p className="text-lg mb-2">
            <span className="font-bold">Call Now:</span> <a href="tel:+12675977272" className="text-sm md:text-base font-bold text-white hover:text-yellow-400">
              +1-267-597-7272
            </a>
          </p>
          <p className="text-sm">Please leave a message, we'll return your call promptly.</p>
          <p className="text-sm">
            <span className="font-bold">Email:</span>
            <a href="mailto:margaretclean@hotmail.com" className="text-sm md:text-base font-bold text-white hover:text-yellow-400">
              margaretclean@hotmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Slogan and Info */}
      <div className="bg-blue-700 bg-opacity-70 p-4 rounded-md mt-4 text-center">
        <p className="font-bold">You make the mess, we do the rest!</p>
        <p className="text-sm">Good References | FREE ESTIMATES | Call Today!</p>
      </div>
      <div className="flex items-center justify-center mb-4 md:mb-0">
        <p className="text-lg tilt-animation">Good Work at Low Prices!</p>
        
      </div>
    </section>
  </div>
</div>

        {/* Text and Image Section */}
        
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-16">
        <div className="relative w-full h-full">
          {/* Ensure the image covers the full area */}
          <img
            src={heroImage}
            alt="Cleaning Service"
            className="w-full h-full object-cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-blue-900 bg-opacity-60 p-4 md:p-8 lg:p-12">
            <h1 className="retro-text font-extrabold mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl">
              Sparkling Clean Homes, Every Time
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-white mb-4 md:mb-6 lg:mb-8">
              Experienced & Responsible!
            </p>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-lg"
              onClick={openModal}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Include Modal */}
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />

      <div className="container mx-auto px-4">
        {/* <WhyChoose /> */}
        <Testimonials />
      </div>
    </>
  );
};

export default Hero;
