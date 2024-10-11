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
          <div className="rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <ReactPlayer
              url={videoSource}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>
        {/* Text and Image Section */}
        
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-16">
          <div className="relative">
            <img src={heroImage} alt="Cleaning Service" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-blue-900 bg-opacity-60 p-4 md:p-8 lg:p-12">
              <h1 className="retro-text font-extrabold mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl">
                Sparkling Clean Homes, Every Time
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-white mb-4 md:mb-6 lg:mb-8">
                We provide premium cleaning services to make your home shine bright.
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
        <WhyChoose />
        <Testimonials />
      </div>
    </>
  );
};

export default Hero;
