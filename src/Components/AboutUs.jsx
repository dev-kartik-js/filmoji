import React from 'react';
import { Netflix_logo } from "../utils/constants";
import mypic from '../utils/images/mypic.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      
      {/* Main Content */}
      <div className="relative pt-12 pb-24 px-4 md:px-8">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <img 
            className="w-full h-full object-cover opacity-30" 
            src="https://i.pinimg.com/1200x/33/9c/76/339c762c2f72885d2e5ab7c6be772ec9.jpg" 
            alt="background" 
          />
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-72 md:w-64 md:h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-cyan-400 transform hover:scale-105 transition duration-300">
              <img
                src={mypic}
                alt="Kartik Soni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-white space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 pb-2 border-b-4 border-cyan-500">
              About Filmoji
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-bold text-cyan-400">Filmoji</span>  is a creative and educational project inspired by the name of Ramoji Film City in Hyderabad. Designed and developed by
              <span className="text-cyan-400 font-semibold"> Kartik Soni</span>, this platform leverages modern web technologies like
              <span className="text-cyan-400"> React.js, Tailwind CSS</span>, and features cutting-edge AI integration through <span className="text-cyan-400">Gemini</span>.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Filmoji serves as an intelligent entertainment recommendation system where users receive personalized suggestions tailored to their unique tastes. 
              <span className="text-cyan-400 font-semibold"> Powered by AI</span>, the platform ensures a curated experience that evolves with individual preferences.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              This project demonstrates innovative approaches to content discovery and showcases how artificial intelligence can enhance user engagement in the world of cinema and television.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
