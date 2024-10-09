import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHome, faCheckCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">Why Choose Maggies Magic Touch?</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-4 rounded shadow flex items-start">
          <FontAwesomeIcon icon={faLeaf} className="text-4xl text-black mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-black">Eco-Friendly</h3>
            <p className="text-black">We carefully selected a combination of green and conventional products for a super clean that is safe and effective. We are also good stewards of Mother Nature.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex items-start">
          <FontAwesomeIcon icon={faHome} className="text-4xl text-black mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-black">Locally Owned</h3>
            <p className="text-black">Unlike corporate franchises, we thrive because of our location, not in spite of it.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex items-start">
          <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-black mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-black">Professional Service</h3>
            <p className="text-black">Your home is your most personal space and your biggest investment. We invest heavily in training to deliver the highest level of professionalism and care.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex items-start">
          <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-black mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-black">Healthier Environment</h3>
            <p className="text-black">We’ve been color coding tools since the start to keep germs from hopping between areas. Add pro vacuums with an advanced ProLevel Filtration and the result is healthier air in your home.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
