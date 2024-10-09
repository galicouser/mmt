import React from 'react';
import Slider from 'react-slick'; // Import react-slick

const testimonialsData = [
  {
    name: 'Sarah W.',
    review: 'Maggie\'s Magic Touch has transformed my home! Their attention to detail is incredible, and the staff is so friendly and professional.',
    image: 'https://via.placeholder.com/100', // Replace with real customer image
  },
  {
    name: 'John D.',
    review: 'The best cleaning service I\'ve ever hired. They always go above and beyond to ensure my home is sparkling.',
    image: 'https://via.placeholder.com/100', // Replace with real customer image
  },
  {
    name: 'Emily R.',
    review: 'I have never been more satisfied with a cleaning service. Highly recommend Maggie\'s Magic Touch for their excellent work!',
    image: 'https://via.placeholder.com/100', // Replace with real customer image
  },
  {
    name: 'Michael T.',
    review: 'My house feels brand new after every cleaning session! The team is efficient and leaves no stone unturned.',
    image: 'https://via.placeholder.com/100', // Replace with real customer image
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two reviews at a time (adjust based on design)
    slidesToScroll: 1,
    autoplay: true,  // Auto-play enabled
    autoplaySpeed: 3000, // Change slides every 3 seconds
    responsive: [
      {
        breakpoint: 768, // For smaller screens, show 1 slide at a time
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full h-24 w-24 mb-4"
                />
                <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                <h3 className="text-xl font-semibold text-yellow-500">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
