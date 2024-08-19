import { useState, useEffect } from "react";
import Football from "../../assets/Football.jpg";
import Cricket from "../../assets/Cricket.jpg";
import Swimming from "../../assets/Swimming.jpg";
import Vollyball from "../../assets/Vollyball.jpg";

const carouselItems = [
  {
    imgSrc: Cricket,
    alt: 'Slide 1',
    caption: 'Cricket',
  },
  {
    imgSrc: Football,
    alt: 'Slide 2',
    caption: 'Football',
  },
  {
    imgSrc: Swimming,
    alt: 'Slide 3',
    caption: 'Swimming',
  },
  {
    imgSrc: Vollyball,
    alt: 'Slide 4',
    caption: 'Volleyball',
  },
];

function TopSports() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 md:p-20">
     
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        Our Top Sports
      </h1>
      <div className="relative lg:w-full max-w-4xl mx-auto sm:w-full">
        
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 lg:h-[60vh] sm:w-full h-[40vh] relative group"
              >
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-lg">{item.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
        >
          ›
        </button>

        {/* Indicator dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`block h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSports;
