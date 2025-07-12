import React from "react";

import Oursolution from "./Component/Our-solution";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white flex justify-between items-center px-8 py-6 text-sm">
        <div className="font-bold text-lg tracking-wide">GENNEX</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Our Solutions</a></li>
          <li><a href="#" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#" className="hover:text-gray-300">Training</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Get In Touch</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              DIGITAL SOLUTIONS <br /> FOR YOUR BUSINESS
            </h1>
            <p className="mt-4 text-lg max-w-lg">
              Crafting innovative digital solutions to drive your business
              forward.
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            {/* Replace with actual image or SVG */}
            <div className="w-full h-64 bg-blue-700 rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <Oursolution/>
     

      {/* Featured Project */}
      <section className="bg-blue-800 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
            <h3 className="text-2xl font-bold">GENNEX</h3>
            <div className="flex gap-10 mt-4 text-lg">
              <div>
                <p className="font-bold">2024</p>
                <p className="text-sm">Founding</p>
              </div>
              <div>
                <p className="font-bold">30+</p>
                <p className="text-sm">Clients</p>
              </div>
            </div>
          </div>
          <div className="w-full h-48 bg-white rounded-lg" />
        </div>
      </section>
    </div>
  );
}
