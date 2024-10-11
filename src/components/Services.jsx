import React from 'react';

// Import images directly
import houseCleaningImg from '../assets/images/services/0.png'; // Adjust the path
import officeCleaningImg from '../assets/images/services/1.png'; // Adjust the path
import windowCleaningImg from '../assets/images/services/2.png'; // Adjust the path
import moveCleaningImg from '../assets/images/services/3.png'; // Adjust the path
import deepCleaningImg from '../assets/images/services/0.png'; // Adjust the path
import backgroundImg from '../assets/images/services/background.jpeg'; // Adjust this path to your background image

const servicesList = [
  {
    name: "House Cleaning",
    description: "Our comprehensive house cleaning services ensure your home stays spotless and fresh, no matter the size. From dusting to deep cleaning, we've got you covered.",
    img: houseCleaningImg,
  },
  {
    name: "Office Cleaning",
    description: "Keep your workplace clean and productive with our office cleaning services.",
    img: officeCleaningImg,
  },
  {
    name: "Window Cleaning",
    description: "Get crystal clear windows with our professional window cleaning services.",
    img: windowCleaningImg,
  },
  {
    name: "Move In/Out Cleaning",
    description: "Make your moving experience easier with our move in/out cleaning services.",
    img: moveCleaningImg,
  },
  {
    name: "Deep Cleaning",
    description: "Our deep cleaning service tackles the toughest dirt and grime in your home.",
    img: deepCleaningImg,
  },
];

const Services = () => {
  return (
    <section 
      className="flex bg-gray-100 py-10" 
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="rounded-full shadow-lg text-3xl font-bold text-center mb-8 text-blue-900 bg-gray-300 w-64 mx-auto">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center relative transform transition h-100 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={service.img} 
                alt={service.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start items-center justify-start text-left p-4 bg-opacity-50">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.name}</h3>
                <p className="text-blue-900 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
