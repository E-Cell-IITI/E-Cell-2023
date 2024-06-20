import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Footer(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const handPointerStyle = {
    cursor: 'pointer',
  };

  return (
    <section id="contact">
      <footer className="bg-black pb-8 pt-20 px-12 sm:px-8 lg:px-16 xl:px-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col space-y-4 sm:pl-20">
              <div className="flex items-center space-x-4 ">
                <img src={process.env.PUBLIC_URL + "/images/logo_ecell.svg"} alt="Logo" />
                <div className="flex flex-col space-y-1">
                  <span className="text-[#0060A1] font-bold text-3xl">Ecell</span>
                  <span className="text-white font-bold text-lg">IIT Indore</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href={props.linkedin} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaLinkedin className="text-black text-xl" />
                  </div>
                </a>
                <a href={props.twitter} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaTwitter className="text-black text-xl" />
                  </div>
                </a>
                <a href={props.instagram} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaInstagram className="text-black text-xl" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 text-white font-serif">
              <div className="text-lg font-bold font-sans">Address</div>
              <div className="text-gray-400">
                Room 302-B, PHY-1, Academic POD 
              </div>
              <div className="text-gray-400">
                 IIT Indore, Madhya Pradesh-452020
              </div>
              <div className="text-lg font-bold font-sans">Email</div>
              <div className="text-gray-400">ecell@iiti.ac.in</div>
            </div>
            <div className="flex flex-col space-y-4 text-white font-serif">
              <div className="text-lg font-bold font-sans">Phone</div>
              <div className="text-gray-400">Anubhuti Sharma: +91 6350365964</div>
              <div className="text-gray-400">Agrim Jain: +91 9811085456</div>
            </div>
          </div>
          <div className="mt-12 text-center text-white">
            &copy; {new Date().getFullYear()} {props.copyright}
          </div>
        </div>
      </footer>
    </section>
  );
}
