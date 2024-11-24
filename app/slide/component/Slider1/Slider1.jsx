'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import './slider1.css'
import ProfileImg1 from '@/public/profile-img-1.png'
import ProfileImg2 from '@/public/profile-img-2.png'
import ProfileImg3 from '@/public/profile-img-3.png'
import ProfileImg4 from '@/public/profile-img-4.png'
import ProfileImg5 from '@/public/profile-img-5.png'
import ProfileImg6 from '@/public/profile-img-6.png'
import ProfileImg7 from '@/public/profile-img-7.png'
import BgImage from '@/public/bg.svg'

import { useState, useEffect } from 'react'

const Slider1 = () => {
  const images = [
    {
      img: ProfileImg1,
      title: 'Hossein Profile1',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg2,
      title: 'Hossein Profile2',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg3,
      title: 'Hossein Profile3',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg4,
      title: 'Hossein Profile4',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg5,
      title: 'Hossein Profile5',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg6,
      title: 'Hossein Profile6',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    },
    {
      img: ProfileImg7,
      title: 'Hossein Profile7',
      title2: 'Vice President',
      details:
        'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.'
    }
  ]

  // Set the initial slide to the first image
  const [centerSlideData, setCenterSlideData] = useState(images[0])

  // useEffect(() => {
  //   // Ensure the centerSlideData is set on load for the first slide
  //   setCenterSlideData(images[0]);
  // }, [images]);

  const settings = {
    centerMode: true,
    centerPadding: '0px', // Reduce padding for a precise center
    variableWidth: false, // Disable for consistent slide width
    infinite: true,
    slidesToShow: 5, // Ensure at least one slide on either side of the center
    speed: 1000, // Decrease speed for smoother transition
    autoplay: true,
    arrows: true,
    dots: false,
    afterChange: current => {
      setCenterSlideData(images[current]) // Sync center slide data
    },
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 3,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 500, // Extra small screens
        settings: {
          slidesToShow: 3,
          centerPadding: '40px'
        }
      }
    ]
  }

  return (
    <div className='team-min-div'>
      {/* Display the current center slide image */}
      {/* Display center slide data */}
      {centerSlideData && (
        <div className='center-slide-data'>
          <Image
            src={centerSlideData.img}
            alt='Center Slide'
            width={1000}
            height={1000}
          />
          <h1 className='name'>{centerSlideData?.title}</h1>
          <div className='linear-bg'></div>
        </div>
      )}
      <div className='team-slider'>
        <div
          className={`blogCarousel`}
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center'
          }}
        >
          <div className='center-slider'>
            <div className='center-slider-contant'>
              <Image
                src={centerSlideData.img}
                alt='Center Slide'
                width={1000}
                height={1000}
                className='active-center-img'
              />
              <div className='active-slider'>
                <div className='user-info'>
                  <h1 className='title'>{centerSlideData?.title}</h1>
                  <p className='title2'>{centerSlideData?.title2}</p>
                </div>
                <p className='details'>{centerSlideData?.details}</p>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className={`blogPostBox`}>
                <div className={`blogPostImage`}>
                  <Image
                    src={src?.img}
                    alt={`Blog Post ${index + 1}`}
                    width={1000}
                    height={1000}
                    className='w-full h-full slider-img'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Slider1
