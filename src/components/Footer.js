import React from 'react';
import logo1 from '../assests/logo1.png';
import logo2 from '../assests/logo2.png';
import logo3 from '../assests/logo3.png';
import logo4 from '../assests/logo4.png';
import eye from '../assests/eye.png';
import Dribble from '../assests/Dribble.png';
import Fiverr from '../assests/Fiverr.png';
import Upwork from '../assests/Upwork.png';
import Facebook from '../assests/Facebook.png';
import Linkedin from '../assests/LinkedIn.png';
import Instagram from '../assests/Instagram.png';

const Footer = () => {
  const sponsorLogoDesign = 'w-[4rem] h-28 md:w-[10rem] md:h-28';
  const sponsorLogoDesign2 = 'lg:w-[10rem] lg:h-14 my-2 md:w-[8rem] md:h-10';
  const socialDesign = 'lg:h-6 md:h-5';

  return (
    <div className="bg-background-gray px-4 md:px-8 lg:px-28 py-8">
      {/* LOGO CONTAINER */}
      <div className="flex flex-wrap justify-center md:px-32 px-12 md:gap-2 md:justify-between mb-4">
        <img className={sponsorLogoDesign} src={logo1} alt="logo1" />
        <img className={sponsorLogoDesign} src={logo2} alt="logo2" />
        <img className={sponsorLogoDesign} src={logo3} alt="logo3" />
        <img className={sponsorLogoDesign} src={logo4} alt="logo4" />
      </div>

      {/* EYE LOGO CONTAINER */}
      <div className="flex justify-start my-4 ">
        <img src={eye} alt="eye" className="lg:w-40 lg:h-20 md:w-36" />
      </div>

      {/* LINK CONTAINER */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* SPONSORS LOGO */}
        <div className="lg:mt-10 flex flex-col items-center md:items-start ">
          <img className={sponsorLogoDesign2} src={Upwork} alt="Upwork" />
          <img className={sponsorLogoDesign2} src={Dribble} alt="Dribble" />
          <img className={sponsorLogoDesign2} src={Fiverr} alt="Fiverr" />
        </div>

        {/* LINKS CONTAINER */}
        <div className="flex flex-col lg:mt-12 md:flex-row md:space-x-24 gap-8 md:gap-16">
          <div>
            <h1 className="mb-4 text-lg font-bold md:text-2xl">Quick Links</h1>
            <ul className="space-y-1 font-medium lg:text-lg sm:text-sm md:text-base">
              <li>Home</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-lg font-bold md:text-2xl">
              Event Manager
            </h1>
            <ul className="space-y-1 font-medium lg:text-lg sm:text-sm md:text-base">
              <li>Event Planning & Coordination</li>
              <li>Vendor Management</li>
              <li>Logistics & Operations</li>
              <li>Budgeting & Cost Management</li>
              <li>Client Relationship Management</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-lg font-bold md:text-2xl">Connect</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <img className={socialDesign} src={Linkedin} alt="LinkedIn" />
              </li>
              <li>
                <img className={socialDesign} src={Instagram} alt="Instagram" />
              </li>
              <li>
                <img className={socialDesign} src={Facebook} alt="Facebook" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray mt-8">
        © 2024 Copyright, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
