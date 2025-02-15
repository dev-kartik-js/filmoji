import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          
          {/* Left Section */}
          <div className="group flex items-center space-x-2 cursor-default">
            <div className="relative h-7 w-7 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">KS</span>
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-base font-semibold text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text tracking-wide">
              Designed & Developed by<br />
              <span className="text-xs font-medium text-gray-400">Kartik Soni</span>
            </h3>
          </div>

          {/* Center Section - Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500 font-light tracking-wide">
              © {year} Kartik Soni. All rights reserved
              
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4">
            {[
              { icon: <AiOutlineMail />, href: 'mailto:kartiksoni.js@gmail.com', color: 'hover:text-blue-400' },
              { icon: <AiFillGithub />, href: 'https://github.com/dev-kartik-js', color: 'hover:text-gray-300' },
              { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/kartik-soni11/', color: 'hover:text-blue-500' },
              { icon: <AiFillInstagram />, href: 'https://www.instagram.com/_x_kartik_._', color: 'hover:text-pink-500' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-gray-400 ${item.color} transition-all duration-200 ease-out transform hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative p-1.5 rounded-full hover:bg-white/5 transition-colors duration-200">
                  {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
                  <div className="absolute inset-0 rounded-full border border-white/5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;