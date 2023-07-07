import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "../css/Gallery.css";
export default function Gallery2({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }
  return (
    <section id="gallery2">
      {/* <div className = "back">
        <Link to ="/back"><button> Home</button></Link>
      </div>  */}
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
  )
}