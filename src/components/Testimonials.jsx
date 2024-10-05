import React from 'react';

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
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto rounded-full h-24 w-24 mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <h3 className="text-xl font-semibold text-yellow-500">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
