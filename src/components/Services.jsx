import React from 'react';

const servicesList = [
  { name: "House Cleaning", icon: "fas fa-home" },
  { name: "Office Cleaning", icon: "fas fa-briefcase" },
  { name: "Deep Cleaning", icon: "fas fa-broom" },
  { name: "Window Cleaning", icon: "fas fa-window-restore" },
  { name: "Move In/Out Cleaning", icon: "fas fa-truck" },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className={`${service.icon} text-4xl mb-4 text-yellow-500`}></i>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600 mt-2">We offer top-notch {service.name.toLowerCase()} services tailored to your needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
