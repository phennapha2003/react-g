import React from 'react';

// Assuming your logo image is in the 'src/assets' directory or 'public' directory
// If in 'src/assets', import it like this:
import GennexLogo from '../assets/GennexLogo.png'; // Adjust the path to your actual logo image

// If your logo is in the public folder, you can directly reference it as:
// const GennexLogo = '/GennexLogo.png'; // Assuming it's directly in 'public' or 'public/images/GennexLogo.png'

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-12">
          {/* Left Section - Logo */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center max-w-sm">
              <img
                src={GennexLogo} // Use the imported logo variable
                alt="Gennex Solutions Logo"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Section - Text Content and Stats */}
          <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Gennex Solutions Co., Ltd is a cutting-edge technology company that provides innovative
              solutions for businesses of all sizes. Founded in 2024, we are dedicated to helping our clients
              achieve their goals through customized and effective technology solutions. With over a
              decade of experience, we have built a reputation for delivering high-quality services to our clients.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-12 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">2024</p>
                <p className="text-lg text-gray-600">Founded</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">30+</p>
                <p className="text-lg text-gray-600">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">50+</p>
                <p className="text-lg text-gray-600">Projects done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;