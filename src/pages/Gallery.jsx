import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../css/Gallery.css";

export default function Gallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };



  const [isNavOpen, setIsNavOpen] = useState(false);





  return (
    <div>
      <div className="flex fixed items-center justify-between py-2 bg-transparent top-0 z-50 w-full px-10 lg:px-16 right-0 left-0 bg-white">
        <img src="./ecell.png" alt="Logo" className="object-contain w-32 mx-6 md:mx-4" />

        <nav>

          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 z-50 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-7 right-8 px-8 py-8 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <ul className="flex flex-col items-center justify-between min-h-[250px] text-[#0060A1] overflow-y-auto mobile-menu">
                <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl mobile">
                  <Link to="/back">HOME</Link>
                </li>

                <li className="border-b border-slate-100  my-8 uppercase font-semibold  text-slate-100 text-xl mobile">
                  <a href="/CONTACT">CONTACT</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-12 lg:flex text-white">
            <li className="text-xl font-semibold text-stone-950 desktop">
              <Link to="/back">HOME</Link>
            </li>
            <li className="text-xl font-semibold  text-stone-950 desktop">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgb(17 24 39);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      `}</style>
      </div>

      <section id="gallery2">
        <h1 className='gallery_header'>GALLERY</h1>

        {openModal &&
          <div className='sliderWrap'>
            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
            <div className='fullScreenImage'>
              <img src={galleryImages[slideNumber].img} alt='' />
            </div>
          </div>
        }

        <div className='galleryWrap'>
          {
            galleryImages && galleryImages.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={`single image-${index + 1}`}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.img} alt="" />
                </div>
              );

            })
          }
        </div>
      </section>
    </div>
  );
}
