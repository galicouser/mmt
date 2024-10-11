// src/components/Videos.jsx

import React from 'react';
import ReactPlayer from 'react-player';
import backgroundImg from '../assets/images/services/background.jpeg'; // Adjust this path to your background image

const Videos = () => {
  // Dummy video URLs
  const videoUrls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube video
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Another YouTube video
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Another YouTube video
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Another YouTube video
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Another YouTube video
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'  // Another YouTube video
  ];

  return (
    <section 
      className="flex bg-gray-100 py-10" 
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      
      <div className="container mx-auto">
      <h2 className="rounded-full shadow-lg text-3xl font-bold text-center mb-8 text-blue-900 bg-gray-300 w-64 mx-auto">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoUrls.map((url, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <ReactPlayer 
                url={url} 
                className="w-full" 
                width="100%" 
                height="200px" 
                controls={true} 
                light={true} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
