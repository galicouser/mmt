import React from 'react';
import ReactPlayer from 'react-player';
import videoSource from '../assets/videos/main.mp4'; // Adjust the path as necessary
import heroImage from '../assets/images/hero_image.png'; // Replace with your image path
import '../assets/css/hero.css'; // Ensure you have this CSS for additional styling if needed
import Testimonials from './Testimonials';
import WhyChoose from './WhyChoose';

const Hero = () => {
  return (
    <>
      <div className="flex bg-blue-900">
        {/* Video Section with Round Container */}
        <div className="relative w-1/2 flex items-center justify-center">
          <div className="rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div>
              <ReactPlayer
                url={videoSource}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                style={{ border: 'none' }} // No borders
              />
            </div>
          </div>
        </div>

        {/* Text and Image Section */}
        <div className="relative w-1/2 flex items-center justify-center p-8">
          <div className="relative">
            <img src={heroImage} alt="Cleaning Service" className="w-full h-auto" />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-blue-900 bg-opacity-60 p-8">
              <h1 className="retro-text font-extrabold text-white mb-4">Sparkling Clean Homes, Every Time</h1>
              <p className="text-lg text-white mb-8">We provide premium cleaning services to make your home shine bright.</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhyChoose />
      <Testimonials />
    </>
  );
};

export default Hero;
