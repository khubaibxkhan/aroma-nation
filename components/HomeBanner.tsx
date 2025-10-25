"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ShoppingBag } from 'lucide-react';


const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample carousel data - mix of images and videos
  const carouselData = [
    {
      id: 1,
      type: 'image',
      src: '/img1.jpg', // Your local image
      title: 'Grab Upto 50% Off On',
      subtitle: 'Selected Collections',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
      bgColor: 'bg-gradient-to-r from-purple-100 to-pink-100'
    },
    {
      id: 2,
      type: 'image', 
      src: '/logo.jpg', // You can change this to different image
      title: 'Fashion Sale',
      subtitle: 'Up to 70% Off',
      buttonText: 'Explore',
      buttonLink: '/fashion',
      bgColor: 'bg-gradient-to-r from-blue-100 to-cyan-100'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/banner/img3.jpg', // You can change this to different image
      title: 'Smart Gadgets',
      subtitle: 'Latest Technology',
      buttonText: 'Buy Now',
      buttonLink: '/gadgets',
      bgColor: 'bg-gradient-to-r from-green-100 to-emerald-100'
    },
    {
      id: 4,
      type: 'video',
      src: '/videos/promo.mp4', // Your local video path
      poster: '/images/banner/img1.jpg', // Video poster image
      title: 'Watch Our Story',
      subtitle: 'Premium Quality Products',
      buttonText: 'Learn More',
      buttonLink: '/about',
      bgColor: 'bg-gradient-to-r from-gray-100 to-slate-100'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev: number) => (prev + 1) % carouselData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide]);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="relative w-full h-[40vh] overflow-hidden rounded-xl shadow-2xl bg-white">
      {/* Main Carousel Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            className={`flex-none w-full h-full relative ${item.type === 'video' ? 'bg-black' : item.bgColor}`}
          >
            {item.type === 'video' ? (
              /* Full Screen Video Layout */
              <div className="relative w-full h-full">
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
                
                {/* Optional subtle overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
            ) : (
              /* Image Layout with Text */
              <div className="flex flex-col md:flex-row items-center justify-between h-full px-3 md:px-6 lg:px-12">
                {/* Text Content */}
                <div className="flex-1 z-10 max-w-lg text-center md:text-left mb-2 md:mb-0">
                  <h1 className="text-sm md:text-lg lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2 leading-tight">
                    {item.title}
                    <br className="hidden md:block" />
                    <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-1 md:ml-0">
                      {item.subtitle}
                    </span>
                  </h1>
                  
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-1 md:gap-2 mx-auto md:mx-0">
                    <ShoppingBag size={14} className="md:w-4 md:h-4" />
                    {item.buttonText}
                    <ChevronRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Media Content */}
                <div className="flex-1 flex justify-center items-center h-full pt-8">
                  <div className="relative w-full max-w-[120px] md:max-w-xs lg:max-w-sm h-full">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-max max-h-[30vh] object-contain rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 md:p-2 shadow-lg transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="text-gray-800" size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 md:p-2 shadow-lg transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="text-gray-800" size={16} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 md:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
          />
        ))}
      </div>


      </div>
    </div>
  );
};

export default HomeBanner;